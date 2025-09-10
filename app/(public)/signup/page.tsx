"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserAuth } from "@/app/context/AuthContext";

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    storeName: "",
  });
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [rePasswordError, setRePasswordError] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [error, setError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const { session, signUpNewUser, signInWithGoogle, signInWithGitHub } =
    UserAuth()!;

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const isPasswordMismatch = signupData?.password !== signupData?.rePassword;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailInvalid = !emailRegex.test(signupData?.email);
    const nameRegex = /^[A-Za-z\s'-]+$/;
    const isFirstNameInvalid = !nameRegex.test(signupData?.firstName.trim());
    const isLastNameInvalid = !nameRegex.test(signupData?.lastName.trim());

    setEmailError(!signupData?.email);
    setPasswordError(!signupData?.password);
    setRePasswordError(!signupData?.rePassword);
    setPasswordMismatch(isPasswordMismatch);
    setFirstNameError(!signupData?.firstName || isFirstNameInvalid);
    setLastNameError(!signupData?.lastName || isLastNameInvalid);

    if (
      !signupData?.firstName ||
      isFirstNameInvalid ||
      !signupData?.lastName ||
      isLastNameInvalid ||
      !signupData?.email ||
      isEmailInvalid ||
      !signupData?.password ||
      isPasswordMismatch
    ) {
      return;
    }

    setFormLoading(true);

    try {
      const result = await signUpNewUser(
        signupData?.email,
        signupData?.password,
        signupData?.firstName,
        signupData?.lastName,
        signupData?.storeName
      );
      console.log("TESTETSET")
      if (result.success) {
        router.push("/user");
      } else {
        setError(result.error?.message || "Sign-up failed.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`An error occurred: ${err.message}`);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setFormLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const result = await signInWithGoogle();
    if (!result?.success) {
    } else {
      router.push("/user");
    }
  };

  const handleGitHubLogin = async () => {
    const result = await signInWithGitHub();
    if (!result?.success) {
    } else {
      router.push("/user");
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/user");
    }
  }, [router, session]);

  return (
    <main
      id="/register-account"
      className="w-full 4xl:flex-none flex-1 flex justify-center items-center overflow-hidden"
    >
      <div className="w-full max-w-[1280px] !mx-auto sm:px-5 px-4 3xl:py-20 py-10 flex lg:flex-row flex-col-reverse justify-center lg:items-start items-center">
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-[500px] rounded-2xl sm:p-8 p-6 gap-6 flex flex-col justify-start bg-secondaryBackground border dark:shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Create an account</h1>
            <p className="lg:text-base text-sm text-secondary">
              Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col gap-5 text-sm">
            <div className="flex gap-3">
              {/* First Name */}
              <div className="flex flex-col gap-2 text-left w-full">
                <div className="flex items-center gap-1">
                  <p
                    className={
                      firstNameError ? "text-red-500" : "text-secondary"
                    }
                  >
                    First name
                  </p>
                  {firstNameError && (
                    <span className="text-red-500 text-sm">*</span>
                  )}
                </div>
                <input
                  type="text"
                  value={signupData?.firstName}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[A-Za-z\s'-]*$/.test(value)) {
                      setSignupData((prev) => ({
                        ...prev,
                        firstName: value,
                      }));
                    }
                  }}
                  className={`w-full h-10 px-4 border rounded-lg outline-none 
        ${firstNameError ? "border-red-500" : "border"} 
        darkfocus:shadow-sm focus-visible:ring-1 dark:ring-stone-50 ring-stone-700`}
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2 text-left w-full">
                <div className="flex items-center gap-1">
                  <p
                    className={
                      lastNameError ? "text-red-500" : "text-secondary"
                    }
                  >
                    Last name
                  </p>
                  {lastNameError && (
                    <span className="text-red-500 text-sm">*</span>
                  )}
                </div>
                <input
                  type="text"
                  value={signupData?.lastName}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[A-Za-z\s'-]*$/.test(value)) {
                      setSignupData((prev) => ({
                        ...prev,
                        lastName: value,
                      }));
                    }
                  }}
                  className={`w-full h-10 px-4 border rounded-lg outline-none 
        ${lastNameError ? "border-red-500" : "border"} 
        darkfocus:shadow-sm focus-visible:ring-1 dark:ring-stone-50 ring-stone-700`}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-1">
                <p className={emailError ? "text-red-500" : "text-secondary"}>
                  Email address
                </p>
                {emailError && <span className="text-red-500 text-sm">*</span>}
              </div>
              <div className="relative w-full">
                <input
                  value={signupData?.email}
                  type="email"
                  onChange={(e) =>
                    setSignupData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className={`w-full h-10 px-4 border rounded-lg outline-none
        ${emailError ? "border-red-500" : "border"} 
        darkfocus:shadow-sm focus-visible:ring-1 dark:ring-stone-50 ring-stone-700`}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-1">
                <p
                  className={passwordError ? "text-red-500" : "text-secondary"}
                >
                  Password
                </p>
                {passwordError && (
                  <span className="text-red-500 text-sm">*</span>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={signupData?.password}
                  onChange={(e) =>
                    setSignupData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className={`w-full h-10 px-4 pr-11 border rounded-lg outline-none
        ${passwordError ? "border-red-500" : "border"} 
        darkfocus:shadow-sm focus-visible:ring-1 dark:ring-stone-50 ring-stone-700 
        [appearance:textfield] [&::-ms-reveal]:hidden [&::-ms-clear]:hidden [&::-webkit-credentials-auto-fill-button]:hidden`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-secondary"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Re-enter Password */}
            <div className="flex flex-col gap-2 text-left !mb-2">
              <div className="flex items-center gap-1">
                <p
                  className={cn(
                    "text-secondary",
                    (rePasswordError || passwordMismatch) && "text-red-600"
                  )}
                >
                  Re-enter Password
                </p>
                {(rePasswordError || passwordMismatch) && (
                  <span className="text-red-600 text-sm">*</span>
                )}
              </div>
              <input
                type="password"
                value={signupData?.rePassword}
                onChange={(e) =>
                  setSignupData((prev) => ({
                    ...prev,
                    rePassword: e.target.value,
                  }))
                }
                className={cn(
                  "w-full h-10 px-4 pr-11 border rounded-lg outline-none darkfocus:shadow-sm focus-visible:ring-1 dark:ring-stone-100 ring-stone-700 [appearance:textfield] [&::-ms-reveal]:hidden [&::-ms-clear]:hidden [&::-webkit-credentials-auto-fill-button]:hidden",
                  rePasswordError || passwordMismatch
                    ? "border-red-500 text-red-600"
                    : "border"
                )}
              />

              {passwordMismatch && (
                <span className="text-red-600 text-sm mt-1">
                  Passwords do not match
                </span>
              )}
            </div>

            <Button
              aria-label="Create account"
              type="submit"
              disabled={formLoading}
              className="font-semibold sm:text-base text-sm rounded-lg h-10 w-full flex justify-center items-center"
            >
              Create account
            </Button>

            {error && (
              <p className="text-red-500 text-base font-medium text-center !mt-2">
                {error}
              </p>
            )}
          </div>

          <div className="sm:my-1 w-full h-[1px] rounded-full dark:bg-secondary/0 bg-gradient-to-l from-secondary/0 via-secondary to-secondary/0"></div>

          <div className="w-full flex flex-col gap-3">
            <button
              type="button"
              onClick={() => handleGoogleLogin()}
              className="w-full sm:h-12 h-10 dark:bg-input/50 hover:dark:bg-input active:dark:bg-input dark:border bg-input/20 hover:bg-input/30 active:bg-input/30 border transition-default rounded-full flex justify-center items-center gap-2 cursor-pointer"
            >
               <FcGoogle className="sm:text-[20px] text-[16px]" />
              <p className="sm:text-sm text-[13px]">Continue with Google</p>
            </button>
            <button
              type="button"
              onClick={() => handleGitHubLogin()}
              className="w-full sm:h-12 h-10 dark:bg-input/50 hover:dark:bg-input active:dark:bg-input dark:border bg-input/20 hover:bg-input/30 active:bg-input/30 border transition-default rounded-full flex justify-center items-center gap-2 cursor-pointer"
            >
               <FaGithub className="sm:text-[18px] text-[15px]" />
              <p className="sm:text-sm text-[13px]">Sign in with Github</p>
            </button>
          </div>

          <p className="text-center text-sm text-secondary">
            Already have an account?
            <Link
              href={"/login"}
              className="font-semibold underline underline-offset-4 !ml-1 text-foreground"
            >
              Log in
            </Link>
          </p>
        </form>

        <div className="w-full lg:max-w-1/2 max-w-[450px] lg:p-10 lg:!mb-0 !mb-8">
          <div className="sm:p-5 px-5 flex flex-col sm:gap-3 gap-2 w-full lg:items-start items-center">
            <h1 className="sm:text-[2rem] text-[1.5rem] font-semibold">Start your Writual</h1>
            <p className="text-secondary md:max-w-[340px] lg:text-left text-center">
               A fast, easy, and free way to write notes, manage your daily
              tasks, and build better habits.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
