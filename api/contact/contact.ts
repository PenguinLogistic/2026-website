import { APIS } from "@/api/endpoints";
import { get } from "@/api/http";
import { ContactFormValues } from "@/app/(public)/contact/schema";

export const contact = {
  sendEmail: async (request: ContactFormValues) => {
    const endpoint = APIS.base("email");
    const data = await get<{ status: string }>(endpoint);
    return data;
  },
};
