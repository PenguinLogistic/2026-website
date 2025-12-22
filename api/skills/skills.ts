export interface SkillObjListResponse {
  skills: Array<SkillObject>;
}

export type SkillObject = {
  name: string;
  icon: string;
  experience: number;
  years: string;
  category: "hosting" | "frontend" | "backend";
};

export const exampleSkillObjListResponse: SkillObjListResponse = {
  skills: [
    {
      name: "Amazon AWS",
      icon: "RiAmazonFill",
      experience: 4,
      years: "4+",
      category: "hosting",
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
      category: "hosting",
    },
    {
      name: "Microsoft Azure",
      icon: "RiMicrosoftFill",
      experience: 2,
      years: "6+",
      category: "hosting",
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
