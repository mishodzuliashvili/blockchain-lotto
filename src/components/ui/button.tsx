"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import useNavigation from "@/hooks/use-navigation";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "hover:underline underline-offset-4",
        activeLink: "relative font-semibold text-primary cursor-default",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-5 py-6 font-semibold",
        icon: "h-10 w-10",
        link: "px-0 py-0 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  customLink?: boolean;
  afterPageAnimationOut?: () => Promise<void>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      onClick,
      size,
      href,
      customLink,
      afterPageAnimationOut,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const { push } = useNavigation();

    const Comp = asChild ? Slot : "button";

    if (href) {
      const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        onClick && onClick(e);
        push(href || "", afterPageAnimationOut);
      };
      if (!customLink) {
        size = "link";
        if (variant !== "activeLink") variant = "link";
      }
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
          onClick={handleClick}
        />
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
