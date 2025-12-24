import { APIS } from "@/api/endpoints";
import { get } from "@/api/requests";
import { SkillObjListResponse } from "./responses";

export const skills = {
  fetch: async () => {
    const endpoint = APIS.base("skills");
    const data = await get<{ status: string }>(endpoint);
    console.log(data.status);

    return data;
  },
};
