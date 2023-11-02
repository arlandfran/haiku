import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { GeistMono, GeistSans } from "geist/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haiku",
  description: "Write and share your haikus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background relative flex min-h-screen flex-col font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
