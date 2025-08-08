
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5 bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <p className="text-4xl font-bold">Hello world!</p>
      <ThemeToggle />
    </div>
  );
}
