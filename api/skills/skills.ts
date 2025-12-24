import { APIS } from "@/api/endpoints";
import { get } from "@/api/http";
import { SkillObjListResponse } from "./responses";

export const skills = {
  fetch: async () => {
    const endpoint = APIS.base("skills");
    const data = await get<{ status: string }>(endpoint);
    // will need to change back to SKillObjListResponse when we have real data
    return data;
  },
};
