export interface SkillObjListResponse {
  skills: Array<SkillObject>;
}

export type SkillObject = {
  name: string;
  icon: string;
  experience: number;
  years: string;
};

export const exampleSkillObjListResponse: SkillObjListResponse = {
  skills: [
    {
      name: "Amazon AWS",
      icon: "RiAmazonFill",
      experience: 4,
      years: "2019-2023",
    },
    {
      name: "Google Cloud",
      icon: "RiGoogleFill",
      experience: 3,
      years: "2020-2023",
    },
    {
      name: "Microsoft Azure",
      icon: "RiMicrosoftFill",
      experience: 2,
      years: "2021-2023",
    },
  ],
};
