import Navbar from "@/components/Navbar";
import Homepage from "./home/page";

export default function Home() {  
  return (
    <main className="bg-background transition-default">
      <Navbar />
      <Homepage />
    </main>
  );
}
