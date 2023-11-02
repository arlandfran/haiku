import { ThemeToggle } from "@/components/theme-toggle";

export default function SiteHeader() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <h1 className="ml-auto scroll-m-20 text-2xl font-semibold tracking-tight">
          Haiku
        </h1>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
