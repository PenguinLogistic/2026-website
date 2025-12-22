import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import SkillCard from "./SkillCard";
import { exampleSkillObjListResponse } from "@/api/skills/skills";

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col mx-auto w-full max-w-container gap-6 sm:p-20">
        <Heading variant="h1" className="font-bold">
          What have I worked with?
        </Heading>
        <Text variant="large" className="max-w-2xl font-semibold">
          There are alot of different choices and growing technologies nowadays.
          Take a look and see if the ones I&apos;ve worked with are a good match
          for your techstack.
        </Text>
      </section>

      <section
        id="skill-cards"
        className="flex flex-col gap-20 p-10 w-full sm:p-20 bg-blue-mist"
      >
        <Heading className="max-w-container mx-auto w-full sm:px-20 sm:text-[75px]">
          Front-End
        </Heading>
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-2">
          {exampleSkillObjListResponse.skills
            .filter((skill) => skill.category === "frontend")
            .map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
        </div>

        <Heading className="max-w-container mx-auto w-full sm:text-[75px] sm:px-20 mt-10 text-end ">
          Back-End
        </Heading>
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-2">
          {exampleSkillObjListResponse.skills
            .filter((skill) => skill.category === "backend")
            .map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
        </div>

        <Heading className="max-w-container mx-auto w-full sm:px-20 mt-10 sm:text-[75px]">
          Hosting
        </Heading>
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-2">
          {exampleSkillObjListResponse.skills
            .filter((skill) => skill.category === "hosting")
            .map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
        </div>
      </section>
    </div>
  );
}
