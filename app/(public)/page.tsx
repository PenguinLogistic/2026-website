"use client";

import { Button } from "@/components/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex mx-auto h-[85vh] w-full items-center max-w-container sm:p-20">
        <div className="flex flex-col gap-4">
          <Heading className="sm:text-[100px]">Hello!</Heading>
          <Heading className="sm:text-[50px]">My name is</Heading>
          <Heading className="sm:text-[120px]">Ryan Fung</Heading>
          <video
            src="/videos/title.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          <Button className="mt-5 self-start">
            <Link href="#about-me">
              <Text className=" font-semibold text-white">About Me</Text>
            </Link>
          </Button>
        </div>

        <Image
          className="ml-auto object-contain border-5 rounded-full border-black"
          src="/images/profile.png"
          alt="Profile"
          width={500}
          height={500}
        />
      </section>

      <section
        id="about-me"
        className="flex gap-20 p-10 w-full sm:p-20 bg-citrus-gold"
      >
        <div className="flex gap-20 mx-auto max-w-container">
          <Image
            className="ml-auto border-black border-5"
            src="/images/toronto.jpg"
            alt="Profile"
            width={500}
            height={500}
          />

          <div className="flex flex-col gap-6 justify-center p-6">
            <Heading className="sm:text-[40px]">About Me</Heading>
            <Text variant="large" className="max-w-2xl pl-2 mt-6">
              Welcome! I&apos;m a software developer based in{" "}
              <span className="font-bold">Toronto, Canada</span>.
              <br />
              Equipped with <span className="font-bold">6+ years</span> of
              professional working experience, I specialize in building{" "}
              <span className="font-bold">web applications</span> and crafting
              user-centric digital experiences. Using my knowledge in{" "}
              <span className="font-bold">
                multiple programming languages and frameworks
              </span>
              , I enjoy tackling complex problems and delivering high-quality
              solutions.
            </Text>

            <Text variant="large" className="max-w-2xl pl-2">
              With a creative mindset and a passion for technology, I thrive on
              transforming ideas into reality through code.
              <br />
              Explore my portfolio to see how I blend innovation and
              functionality to create impactful solutions.
            </Text>
          </div>
        </div>
      </section>
    </div>
  );
}
