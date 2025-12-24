import { APIS } from "@/api/endpoints";
import { get } from "@/api/requests";

export const contact = {
  sendEmail: async () => {
    const endpoint = APIS.base("email");
    const data = await get<{ status: string }>(endpoint);
    // will need to change back to SKillObjListResponse when we have real data
    return data;
  },
};
