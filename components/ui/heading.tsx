import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const headingVariants = cva("font-body font-bold", {
  variants: {
    variant: {
      h1: "text-[34px] leading-[1.15] sm:text-[48px] sm:leading-[1.1]",
      h2: "text-[26px] leading-[1.2] sm:text-[36px] sm:leading-[1.2]",
      h3: "text-[22px] leading-[1.25] sm:text-[28px] sm:leading-[1.25]",
      h4: "text-[18px] leading-[1.3] sm:text-[24px] sm:leading-[1.3]",
      h5: "text-[16px] leading-[1.4] sm:text-[20px] sm:leading-[1.35]",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

export function Heading({ variant, className, ...props }: HeadingProps) {
  const Header = variant ?? "h1";
  return (
    <Header
      className={cn(headingVariants({ variant }), className)}
      {...props}
    />
  );
}
