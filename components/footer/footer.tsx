"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  return (
    <div className="flex flex-col bg-blue-midnight gap-20">
      <section className="flex mx-auto w-full items-center max-w-container sm:p-20">
        <Text className="text-white">Woah! this is the footer!</Text>
      </section>
    </div>
  );
}
