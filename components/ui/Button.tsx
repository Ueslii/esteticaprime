import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";

  const styles = {
    primary:
      "bg-[var(--color-yellow)] text-black hover:bg-yellow-300 px-6 py-3 shadow-md",
    outline:
      "border border-[var(--color-yellow)] text-[var(--color-yellow)] hover:bg-yellow-400 hover:text-black px-6 py-3",
  };

  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
