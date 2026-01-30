"use client";

import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import SkillCard from "./components/skill-card";
import { useSkills } from "@/app/providers/skills-provider";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { fadeInLeft, fadeInRight, fadeItem } from "@/utils/animation";
// import { exampleSkillObjListResponse } from "@/api/skills/types"; // for testing

export default function SkillsPage() {
  const { skills } = useSkills();

  return (
    <div className="flex flex-col">
      <section className="flex flex-col mx-auto w-full max-w-container gap-6 p-10 sm:p-20">
        <FadeIn variants={fadeInLeft} className="flex flex-col gap-4">
          <Stagger className="flex flex-col gap-4">
            <motion.div variants={fadeItem}>
              <Heading variant="h1" className="font-bold sm:text-[75px]">
                What have I worked with?
              </Heading>
            </motion.div>

            <motion.div variants={fadeItem}>
              <Text variant="large" className="max-w-4xl font-normal">
                The tech landscape is constantly evolving, and so is my skill
                set. Below are the tools and technologies I’ve worked with and
                know well. If something isn’t listed, feel free to ask. I’m
                always quick to pick new things up.
              </Text>
            </motion.div>
          </Stagger>
        </FadeIn>
      </section>

      {/*Desktop*/}
      <section
        id="skill-cards"
        className="flex flex-col gap-20 p-10 w-full sm:p-20 bg-blue-mist hidden sm:block"
      >
        <FadeIn variants={fadeInLeft} className="flex flex-col gap-4">
          <Stagger className="flex flex-col gap-4">
            <motion.div variants={fadeItem}>
              <Heading className="max-w-container mx-auto w-full sm:px-20 sm:text-[75px]">
                Front-End
              </Heading>
            </motion.div>
            <motion.div variants={fadeItem}>
              <div className="mx-auto max-w-7xl flex flex-wrap justify-center bg-citrus-zest p-8 rounded-3xl sm:w-3/4 gap-2">
                {skills
                  .filter((skill) => skill.category === "frontend")
                  .map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} />
                  ))}
              </div>
            </motion.div>
          </Stagger>
        </FadeIn>

        <FadeIn variants={fadeInRight} className="flex flex-col gap-4">
          <Stagger className="flex flex-col gap-4">
            <motion.div variants={fadeItem}>
              <Heading className="max-w-container mx-auto w-full sm:text-[75px] sm:px-20 text-end ">
                Back-End
              </Heading>
            </motion.div>
            <motion.div variants={fadeItem}>
              <div className="mx-auto max-w-7xl flex flex-wrap justify-center bg-citrus-zest p-8 rounded-3xl sm:w-3/4 gap-2">
                {skills
                  .filter((skill) => skill.category === "backend")
                  .map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} />
                  ))}
              </div>
            </motion.div>
          </Stagger>
        </FadeIn>

        <FadeIn variants={fadeInLeft} className="flex flex-col gap-4">
          <Stagger className="flex flex-col gap-4">
            <motion.div variants={fadeItem}>
              <Heading className="max-w-container mx-auto w-full sm:px-20 sm:text-[75px]">
                Hosting + More
              </Heading>
            </motion.div>

            <motion.div variants={fadeItem}>
              <div className="mx-auto max-w-7xl flex flex-wrap justify-center bg-citrus-zest p-8 rounded-3xl sm:w-3/4 gap-2">
                {skills
                  .filter((skill) => skill.category === "other")
                  .map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} />
                  ))}
              </div>
            </motion.div>
          </Stagger>
        </FadeIn>
      </section>

      {/*Mobile*/}
      <section
        id="skill-cards-mobile"
        className="flex flex-col gap-6 p-10 w-full sm:p-20 bg-blue-mist block sm:hidden"
      >
        <Heading>Front-End</Heading>
        <div className="flex flex-col bg-citrus-zest p-8 rounded-3xl w-full gap-2">
          {skills
            .filter((skill) => skill.category === "frontend")
            .map((skill, idx) => (
              <Text
                key={idx}
                variant="large"
                className="w-full font-semibold break-words"
              >
                • {skill.skill_name}
              </Text>
            ))}
        </div>
        <Heading>Back-End</Heading>
        <div className="flex flex-col bg-citrus-zest p-8 rounded-3xl w-full gap-2">
          {skills
            .filter((skill) => skill.category === "backend")
            .map((skill, idx) => (
              <Text
                key={idx}
                variant="large"
                className="w-full font-semibold break-words"
              >
                • {skill.skill_name}
              </Text>
            ))}
        </div>
        <Heading>Hosting + More</Heading>
        <div className="flex flex-col bg-citrus-zest p-8 rounded-3xl w-full gap-2">
          {skills
            .filter((skill) => skill.category === "other")
            .map((skill, idx) => (
              <Text
                key={idx}
                variant="large"
                className="w-full font-semibold break-words"
              >
                • {skill.skill_name}
              </Text>
            ))}
        </div>
      </section>
    </div>
  );
}
