import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const ArrowButton = React.forwardRef<HTMLButtonElement, ArrowButtonProps>(
  ({ text = "Submit", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-slate-950/90 py-1 pl-6 pr-14 font-medium text-slate-50 dark:bg-slate-950/80 dark:text-slate-400",
          className
        )}
        {...props}
      >
        <span className="z-10 pr-2 font-semibold">{text}</span>
        <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-gray-500/80 transition-[width] group-hover:w-[calc(100%-8px)]">
          <div className="mr-3.5 flex items-center justify-center">
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </div>
      </button>
    );
  }
);

ArrowButton.displayName = "ArrowButton";