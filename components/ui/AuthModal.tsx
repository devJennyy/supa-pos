"use client";

import { useState } from "react";
import { LoginModal } from "./login-modal";
import { SignupModal } from "./signup-modal";

export const AuthModal = ({ onClose }: { onClose: () => void }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <>
      {isSignup ? (
        <SignupModal
          onClose={onClose}
          onSwitchToLogin={() => setIsSignup(false)}
        />
      ) : (
        <LoginModal
          onClose={onClose}
          onSwitchToSignup={() => setIsSignup(true)}
        />
      )}
    </>
  );
};
