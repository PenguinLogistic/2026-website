"use client";

import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col justify-between">
      <div className="flex">
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={350}
          height={350}
        />
        <Text>Some text here</Text>
      </div>
    </div>
  );
}
