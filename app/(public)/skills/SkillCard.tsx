import { SkillObject } from "@/api/skills/skills";
import { Heading } from "@/components/ui/heading";
import { RiAmazonFill } from "@remixicon/react";

// receive object from api call to backend/database.
// later extract useable data to populate skill card.
interface SkillsPageProps {
  skill: SkillObject;
}

export default function SkillsPage({ skill }: SkillsPageProps) {
  return (
    <div className="flex flex-col py-15 px-17 bg-blue-night rounded-xl shadow-lg gap-6 items-center">
      <RiAmazonFill size={48} className="text-white my-2" />
      <Heading variant="h2" className="text-white font-semibold">
        {skill.name}
      </Heading>
    </div>
  );
}
