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
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<any>(undefined);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const router = useRouter();

  // Fetch profile by userId
  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        setProfile(null);
        return;
      }

      setProfile(data);
    } catch (err) {
      console.error("Unexpected error fetching profile:", err);
      setProfile(null);
    }
  };

  // Monitor session changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user?.id) fetchUserProfile(session.user.id);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user?.id) fetchUserProfile(session.user.id);
      else setProfile(null);
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
        return { success: false, error: signUpError || { message: "No user returned" } };
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
      return { success: false, error: { message: "Unexpected error occurred." } };
    }
  };

  // Sign in
  const signInUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error || !data.session) {
        console.error("Sign in error:", error || "No session returned");
        return { success: false, error: error?.message || "No session returned" };
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
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/user` },
      });

      if (error) {
        console.error("Google sign-in error:", error);
        return { success: false, error };
      }

      return { success: true, data };
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
        options: { redirectTo: `${window.location.origin}/user` },
      });

      if (error) {
        console.error("GitHub sign-in error:", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (err) {
      console.error("Unexpected GitHub sign-in error:", err);
      return { success: false, error: { message: "Unexpected error occurred" } };
    }
  };

  // Sign out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign-out error:", error);
      return;
    }
    setProfile(null);
    setSession(null);

    router.push("/");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const UserAuth = () => {
  return useContext(AuthContext);
};
