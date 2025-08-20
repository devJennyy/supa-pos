"use client";

import { BsFillCameraFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/app/supabaseClient";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LoadingScreen from "@/components/ui/loading";

export default function SetupModal() {
  const [pageLoading, setPageLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fullName, setFullName] = useState("");
  const [storeName, setStoreName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("No user or error getting user:", userError);
        return;
      }

        console.log(user.id)

      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, last_name, store_name")
        .eq("id", user.id)
        .single();

      console.log(data);

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      setFullName(`${data.first_name} ${data.last_name}`);
      setStoreName(data.store_name || "");
    };

    fetchProfile();
  }, []);

  const updateProfile = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      console.error("No user or error getting user:", userError);
      return;
    }

    const [first_name, ...rest] = fullName.trim().split(" ");
    const last_name = rest.join(" ");

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ first_name, last_name, storeName })
      .eq("id", user.id);

    if (updateError) {
      console.error("Error updating profile:", updateError);
      return;
    }

    router.push("/user");
  };

  if (pageLoading) return <LoadingScreen />;

  return (
    <div
      className="w-full 4xl:flex-none flex-1 flex items-center overflow-hidden fixed z-[9999999] backdrop-blur-md bg-black/30 h-[100dvh]"
    >
      <div className="w-full max-w-[1280px] !mx-auto sm:px-5 px-4 3xl:py-20 py-10 flex justify-center">
        <div className="w-full max-w-[500px] rounded-3xl sm:py-10 p-8 gap-4 flex flex-col text-center items-center bg-secondaryBackground border dark:shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="w-full flex flex-col gap-1 !mb-5">
            <h1 className="lg:text-2xl text-xl font-semibold">Complete Your Profile</h1>
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
              <BsFillCameraFill className="text-primary text-base" />
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
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Name's Convenient Store"
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
