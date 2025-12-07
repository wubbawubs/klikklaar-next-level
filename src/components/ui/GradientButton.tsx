import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: "default" | "sm" | "lg" | "xl";
  variant?: "default" | "outline" | "dark";
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, size = "default", variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const sizeClasses = {
      sm: "h-10 px-5 text-sm",
      default: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-base",
      xl: "h-16 px-10 text-lg",
    };

    if (variant === "outline") {
      return (
        <Comp
          className={cn(
            "relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-semibold transition-all duration-200",
            "bg-background text-foreground border-2 border-border",
            "hover:border-kk-orange hover:text-kk-orange",
            "active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kk-orange focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            sizeClasses[size],
            className
          )}
          ref={ref}
          {...props}
        />
      );
    }

    if (variant === "dark") {
      return (
        <Comp
          className={cn(
            "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-semibold transition-all duration-200",
            "bg-kk-navy text-white",
            "hover:bg-kk-navy-dark hover:shadow-lg",
            "active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kk-navy focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            sizeClasses[size],
            className
          )}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-semibold transition-all duration-200",
          "gradient-cta text-white",
          "hover:shadow-glow-orange hover:scale-[1.02]",
          "active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kk-orange focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
