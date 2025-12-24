"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { contactSchema, type ContactFormValues } from "./schema";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const { mutate: mutateEmail, isPending } = useMutation({
    mutationFn: (data: ContactFormValues) => {
      //data can be used to send email payload later
      return api.contact.sendEmail();
    },
    onSuccess: () => {
      form.reset();
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  const handleEmail = (data: ContactFormValues) => {
    console.log("Form Data:", data);
    mutateEmail(data);
  };

  return (
    <div className="flex flex-col">
      <section className="flex flex-col mx-auto w-full max-w-container gap-6 sm:p-20">
        <Heading variant="h1" className="font-bold sm:text-[75px]">
          Get in Touch
        </Heading>
        <Text variant="large" className="max-w-4xl font-normal">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out and
          send me a message anytime using the forms below. Or you can email me
          directly at{" "}
          <span className="font-bold">ryan.shiuhong.fung@gmail.com</span>.
        </Text>
      </section>

      <section
        id="skill-cards"
        className="flex flex-col gap-20 p-10 w-full sm:p-20 bg-citrus-gold"
      >
        <div className="max-w-container mx-auto w-full sm:px-20">
          <form onSubmit={form.handleSubmit(handleEmail)}>
            <input
              {...form.register("name")}
              className="border border-black bg-white text-black p-2"
            />
            <input
              {...form.register("email")}
              className="border border-black bg-white text-black p-2"
            />
            <textarea
              {...form.register("message")}
              className="border border-black bg-white text-black p-2 h-32"
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
