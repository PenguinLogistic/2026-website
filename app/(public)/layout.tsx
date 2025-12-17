"use client";

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
      {/* <footer /> TBD */}
    </>
  );
}
