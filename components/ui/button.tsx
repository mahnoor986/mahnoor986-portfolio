"use client";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>({
  props: {
    className: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variant: "primary",
    ...props,
  },
  handler: (props) => {
    const [variants, localProps] = props;
    return (
      <button
        className=`
          bg-primary text-primary-foreground hover:bg-[var(--deep)] 
          ${variants.variant === "secondary" 
            ? "bg-[var(--deep)] text-[var(--fg)] hover:bg-[--primary]" 
            : ""}
          ${variants.variant === "ghost" 
            ? "bg-transparent hover:bg-[var(--deep)]" 
            : ""}
          border border-[var(--deep)]/50
        `
        {...localProps}
      />
    );
  },
});