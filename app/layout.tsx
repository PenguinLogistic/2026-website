import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "./providers/query-provider";
import { SkillsProvider } from "./providers/skills-provider";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Ryan Fung",
  description:
    "Hello! I'm Ryan Fung, a passionate software developer specializing in building web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-citrus-snow">
        <QueryProvider>
          <SkillsProvider>
            {children}
            <ToastContainer />
          </SkillsProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
