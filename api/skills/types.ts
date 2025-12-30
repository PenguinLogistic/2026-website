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
      name: "Amazon AWS",
      icon: "RiAmazonFill",
      experience: 4,
      years: "4+",
      category: "other",
    },
    {
      name: "Google Cloud",
      icon: "RiGoogleFill",
      experience: 3,
      years: "2+",
      category: "frontend",
    },
    {
      name: "Google Cloud",
      icon: "RiGoogleFill",
      experience: 3,
      years: "2+",
      category: "frontend",
    },
    {
      name: "Google Cloud",
      icon: "RiGoogleFill",
      experience: 3,
      years: "2+",
      category: "frontend",
    },
    {
      name: "Google Cloud",
      icon: "RiGoogleFill",
      experience: 3,
      years: "2+",
      category: "frontend",
    },
    {
      name: "Google Cloud",
      icon: "RiGoogleFill",
      experience: 3,
      years: "2+",
      category: "other",
    },
    {
      name: "Microsoft Azure",
      icon: "RiMicrosoftFill",
      experience: 2,
      years: "6+",
      category: "other",
    },
    {
      name: "Microsoft Azure",
      icon: "RiMicrosoftFill",
      experience: 2,
      years: "6+",
      category: "backend",
    },
    {
      name: "Microsoft Azure",
      icon: "RiMicrosoftFill",
      experience: 2,
      years: "6+",
      category: "frontend",
    },
    {
      name: "Microsoft Azure",
      icon: "RiMicrosoftFill",
      experience: 2,
      years: "6+",
      category: "backend",
    },
  ],
};
