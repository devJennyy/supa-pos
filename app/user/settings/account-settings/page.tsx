"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Camera } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AccountSettingsSkeleton from "@/components/settings/skeletons/AccountSettings";
import { FiPlus } from "react-icons/fi";
import { UserAuth } from "@/app/context/AuthContext";

export default function AccountSettingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const auth = UserAuth();
  const profile = auth?.profile;
  const dataLoading = auth?.loading;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if(dataLoading) {
    return <AccountSettingsSkeleton />
  }
  
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
                    {/* Ripple Background */}
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full bg-input/50"
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
                      <div className="border-4 bg-border/70 rounded-full z-20">
                        {profile?.avatar_url && <Image
                          src={profile?.avatar_url || ''}
                          alt="Profile"
                          width={500}
                          height={500}
                          className="w-54 h-54 rounded-full object-cover"
                        />}
                      </div>
                      <button className="cursor-pointer w-fit absolute bottom-[-1rem] left-1/2 -translate-x-1/2 bg-primary text-white p-2 rounded-full hover:opacity-90 border-4">
                        <FiPlus size={20} />
                      </button>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold !mt-1">
                    Jenny&apos;s Convenient Store
                  </p>
                  <div className="w-full flex flex-col gap-3">
                    <Button className="w-full">Upload Image</Button>
                    <Button className="w-full bg-input/30 border hover:bg-input/60 transiton-default">
                      Take a selfie
                    </Button>
                  </div>
                </div>

                <div className="!my-10.5 w-full dark:h-[1.8px] h-[1.6px] rounded-full dark:bg-secondary/0 bg-gradient-to-l from-secondary/0 via-secondary to-secondary/0"></div>

                {/* User's Info */}
                <Card className="shadow-md rounded-2xl w-full !mt-8 bg-input/30">
                  <CardHeader>
                    <CardTitle>User Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 w-full">
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="shopName" className="text-secondary">Owner&apos;s Name</Label>
                      <p className="tracking-wider">Jenny Lock-Smith</p>
                    </div>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="shopName" className="text-secondary">Email Address</Label>
                      <p className="tracking-wider">jenny@gmail.com</p>
                    </div>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="shopName" className="text-secondary">Shop Name</Label>
                      <p className="tracking-wider">Jenny&apos;s Convenient Store</p>
                    </div>
                    <div className="flex">
                      <div className="grid gap-2 w-full">
                      <Label htmlFor="shopName" className="text-secondary">Contact Number</Label>
                      <p className="italic text-secondary">Not Set</p>
                    </div>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="shopName" className="text-secondary">Business Phone Number</Label>
                      <p className="italic text-secondary">Not Set</p>
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
                <div className="lg:hidden flex flex-col items-center space-y-3">
                  <div className="relative">
                    {profile?.avatar_url && <Image
                      src={profile?.avatar_url || ''}
                      alt="Profile"
                      width={112}
                      height={112}
                      className="w-28 h-28 rounded-full object-cover border"
                    />}
                    <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-md hover:opacity-90">
                      <Camera size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Click the camera to change your photo
                  </p>
                </div>

                <div className="flex sm:flex-row flex-col gap-4 w-full">
                  <div className="grid gap-2 sm:w-1/2 w-full">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full"
                    />
                  </div>
                  <div className="grid gap-2 sm:w-1/2 w-full">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full"
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
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="email">Contact Number</Label>
                  <Input
                    id="contact"
                    type="number"
                    placeholder="*Optional*"
                    className="w-full"
                  />
                </div>
                <Button className="mt-4 w-full">Save Profile</Button>
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
                    placeholder="Enter your shop name"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="email">Business Phone Number</Label>
                  <Input
                    id="contact"
                    type="number"
                    placeholder="*Optional*"
                    className="w-full"
                  />
                </div>
                <Button className="mt-4 w-full">Save Shop Details</Button>
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
                    />
                  </div>
                  <div className="grid gap-2 lg:w-1/2 w-full">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="w-full"
                    />
                  </div>
                </div>
                <Button className="mt-4 w-full">Update Password</Button>
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
