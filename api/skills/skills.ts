import { APIS } from "../endpoints";
import { SkillObjListResponse } from "./responses";

export const skills = {
  fetch: async () => {
    const endpoint = APIS.base("/skills");
    // const skillsResponse = await get<SkillObjListResponse>(endpoint);
    return 0;
  },
};
