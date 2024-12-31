import React from "react";

interface InputFieldProps {
	label: string;
	name: string;
	type?: string;
	value: string;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
	label,
	name,
	type = "text",
	placeholder,
	value,
	onChange,
}) => (
	<div className="space-y-2">
		<label
			htmlFor={name}
			className="block font-medium text-md text-left text-black dark:text-white mb-1"
		>
			{label}
		</label>
		<input
			type={type}
			id={name}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			required
			className="w-full px-4 py-3 bg-[#171717]/90 border rounded-lg text-white 
                 focus:outline-none focus:border-[#d4a595] focus:ring-2 focus:ring-[#d4a595]
                 placeholder-white/50 transition-colors"
		/>
	</div>
);
