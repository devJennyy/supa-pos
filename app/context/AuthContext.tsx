/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { supabase } from "../supabaseClient";

type AuthContextType = {
  session: any;
  signUpNewUser: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    storeName: string,
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

  // Sign up
  const signUpNewUser = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    storeName: string,
  ) => {
    try {
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
        });

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

      return { success: true, data: signUpData };
    } catch (err) {
      console.error("Unexpected error:", err);
      return {
        success: false,
        error: { message: "Unexpected error occurred." },
      };
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Sign in
  const signInUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error || !data.session) {
        console.error(
          "Sign in error occurred: ",
          error || "No session returned"
        );
        return {
          success: false,
          error: error?.message || "No session returned",
        };
      }

      console.log("Sign in success: ", data);
      return { success: true, data };
    } catch (error) {
      console.error("An unexpected error occurred: ", error);
      return { success: false, error: "Unexpected error" };
    }
  };

  // Sign out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("There was an error: ", error);
      return;
    }

    return new Promise<void>((resolve) => {
      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          if (!session) {
            listener.subscription.unsubscribe();
            resolve();
          }
        }
      );
    });
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/main`,
        },
      });

      if (error) {
        console.error("Google sign-in error:", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (err) {
      console.error("Unexpected error:", err);
      return {
        success: false,
        error: { message: "Unexpected error occurred" },
      };
    }
  };

  // Sign in with Github
  const signInWithGitHub = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/main`,
        },
      });

      if (error) {
        console.error("GitHub sign-in error:", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (err) {
      console.error("Unexpected error:", err);
      return {
        success: false,
        error: { message: "Unexpected error occurred" },
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
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

export const UserAuth = () => {
  return useContext(AuthContext);
};
