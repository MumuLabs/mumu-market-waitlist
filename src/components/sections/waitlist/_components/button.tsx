import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import React from "react";

interface ButtonProps {
	text?: string;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	text,
	className,
}: ButtonProps) => {
	return <InteractiveHoverButton text={text} className={className} />;
};
