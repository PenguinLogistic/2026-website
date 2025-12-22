import { SkillObject } from "@/api/skills/skills";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ICONS } from "@/utils/constants";

interface SkillCardProps {
  skill: SkillObject;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = ICONS[skill.icon] || ICONS["RiQuestionMark"];

  return (
    <div className="group perspective h-[250px] w-[400px]">
      {/* rotating wrapper */}
      <div className="relative transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180 will-change-transform">
        {/* FRONT */}
        <div className="backface-hidden h-full w-full">
          <div className="flex flex-col py-15 px-17 bg-blue-night rounded-xl shadow-lg gap-6 items-center">
            <Icon size={48} className="text-white my-2" />
            <Heading variant="h2" className="text-white font-semibold">
              {skill.name}
            </Heading>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 h-full w-full">
          <div className="flex h-full w-full flex-col justify-center rounded-xl bg-blue-indigo text-center text-white shadow-lg gap-4">
            <Text variant="large" className="text-white font-semibold">
              Familiarity: {skill.experience ?? "Add stars here"}/5
            </Text>
            <Text variant="large" className="text-white font-semibold">
              Worked with for {skill.years ?? "Add stars here"} years
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
