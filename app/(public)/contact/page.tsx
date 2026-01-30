"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { contactSchema, type ContactFormValues } from "./schema";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/formfield";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";
import { EMAIL_MESSAGE_MAX_LENGTH } from "@/utils/constants";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { fadeInLeft, fadeItem } from "@/utils/animation";

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const { mutate: mutateEmail, isPending } = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return api.contact.sendEmail(data);
    },
    onSuccess: (res) => {
      form.reset();
      //toast later
    },
    onError: () => {
      console.log("error");
    },
  });

  const handleEmail = (data: ContactFormValues) => {
    mutateEmail(data);
  };

  return (
    <div className="flex flex-col">
      <section className="flex flex-col mx-auto w-full max-w-container gap-6 p-10 sm:p-20">
        <FadeIn variants={fadeInLeft} className="flex flex-col gap-4">
          <Stagger className="flex flex-col gap-4">
            <motion.div variants={fadeItem}>
              <Heading variant="h1" className="font-bold sm:text-[75px]">
                Get in Touch
              </Heading>
            </motion.div>

            <motion.div variants={fadeItem}>
              <Text variant="large" className="max-w-4xl font-normal">
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                and send me a message anytime using the forms below. Or you can
                email me directly at{" "}
                <span className="font-bold">ryan.shiuhong.fung@gmail.com</span>.
              </Text>
            </motion.div>
          </Stagger>
        </FadeIn>
      </section>

      <section
        id="skill-cards"
        className="flex flex-col gap-20 p-10 w-full sm:p-20 bg-citrus-gold"
      >
        <div className="max-w-container mx-auto w-full sm:px-20">
          <form onSubmit={handleSubmit(handleEmail)}>
            <div className="flex flex-col w-5/6 gap-4 mx-auto">
              <FormField label="Email" error={errors.email}>
                <Input
                  {...register("email")}
                  placeholder="example@domain.com"
                  aria-invalid={!!errors.email}
                />
              </FormField>

              <FormField label="Subject" error={errors.subject}>
                <Input
                  {...register("subject")}
                  placeholder="What’s this about?"
                  aria-invalid={!!errors.subject}
                />
              </FormField>

              <FormField label="Message" error={errors.message}>
                <TextArea
                  {...register("message")}
                  placeholder="Tell me about what you need..."
                  aria-invalid={!!errors.message}
                  maxLength={EMAIL_MESSAGE_MAX_LENGTH}
                  showCounter
                />
              </FormField>

              <Button
                type="submit"
                className="self-start mt-4"
                disabled={isPending}
              >
                <Text className=" font-semibold text-white">
                  {isPending ? "Sending..." : "Send Message"}
                </Text>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
