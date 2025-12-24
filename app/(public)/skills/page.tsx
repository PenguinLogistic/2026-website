"use client";

import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { exampleSkillObjListResponse } from "@/api/skills/types";
import { api } from "@/api";
import SkillCard from "./components/skill-card";
import { useEffect } from "react";

export default function SkillsPage() {
  useEffect(() => {
    api.skills.fetch();
  }, []);
  return (
    <div className="flex flex-col">
      <section className="flex flex-col mx-auto w-full max-w-container gap-6 sm:p-20">
        <Heading variant="h1" className="font-bold sm:text-[75px]">
          What have I worked with?
        </Heading>
        <Text variant="large" className="max-w-4xl font-normal">
          The tech landscape is constantly evolving, and so is my skill set.
          Below are the tools and technologies I’ve worked with and know well.
          If something isn’t listed, feel free to ask. I’m always quick to pick
          new things up.
        </Text>
      </section>

      <section
        id="skill-cards"
        className="flex flex-col gap-20 p-10 w-full sm:p-20 bg-blue-mist"
      >
        <Heading className="max-w-container mx-auto w-full sm:px-20 sm:text-[75px]">
          Front-End
        </Heading>
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center bg-citrus-zest p-8 rounded-3xl sm:w-3/4 gap-2">
          {exampleSkillObjListResponse.skills
            .filter((skill) => skill.category === "frontend")
            .map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
        </div>

        <Heading className="max-w-container mx-auto w-full sm:text-[75px] sm:px-20 text-end ">
          Back-End
        </Heading>
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center bg-citrus-zest p-8 rounded-3xl sm:w-3/4 gap-2">
          {exampleSkillObjListResponse.skills
            .filter((skill) => skill.category === "backend")
            .map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
        </div>

        <Heading className="max-w-container mx-auto w-full sm:px-20 sm:text-[75px]">
          Hosting + More
        </Heading>
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center bg-citrus-zest p-8 rounded-3xl sm:w-3/4 gap-2">
          {exampleSkillObjListResponse.skills
            .filter((skill) => skill.category === "other")
            .map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
        </div>
      </section>
    </div>
  );
}
