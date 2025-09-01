/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { supabase } from "../supabaseClient";
import { useRouter } from "next/navigation";

type ProfileType = {
  id: string;
  first_name: string;
  last_name: string;
  store_name: string;
  email: string;
  setup_complete: boolean;
  [key: string]: any;
};

type AuthContextType = {
  session: any;
  profile: ProfileType | null;
  signUpNewUser: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    storeName: string
  ) => Promise<{ success: boolean; data?: any; error?: any }>;
  signInUser: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; data?: any; error?: any }>;
  signInWithGoogle: () => Promise<{
    success: boolean;
    data?: any;
    error?: any;
  }>;
  signInWithGitHub: () => Promise<{
    success: boolean;
    data?: any;
    error?: any;
  }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<{ success: boolean; data?: any; error?: any }>; 
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<any>(undefined);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const router = useRouter();

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();

      if (error) {
        console.error("Error fetching profile:", error);
        setProfile(null);
        return { success: false, error };
      }

      if (data) {
        setProfile(data);
        return { success: true, data };
      } else {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session) {
          const { id, email, user_metadata } = session.user;

          const firstName =
            user_metadata?.given_name ||
            user_metadata?.full_name?.split(" ")[0] ||
            "";
          const lastName =
            user_metadata?.family_name ||
            user_metadata?.full_name?.split(" ").slice(1).join(" ") ||
            "";
          const storeName = "";

          const { error: profileError, data: insertedProfile } = await supabase
            .from("profiles")
            .upsert(
              [
                {
                  id,
                  first_name: firstName,
                  last_name: lastName,
                  store_name: storeName,
                  email,
                  setup_complete: false,
                },
              ],
              { onConflict: "id" }
            )
            .select()
            .single();

          if (profileError) {
            console.error("Profile upsert failed:", profileError);
            setProfile(null);
            return { success: false, error: profileError };
          }

          setProfile(insertedProfile);
          return { success: true, data: insertedProfile };
        }
      }

      setProfile(null);
      return { success: false, error: "Profile not found" };
    } catch (err) {
      console.error("Unexpected error fetching profile:", err);
      setProfile(null);
      return { success: false, error: err };
    }
  };

useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);

    if (session?.user?.id) {
      fetchUserProfile(session.user.id);
    }
  });

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);

    if (session?.user?.id) {
      fetchUserProfile(session.user.id);
    } else {
      setProfile(null);
    }
  });

  return () => subscription.unsubscribe();
}, []);


  // Sign up
  const signUpNewUser = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    storeName: string
  ) => {
    try {
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({ email, password });

      if (signUpError || !signUpData.user) {
        console.error("Sign-up failed:", signUpError);
        return {
          success: false,
          error: signUpError || { message: "No user returned" },
        };
      }

      const userId = signUpData.user.id;

      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: userId,
          first_name: firstName,
          last_name: lastName,
          store_name: storeName,
          email,
          setup_complete: false,
        },
      ]);

      if (profileError) {
        console.error("Profile insert failed:", profileError);
        return { success: false, error: profileError };
      }

      await fetchUserProfile(userId);

      return { success: true, data: signUpData };
    } catch (err) {
      console.error("Unexpected error:", err);
      return {
        success: false,
        error: { message: "Unexpected error occurred." },
      };
    }
  };

  // Sign in
  const signInUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error || !data.session) {
        console.error("Sign in error:", error || "No session returned");
        return {
          success: false,
          error: error?.message || "No session returned",
        };
      }

      if (data.session.user?.id) await fetchUserProfile(data.session.user.id);

      return { success: true, data };
    } catch (err) {
      console.error("Unexpected sign-in error:", err);
      return { success: false, error: "Unexpected error" };
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const { data: oauthData, error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/user/dashboard` },
      });

      if (oauthError) {
        console.error("Google sign-in error:", oauthError);
        return { success: false, error: oauthError };
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        return { success: false, error: "No session found after Google sign-in" };
      }

      const user = session.user;

      const profileResult = await fetchUserProfile(user.id);

      if (!profileResult.success) {
        console.error("Failed to fetch or create profile:", profileResult.error);
        return { success: false, error: profileResult.error };
      }

      return { success: true, data: session };
    } catch (err) {
      console.error("Unexpected Google sign-in error:", err);
      return { success: false, error: { message: "Unexpected error occurred" } };
    }
  };



  // Sign in with GitHub
  const signInWithGitHub = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: { redirectTo: `${window.location.origin}/user/dashboard` },
      });

      if (error) {
        console.error("GitHub sign-in error:", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (err) {
      console.error("Unexpected GitHub sign-in error:", err);
      return {
        success: false,
        error: { message: "Unexpected error occurred" },
      };
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setProfile(null);
      setSession(null);

      router.replace("/");
    } catch (err: any) {
      console.error("Sign-out error:", err.message);
      alert("Failed to sign out. Please try again.");
    }
  };

  const refreshProfile = async () => {
    if (session?.user?.id) {
      const result = await fetchUserProfile(session.user.id);
      return result;
    }
    return { success: false, error: "No session available" };
  };


  return (
    <AuthContext.Provider
      value={{
        session,
        profile,
        signUpNewUser,
        signInUser,
        signOut,
        signInWithGoogle,
        signInWithGitHub,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return useContext(AuthContext);
};
