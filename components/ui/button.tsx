"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full font-medium text-sm outline-none transition-all disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-coastal-crimson aria-invalid:ring-coastal-crimson/20 dark:aria-invalid:ring-coastal-crimson/40",
  {
    variants: {
      size: {
        default: "h-9 px-4 py-2",
      },
      variant: {
        default:
          "btn-ping relative px-4 py-2 overflow-hidden bg-blue-night text-white shadow-xs hover:bg-blue-indigo",
        invisible: "bg-transparent shadow-none hover:bg-transparent px-4",
      },
      loading: {
        true: "text-transparent!",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  children,
  disabled,
  asChild = false,
  loading = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  }) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(buttonVariants({ size, variant, className, loading }))}
      data-slot="button"
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Loader2Icon
          className={cn(
            "absolute animate-spin",
            // Used for conditional styling when button is loading
            "loading"
          )}
        />
      )}
      <Slottable>{children}</Slottable>
    </Component>
  );
}

export { Button, buttonVariants };
