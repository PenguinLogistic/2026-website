"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { fadeInLeft, fadeInRight, fadeItem } from "@/utils/animation";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col mx-auto min-h-[85vh] w-full items-center max-w-container p-10 gap-30 sm:flex-row sm:p-20">
        <FadeIn variants={fadeInLeft} className="flex flex-col gap-4">
          <Stagger className="flex flex-col items-center sm:items-start gap-4">
            <motion.div variants={fadeItem}>
              <Heading className="text-[100px] sm:text-[100px]">Hello!</Heading>
            </motion.div>

            <motion.div variants={fadeItem}>
              <Heading className="text-[40px] sm:text-[50px]">
                My name is
              </Heading>
            </motion.div>

            <motion.div variants={fadeItem}>
              <Heading className="text-[120px] sm:text-[120px]">
                Ryan Fung
              </Heading>
            </motion.div>

            <motion.div variants={fadeItem}>
              <video
                src="/videos/title.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover hidden md:block"
              />
            </motion.div>

            <motion.div variants={fadeItem}>
              <Button className="mt-5 self-start">
                <Link href="#about-me">
                  <Text
                    variant="huge"
                    className="font-semibold text-white text-[28px]"
                  >
                    About Me
                  </Text>
                </Link>
              </Button>
            </motion.div>
          </Stagger>
        </FadeIn>

        <FadeIn variants={fadeInRight} className="flex flex-col gap-4">
          <Image
            className="ml-auto object-contain border-5 rounded-full border-black"
            src="/images/profile.png"
            alt="Profile"
            width={500}
            height={500}
          />
        </FadeIn>
      </section>

      <section
        id="about-me"
        className="flex gap-20 p-10 w-full sm:p-20 bg-citrus-gold"
      >
        <div className="flex flex-col gap-4 sm:gap-20 mx-auto max-w-container sm:flex-row">
          <FadeIn variants={fadeInLeft} className="flex flex-col gap-4">
            <Image
              className="ml-auto border-black border-5"
              src="/images/toronto.jpg"
              alt="Profile"
              width={500}
              height={500}
            />
          </FadeIn>

          <FadeIn variants={fadeInRight} className="flex flex-col gap-4">
            <div className="flex flex-col gap-6 justify-center pt-4 sm:p-6">
              <Stagger className="flex flex-col gap-6">
                <motion.div variants={fadeItem}>
                  <Heading className="sm:text-[40px]">About Me</Heading>
                </motion.div>

                <motion.div variants={fadeItem}>
                  <Text variant="large" className="max-w-2xl mt-6 sm:pl-2">
                    Welcome! I&apos;m a software developer based in{" "}
                    <span className="font-bold">Toronto, Canada </span>
                    with over <span className="font-bold">6 years</span> of
                    professional working experience. I specialize in building{" "}
                    <span className="font-bold">web applications</span> and
                    crafting user-centric digital experiences. Leveraging
                    <span className="font-bold">
                      {" "}
                      multiple programming languages and frameworks
                    </span>
                    ; I enjoy tackling complex problems and delivering
                    high-quality solutions.
                  </Text>
                </motion.div>

                <motion.div variants={fadeItem}>
                  <Text variant="large" className="max-w-2xl sm:pl-2">
                    With a creative mindset and a passion for technology, I
                    thrive on transforming ideas into reality through code.
                  </Text>
                </motion.div>

                <motion.div variants={fadeItem}>
                  <Text variant="large" className="max-w-2xl sm:pl-2">
                    Explore my portfolio to see how I blend innovation and
                    functionality to create impactful solutions.
                  </Text>
                </motion.div>

                <motion.div variants={fadeItem}>
                  <Button className="mt-5 self-start">
                    <Link href="/skills">
                      {/* // should be experience later */}
                      <Text className=" font-semibold text-white text-[28px]">
                        Learn More
                      </Text>
                    </Link>
                  </Button>
                </motion.div>
              </Stagger>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
