import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-5 bg-background transition-all duration-300">
      <p className="text-4xl font-bold text-foreground">Hello world!</p>
      <p className="text-xl text-secondary">How are you today?</p>
      <ThemeToggle />
    </div>
  );
}
