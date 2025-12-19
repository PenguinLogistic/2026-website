"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Needed to reset scroll on page load. Due to how layout was structured
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
