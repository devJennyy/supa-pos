"use client";

import { BsFillCameraFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/app/supabaseClient";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LoadingScreen from "@/components/ui/loading";
import { UserAuth } from "@/app/context/AuthContext";
import { useUploadAvatar } from "@/hooks/useUploadAvatar";

export default function SetupModal() {
  const [pageLoading, setPageLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [store_name, setStoreName] = useState("");
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const auth = UserAuth()!;
  const { refreshProfile } = auth;
  const { imageUrl, uploadAvatar } = useUploadAvatar();

  // Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        console.error("No user or error getting user:", userError);
        setIsFirstTime(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, last_name, store_name, avatar_url, first_time")
        .eq("id", user.id)
        .maybeSingle();

      if (error || !data) {
        setIsFirstTime(false);
        return;
      }

      setIsFirstTime(data.first_time);
      setFullName(`${data.first_name} ${data.last_name}`);
      setStoreName(data.store_name || "");
      setImagePreview(data.avatar_url || null);

      setPageLoading(false);
    };

    fetchProfile();
  }, []);

  // Handle file selection
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview locally
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);

    // Upload to Supabase
    try {
      setUploading(true);
      const url = await uploadAvatar(file);
      console.log("Uploaded URL:", url);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  // Save profile
  const updateProfile = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (!user || userError) {
      console.error("No user or error getting user:", userError);
      return;
    }

    const [first_name, ...rest] = fullName.trim().split(" ");
    const last_name = rest.join(" ");

    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        first_name,
        last_name,
        store_name,
        avatar_url: imageUrl || imagePreview,
        first_time: false,
      })
      .eq("id", user.id);

    if (updateError) {
      console.error("Error updating profile:", updateError);
      return;
    }

    if (refreshProfile) await refreshProfile();

    setIsFirstTime(false);
    setPageLoading(true);
    setTimeout(() => setPageLoading(false), 800);
  };

  // Loading screen
  if (isFirstTime === null || pageLoading) {
    return (
      <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black/30 backdrop-blur-md">
        <LoadingScreen />
      </div>
    );
  }

  // Not first time
  if (isFirstTime === false) return null;

  // First time - modal
  return (
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black/30 backdrop-blur-md">
      <div className="w-full max-w-[1280px] sm:px-5 px-4 3xl:py-20 py-10 flex justify-center">
        <div className="w-full max-w-[500px] rounded-3xl sm:py-10 p-8 gap-4 flex flex-col text-center items-center bg-secondaryBackground border shadow-md">
          <div className="w-full flex flex-col gap-1 !mb-5">
            <h1 className="lg:text-2xl text-xl font-semibold">
              Complete Your Profile
            </h1>
            <p className="lg:text-base text-sm text-secondary">
              This helps personalize your experience
            </p>
          </div>

          <div className="relative lg:w-40 lg:h-40 w-32 h-32">
            <div className="w-full h-full rounded-full border-2 bg-input overflow-hidden">
              <Image
                src={imagePreview || "/images/default-avatar.svg"}
                alt="Avatar"
                className="w-full h-full object-cover"
                width={100}
                height={100}
                priority
              />
            </div>

            <div
              onClick={handleCameraClick}
              className="absolute bottom-2 right-2 w-8 h-8 bg-background border rounded-full flex items-center justify-center cursor-pointer"
            >
              {uploading ? (
                <div className="animate-spin border-2 border-primary border-t-transparent rounded-full w-5 h-5" />
              ) : (
                <BsFillCameraFill className="text-primary text-base" />
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <input
            type="text"
            value={store_name}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Enter Store Name"
            className="w-full lg:h-12 h-11 border transition-default rounded-full px-4 placeholder:text-secondary text-foreground lg:text-base text-sm tracking-wide outline-none text-center lg:!mt-4 !mt-2"
          />

          <Button
            onClick={updateProfile}
            className="w-full rounded-full lg:h-12 h-11 lg:text-base text-sm font-semibold"
          >
            Save Changes
          </Button>

          <p className="lg:text-sm text-xs text-secondary !mt-2">
            Your information can be updated anytime
          </p>
        </div>
      </div>
    </div>
  );
}
