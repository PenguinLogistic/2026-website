import { APIS } from "@/api/endpoints";
import { post } from "@/api/http";
import { ContactFormValues } from "@/app/(public)/contact/schema";

export const contact = {
  sendEmail: async (request: ContactFormValues) => {
    const endpoint = APIS.base("email");
    const data = await post<{ success: boolean }, ContactFormValues>(
      endpoint,
      request
    );
    return data;
  },
};
