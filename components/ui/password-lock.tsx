"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/app/supabaseClient";
import { Label } from "@/components/ui/label";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ConfirmPasswordModal({
  isOpen,
  onClose,
  onSuccess,
}: Props) {
  const [view, setView] = useState<"confirm" | "forgot">("confirm");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleConfirm = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    if (!user.email) {
      setError("User email not found");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password,
    });

    if (error) {
      setError("Incorrect password");
    } else {
      setError("");
      onClose();
      onSuccess();
    }
  };

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setError(error.message);
    } else {
      setError("");
      alert("Reset email sent!");
      setView("confirm");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        {view === "confirm" ? (
          <>
            <DialogHeader>
              <DialogTitle>Confirm Password</DialogTitle>
              <DialogDescription>
                If you are the account owner, please enter your password to
                unlock settings.
              </DialogDescription>
            </DialogHeader>

            {error && <p className="text-red-500 text-sm mt-1 !mb-[-5px]">{error}</p>}
            
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`h-11 rounded-lg outline-none px-3
                ${
                error
                    ? "border-red-500 ring-red-500 focus:ring-1"
                    : "border-stone-300 focus:ring-primary"
                }`}
            />

            <p
              className="text-sm dark:text-secondary hover:text-foreground transition-default text-end underline underline-offset-4 cursor-pointer"
              onClick={() => setView("forgot")}
            >
              Forgot Password?
            </p>

            <DialogFooter className="lg:!mt-4 !mt-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleConfirm}>Confirm</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Reset your password</DialogTitle>
              <DialogDescription>
                Enter your email address and we&apos;ll send you a reset link.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="grid gap-3 !mt-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                    if (value.trim() !== "") setEmailError(false);
                  }}
                  onBlur={() => {
                    if (email.trim() === "") setEmailError(true);
                  }}
                  className="mb-2 h-11"
                />
              </div>
            </div>

            <DialogFooter className="lg:!mt-4 !mt-2">
              <Button variant="outline" onClick={() => setView("confirm")}>
                Back
              </Button>
              <Button className="bg-primary" onClick={handleForgotPassword}>
                Send Email
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
