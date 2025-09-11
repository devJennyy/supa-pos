import { supabase } from "@/app/supabaseClient";
import { useState } from "react";

export const useUploadAvatar = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploadAvatar = async (file: File) => {
    try {
      const safeFileName = file.name.replace(/\s+/g, "_");
      const fileName = `private/${Date.now()}-${safeFileName}`;

      const { error } = await supabase.storage.from("avatars").upload(fileName, file);

      if (error) {
        console.error("Upload error:", error.message);
        return null;
      }

      const { data } = supabase.storage.from("avatars").getPublicUrl(fileName);
      setImageUrl(data?.publicUrl || null);
      return data?.publicUrl || null;
    } catch (err) {
      console.error("Unexpected upload error:", err);
      return null;
    }
  };

  return { imageUrl, uploadAvatar };
};
