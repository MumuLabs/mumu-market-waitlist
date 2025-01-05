import React from "react";
import { cn } from "@/lib/utils";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

interface FormButtonProps {
    text?: string;
    className?: string;
    onClick?: () => void;
    type?: "submit" | "button" | "reset";
}


export const FormButton: React.FC<FormButtonProps> = ({
    text = "Submit",
    className,
    onClick,
    type = "submit",
}) => {
    return (
        <InteractiveHoverButton className={cn(
            `flex 
            items-center  
            justify-center 
            gap-2 
            w-full
            rounded-lg
            bg-transparent
            border-2 
            px-4 py-2 
            font-medium 
            transition-all 
            duration-300 
            ease-in-out`,
            className
        )}
        text={text}
        onClick={onClick}
        type={type}/>
    );
};