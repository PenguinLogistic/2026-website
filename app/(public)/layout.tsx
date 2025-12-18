"use client";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
