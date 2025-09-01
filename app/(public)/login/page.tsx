"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserAuth } from "@/app/context/AuthContext";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const { session, signInUser, signInWithGoogle, signInWithGitHub } =
    UserAuth()!;

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    let hasError = false;

    if (email.trim() === "") {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (password.trim() === "") {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (hasError) {
      return;
    }

    setFormLoading(true);

    const result = await signInUser(email, password);

    if (result.success) {
      router.push("/user");
    } else {
      setError(result.error || "Invalid email or password");
    }

    setFormLoading(false);
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
  }, [session, router]);

  return (
    <main
      id="/login"
      className="w-full 4xl:flex-none flex-1 flex justify-center items-center overflow-hidden"
    >
      <div className="w-full max-w-[1280px] !mx-auto sm:px-5 px-4 3xl:py-20 py-10 flex lg:flex-row flex-col-reverse justify-center lg:items-start items-center">
        <form
          onSubmit={handleLogIn}
          className="w-full max-w-[500px] rounded-3xl sm:py-10 p-8 gap-10 flex flex-col justify-start bg-secondaryBackground border dark:shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="w-full flex flex-col gap-1 ">
            <h1 className="text-2xl font-semibold">Welcome Back!</h1>
            <p className="text-base text-secondary">
              Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col gap-5 text-sm">
            {/* Email */}
            <div className="flex flex-col gap-2 text-left w-full">
              <div className="flex items-center gap-1">
                <p className={emailError ? "text-red-500" : "text-secondary"}>
                  Username, or email address
                </p>
                {emailError}
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  if (value.trim() !== "") {
                    setEmailError(false);
                  }
                }}
                onBlur={() => {
                  if (email.trim() === "") {
                    setEmailError(true);
                  }
                }}
                className={`w-full h-11 px-4 border rounded-lg outline-none
      ${emailError ? "border-red-500" : "border"}
      darkfocus:shadow-sm focus-visible:ring-1 dark:ring-stone-100 ring-stone-700`}
              />
            </div>

            {/* Password */}
            <div className=" flex flex-col gap-2 text-left">
              <div className="flex items-center gap-1">
                <p
                  className={passwordError ? "text-red-500" : "text-secondary"}
                >
                  Password
                </p>
                {passwordError}
              </div>

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (e.target.value.trim() !== "") {
                      setPasswordError(false);
                    }
                  }}
                  className={`w-full h-11 px-4 pr-11 border rounded-lg outline-none
        ${passwordError ? "border-red-500" : "border"}
        darkfocus:shadow-sm focus-visible:ring-1 dark:ring-stone-100 ring-stone-700 
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

              {/* Forgot Password */}
              <Dialog>
                <DialogTrigger asChild>
                  <p className="text-secondary hover:text-foreground transition-default text-end underline underline-offset-2 cursor-pointer !mt-1">
                    Forgot Password?
                  </p>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Reset your password</DialogTitle>
                    <DialogDescription className="!mt-1">
                      Enter your email address and we&apos;ll send you a reset
                      link.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3 !mt-3">
                      <Label htmlFor="username-1">Email</Label>
                      <Input
                        id="username-1"
                        name="username"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          const value = e.target.value;
                          setEmail(value);
                          if (value.trim() !== "") {
                            setEmailError(false);
                          }
                        }}
                        onBlur={() => {
                          if (email.trim() === "") {
                            setEmailError(true);
                          }
                        }}
                        className={`w-full h-11 px-4 border rounded-lg outline-none
    ${emailError ? "border-red-500" : "border"}
    darkfocus:shadow-sm focus-visible:ring-1 dark:ring-stone-100 ring-stone-700`}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className="w-full bg-brand hover:bg-brandHover font-semibold"
                    >
                      Send Email
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Button
              aria-label="Get Started"
              type="submit"
              disabled={formLoading}
              className="font-semibold text-base rounded-lg h-12 w-full flex justify-center items-center"
            >
              Get Started
            </Button>

            {error && (
              <p className="text-red-500 text-base font-medium text-center !mt-2">
                {error}
              </p>
            )}
          </div>

          <div className="w-full h-[1px] rounded-full !mt-[-5px] dark:bg-foreground/0 bg-gradient-to-l from-foreground/0 via-foreground to-foreground/0"></div>

          <div className="w-full flex flex-col gap-3 !mt-[-10px]">
            <button
              type="button"
              onClick={() => handleGoogleLogin()}
              className="w-full h-12 dark:bg-input/50 hover:dark:bg-input active:dark:bg-input dark:border bg-input/20 hover:bg-input/30 active:bg-input/30 border transition-default rounded-full flex justify-center items-center gap-2 cursor-pointer"
            >
              <FcGoogle size={20} />
              <p className="text-sm">Continue with Google</p>
            </button>
            <button
              type="button"
              onClick={() => handleGitHubLogin()}
              className="w-full h-12 dark:bg-input/50 hover:dark:bg-input active:dark:bg-input dark:border bg-input/20 hover:bg-input/30 active:bg-input/30 border transition-default rounded-full flex justify-center items-center gap-2 cursor-pointer"
            >
              <FaGithub size={18} />
              <p className="text-sm">Sign in with Github</p>
            </button>
          </div>

          <p className="text-center text-sm text-secondary">
            New to Writual?
            <Link
              href={"/signup"}
              className="font-semibold underline underline-offset-4 !ml-1 text-foreground"
            >
              Sign up
            </Link>
          </p>
        </form>

        <div className="w-full lg:max-w-1/2 max-w-[450px] lg:p-10 lg:!mb-0 !mb-5">
          <div className="p-5 flex flex-col gap-3 w-full lg:items-start items-center">
            <h1 className="text-[2rem] font-semibold">Start your Writual</h1>
            <p className="text-secondary text-lg md:max-w-[340px] lg:text-left text-center">
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
