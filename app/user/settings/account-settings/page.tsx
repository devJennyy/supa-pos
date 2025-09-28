/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { motion } from "framer-motion";
import AccountSettingsSkeleton from "@/components/settings/skeletons/AccountSettings";
import { FiPlus } from "react-icons/fi";
import { UserAuth } from "@/app/context/AuthContext";
import { useUploadAvatar } from "@/hooks/useUploadAvatar";
import { supabase } from "@/app/supabaseClient";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AccountSettingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const auth = UserAuth();
  const profile = auth?.profile;
  const dataLoading = auth?.loading;
  const { uploadAvatar } = useUploadAvatar();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [firstName, setFirstName] = useState(profile?.first_name || "");
  const [lastName, setLastName] = useState(profile?.last_name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [contactNumber, setContactNumber] = useState(
    profile?.contact_number || ""
  );
  const [storeName, setStoreName] = useState(profile?.store_name || "");
  const [businessNumber, setBusinessNumber] = useState(
    profile?.business_number || ""
  );
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name || "");
      setLastName(profile.last_name || "");
      setEmail(profile.email || "");
      setContactNumber(profile.contact_number || "");
      setStoreName(profile.store_name || "");
      setBusinessNumber(profile.business_number || "");
    }
  }, [profile]);

  if (dataLoading) {
    return <AccountSettingsSkeleton />;
  }

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);

    try {
      setUploading(true);
      const url = await uploadAvatar(file);
      if (url) {
        setImagePreview(url);
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const updateProfile = async (fields: Record<string, any>) => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      console.error("No user or error getting user:", userError);
      return;
    }

    const { error: updateError } = await supabase
      .from("profiles")
      .update(fields)
      .eq("id", user.id);

    if (updateError) {
      console.error("Error updating profile:", updateError);
    } else {
      if (auth?.refreshProfile) {
        await auth.refreshProfile();
      }
    }
  };

  const useDefaultAvatar = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      console.error("No user or error getting user:", userError);
      return;
    }

    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        avatar_url: "/images/default-avatar.svg",
      })
      .eq("id", user.id);

    if (updateError) {
      console.error("Error updating profile:", updateError);
    } else {
      if (auth?.refreshProfile) {
        await auth.refreshProfile();
      }
      window.location.reload();
    }
  };

  const updatePassword = async () => {
    if (newPassword !== confirmPassword) {
      setModalType("error");
      setModalMessage("Passwords do not match!");
      setModalOpen(true);
      return;
    }

    if (newPassword.length < 6) {
      setModalType("error");
      setModalMessage("Password must be at least 6 characters.");
      setModalOpen(true);
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setLoading(false);

    if (error) {
      setModalType("error");
      setModalMessage("Error updating password: " + error.message);
    } else {
      setModalType("success");
      setModalMessage("Password updated successfully!");
      setNewPassword("");
      setConfirmPassword("");
    }

    setModalOpen(true);
  };

  return (
    <main className=" w-full flex gap-5 lg:p-5 p-4 !mt-2">
      {isLoading ? (
        <>
          <AccountSettingsSkeleton />
        </>
      ) : (
        <>
          <div className="w-full max-w-3xl hidden lg:flex flex-col gap-5">
            {/* Profile Section */}
            <Card className="shadow-md rounded-2xl w-full">
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 w-full">
                {/* Profile Image Upload */}
                <div className="flex flex-col items-center space-y-8">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full dark:bg-input/50 bg-primary/20"
                          style={{ width: 216, height: 216 }}
                          animate={{
                            scale: [1, 1.3],
                            opacity: [0.8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeOut",
                            delay: i * 0.6,
                            repeatDelay: 1.2,
                          }}
                        />
                      ))}
                    </div>

                    {/* Main Circle with Image */}
                    <div className="relative z-10">
                      <div className="border-4 bg-border/70 rounded-full z-20 overflow-hidden w-54 h-54">
                        {uploading ? (
                          <div className="flex items-center justify-center w-full h-full">
                            <div className="animate-spin border-4 border-primary border-t-transparent rounded-full w-10 h-10" />
                          </div>
                        ) : profile?.avatar_url || imagePreview ? (
                          <motion.div
                            key={imagePreview ?? profile?.avatar_url}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full"
                          >
                            <Image
                              src={imagePreview ?? profile?.avatar_url ?? ""}
                              alt="Profile"
                              width={216}
                              height={216}
                              className="w-full h-full object-cover rounded-full"
                            />
                          </motion.div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-input">
                            <img
                              src="/images/default-avatar.svg"
                              alt="Default Avatar"
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>

                      <button
                        onClick={handleCameraClick}
                        className="cursor-pointer w-fit absolute bottom-[-1rem] left-1/2 -translate-x-1/2 bg-primary text-white p-2 rounded-full hover:opacity-90 border-4"
                      >
                        {uploading ? (
                          <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" />
                        ) : (
                          <FiPlus size={20} />
                        )}
                      </button>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                  <p className="text-2xl font-semibold !mt-1">
                    {profile?.store_name}
                  </p>

                  <div className="w-full flex flex-col gap-3">
                    {!imagePreview ? (
                      <Button
                        onClick={handleCameraClick}
                        className="text-foreground py-5 w-full dark:bg-input/30 bg-background border dark:hover:bg-input/60 hover:bg-input hover:border-primary/40 dark:hover:border-border transition-default"
                      >
                        Upload New Image
                      </Button>
                    ) : (
                      <Button
                        onClick={async () => {
                          await updateProfile({ avatar_url: imagePreview });
                          setIsSaved(true);

                          setTimeout(() => {
                            setIsSaved(false);
                            setImagePreview(null);
                          }, 2000);
                        }}
                        className="border py-5 w-full bg-primary dark:hover:bg-primary/90 transition-default"
                      >
                        {isSaved ? "Saved!" : "Save Profile"}
                      </Button>
                    )}

                    <Button
                      onClick={useDefaultAvatar}
                      className="text-foreground py-5 w-full dark:bg-input/30 bg-background border dark:hover:bg-input/60 hover:bg-input hover:border-primary/40 dark:hover:border-border transition-default"
                    >
                      Use Default Avatar
                    </Button>
                  </div>
                </div>

                <div className="!my-10.5 w-full dark:h-[1.8px] h-[1.6px] rounded-full dark:bg-secondary/0 bg-gradient-to-l from-secondary/0 via-secondary to-secondary/0"></div>

                {/* User's Info */}
                <Card className="dark:shadow-md rounded-2xl w-full !mt-8 dark:bg-input/30">
                  <CardHeader>
                    <CardTitle>User Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 w-full">
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="ownersName" className="text-secondary">
                        Owner&apos;s Name
                      </Label>
                      <p className="tracking-wider">
                        {profile?.first_name || (
                          <span className="italic text-secondary">Not Set</span>
                        )}
                        <span className="!ml-1">{profile?.last_name}</span>
                      </p>
                    </div>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="emailAddress" className="text-secondary">
                        Email Address
                      </Label>
                      <p className="tracking-wider">
                        {profile?.email || (
                          <span className="italic text-secondary">Not Set</span>
                        )}
                      </p>
                    </div>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="shopName" className="text-secondary">
                        Shop Name
                      </Label>
                      <p className="tracking-wider">{profile?.store_name}</p>
                    </div>
                    <div className="flex">
                      <div className="grid gap-2 w-full">
                        <Label
                          htmlFor="contactNumber"
                          className="text-secondary"
                        >
                          Contact Number
                        </Label>
                        <p className="italic text-secondary">
                          {profile?.contact_number || (
                            <span className="italic text-secondary">
                              Not Set
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="grid gap-2 w-full">
                        <Label
                          htmlFor="businessNumber"
                          className="text-secondary"
                        >
                          Business Phone Number
                        </Label>
                        <p className="italic text-secondary">
                          {profile?.business_number || (
                            <span className="italic text-secondary">
                              Not Set
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          <div className="w-full flex flex-col gap-4 lg:max-w-full lg:mx-auto">
            {/* User Profile Section */}
            <Card className="shadow-md rounded-2xl w-full">
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 w-full">
                {/* Profile Image Upload */}
                <div className="lg:hidden relative z-10 flex justify-center items-center">
                  <div className="border-4 bg-border/70 rounded-full z-0 overflow-hidden w-36 h-36">
                    {uploading ? (
                      <div className="flex items-center justify-center w-full h-full">
                        <div className="animate-spin border-4 border-primary border-t-transparent rounded-full w-10 h-10" />
                      </div>
                    ) : profile?.avatar_url || imagePreview ? (
                      <motion.div
                        key={imagePreview ?? profile?.avatar_url}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={imagePreview ?? profile?.avatar_url ?? ""}
                          alt="Profile"
                          width={216}
                          height={216}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </motion.div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-input">
                        <img
                          src="/images/default-avatar.svg"
                          alt="Default Avatar"
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleCameraClick}
                    className="z-20 cursor-pointer w-fit absolute bottom-[-1rem] left-1/2 -translate-x-1/2 bg-primary text-white p-1.5 rounded-full hover:opacity-90 border-4"
                  >
                    {uploading ? (
                      <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" />
                    ) : (
                      <FiPlus size={16} />
                    )}
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>

                <div className="flex sm:flex-row flex-col gap-4 w-full">
                  <div className="grid gap-2 sm:w-1/2 w-full">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2 sm:w-1/2 w-full">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="*Optional*"
                    className="w-full"
                    value={contactNumber}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, "");
                      if (onlyDigits.length <= 20) {
                        setContactNumber(onlyDigits);
                      }
                    }}
                  />
                </div>

                <Button
                  onClick={() =>
                    updateProfile({
                      first_name: firstName,
                      last_name: lastName,
                      email: email,
                      contact_number: contactNumber,
                    })
                  }
                  className="mt-4 w-full"
                >
                  Save Profile
                </Button>
              </CardContent>
            </Card>

            {/* Shop Details Section */}
            <Card className="shadow-md rounded-2xl w-full">
              <CardHeader>
                <CardTitle>Edit Shop Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 w-full">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="shopName">Shop Name</Label>
                  <Input
                    id="shopName"
                    className="w-full"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="email">Business Phone Number</Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="*Optional*"
                    className="w-full"
                    value={businessNumber}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, "");
                      if (onlyDigits.length <= 20) {
                        setBusinessNumber(onlyDigits);
                      }
                    }}
                  />
                </div>
                <Button
                  onClick={() =>
                    updateProfile({
                      store_name: storeName,
                      business_number: businessNumber,
                    })
                  }
                  className="mt-4 w-full"
                >
                  Save Shop Details
                </Button>
              </CardContent>
            </Card>

            {/* Security Section */}
            <Card className="shadow-md rounded-2xl w-full">
              <CardHeader>
                <CardTitle>Update Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 w-full">
                <div className="flex lg:flex-row flex-col gap-4 w-full">
                  <div className="grid gap-2 lg:w-1/2 w-full">
                    <Label htmlFor="password">New Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2 lg:w-1/2 w-full">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="w-full"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  onClick={updatePassword}
                  disabled={loading}
                  className="!mt-4 w-full"
                >
                  {loading ? "Updating..." : "Update Password"}
                </Button>
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                  <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader>
                      <DialogTitle>
                        {modalType === "success" ? "Success" : "Error"}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="py-4">{modalMessage}</div>

                    <DialogFooter>
                      <Button onClick={() => setModalOpen(false)}>Close</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Billing Section */}
            <Card className="hidden shadow-md rounded-2xl w-full">
              <CardHeader>
                <CardTitle>Billing</CardTitle>
              </CardHeader>
              <CardContent className="w-full">
                <p className="text-sm text-muted-foreground">
                  Manage your subscription, invoices, and payment methods here.
                </p>
                <Separator className="my-4" />
                <Button variant="outline" className="w-full">
                  View Billing Portal
                </Button>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </main>
  );
}
