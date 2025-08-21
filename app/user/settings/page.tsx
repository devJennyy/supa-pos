"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Camera } from "lucide-react";
import Image from "next/image";
import SectionTitle from "@/components/ui/section-title";
import AccountSettingsSkeleton from "@/components/settings/AccountSettings";

export default function AccountSettings() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {isLoading ? (
        <>
          <AccountSettingsSkeleton />
        </>
      ) : (
        <>
          <SectionTitle title="Account Settings" />

          {/* User Profile Section */}
          <Card className="shadow-md rounded-2xl w-full">
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 w-full">
              {/* Profile Image Upload */}
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <Image
                    src=""
                    alt="Profile"
                    width={112}
                    height={112}
                    className="w-28 h-28 rounded-full object-cover border"
                  />
                  <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-md hover:opacity-90">
                    <Camera size={16} />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Click the camera to change your photo
                </p>
              </div>

              <div className="flex gap-4 w-full">
                <div className="grid gap-2 w-1/2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-2 w-1/2">
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
              <Button className="mt-4 w-full">Save Profile</Button>
            </CardContent>
          </Card>

          {/* Shop Details Section */}
          <Card className="shadow-md rounded-2xl w-full">
            <CardHeader>
              <CardTitle>Shop Details</CardTitle>
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
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input
                  id="ownerName"
                  placeholder="Enter owner's full name"
                  className="w-full"
                />
              </div>
              <Button className="mt-4 w-full">Save Shop Details</Button>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card className="shadow-md rounded-2xl w-full">
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 w-full">
              <div className="flex gap-4 w-full">
                <div className="grid gap-2 w-1/2">
                  <Label htmlFor="password">New Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-2 w-1/2">
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
          <Card className="shadow-md rounded-2xl w-full">
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
        </>
      )}
    </main>
  );
}
