import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
  
  return (
    <main className="bg-background transition-default">
      <Navbar />
    </main>
  );
}
