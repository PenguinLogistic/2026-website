import { SkillObjListResponse } from "./responses";

export type SkillObject = {
  skill_name: string;
  icon: string;
  experience_lv: number;
  experience_yr: string;
  category: "frontend" | "backend" | "other";
};

export const exampleSkillObjListResponse: SkillObjListResponse = {
  skills: [
    {
      skill_name: "Amazon AWS",
      icon: "RiAmazonFill",
      experience_lv: 4,
      experience_yr: "4+",
      category: "other",
    },
    {
      skill_name: "Google Cloud",
      icon: "RiGoogleFill",
      experience_lv: 3,
      experience_yr: "2+",
      category: "frontend",
    },
    {
      skill_name: "Google Cloud",
      icon: "RiGoogleFill",
      experience_lv: 3,
      experience_yr: "2+",
      category: "backend",
    },
    {
      skill_name: "Google Cloud",
      icon: "RiGoogleFill",
      experience_lv: 3,
      experience_yr: "2+",
      category: "other",
    },
    {
      skill_name: "Google Cloud",
      icon: "RiGoogleFill",
      experience_lv: 3,
      experience_yr: "2+",
      category: "frontend",
    },
  ],
};
