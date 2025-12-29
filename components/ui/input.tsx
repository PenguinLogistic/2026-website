"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-sm bg-white text-sm text-black outline-none transition-all shadow-lg border border-coastal-muted px-3 py-2 placeholder:text-black/50 focus:border-blue-indigo focus:ring-2 focus:ring-blue-indigo/20 disabled:opacity-50 disabled:pointer-events-none aria-invalid:border-coastal-crimson aria-invalid:ring-coastal-crimson/20",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
