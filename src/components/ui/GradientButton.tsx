import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, size = "default", variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const sizeClasses = {
      default: "h-12 px-6 text-base",
      sm: "h-10 px-4 text-sm",
      lg: "h-14 px-8 text-lg",
    };

    if (variant === "outline") {
      return (
        <Comp
          className={cn(
            "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-300",
            "bg-background text-foreground",
            "gradient-border",
            "hover:scale-[1.02] active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
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
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-300",
          "gradient-cta text-white",
          "hover:scale-[1.02] hover:shadow-xl hover:shadow-kk-orange/25 active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
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
