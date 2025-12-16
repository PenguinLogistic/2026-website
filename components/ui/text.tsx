import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const textVariants = cva("font-body text-inherit", {
  variants: {
    variant: {
      huge: "text-[20px] leading-[28px] sm:text-[32px] sm:leading-[38px]",
      large: "text-[18px] leading-[24px] sm:text-[20px] sm:leading-[28px]",
      medium: "text-[16px] leading-[20px] sm:text-[18px] sm:leading-[24px]",
      small: "text-[14px] leading-[18px] sm:text-[16px] sm:leading-[22px]",
      tiny: "text-[12px] leading-[16px]",
    },
  },
  defaultVariants: {
    variant: "medium",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export function Text({ variant = "medium", className, ...props }: TextProps) {
  return <p className={cn(textVariants({ variant }), className)} {...props} />;
}
