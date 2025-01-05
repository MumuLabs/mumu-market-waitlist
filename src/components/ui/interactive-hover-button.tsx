import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, type = "submit", ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        `group 
        relative 
        w-32 
        cursor-pointer 
        overflow-hidden 
        rounded-full 
        p-2 
        text-center 
        text-slate-400 
        font-semibold 
        hover:text-slate-600 
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-105 
        dark:text-slate-500 
        dark:hover:text-slate-400 
        dark:hover:bg-slate-800/50`,
        className,
      )}
      {...props}
    >
      <span>{text}</span>
      <ArrowRight />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
