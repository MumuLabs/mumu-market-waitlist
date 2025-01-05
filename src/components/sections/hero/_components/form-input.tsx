import React from "react";

interface FormInputProps {
    label: string;
    name: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const FormInput: React.FC<FormInputProps> = ({
    label,
    name,
    type = "text",
    placeholder,
    onChange
}) => (
    <div className="relative flex flex-col">
        <label htmlFor={name} className="text-slate-600 dark:text-slate-400 font-medium text-sm pb-2 sm:pb-0 sm:text-base">
            {label}:
        </label>
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className={`
                block 
                w-full 
                rounded-md 
                border-1 
                py-1.5 
                px-2 
                p-10 
                text-slate-900 
                shadow-sm 
                ring-1 
                ring-inset 
                ring-slate-300 
                placeholder:text-slate-400 
                focus:ring-2 
                focus:ring-inset 
                focus:ring-slate-400 
                sm:text-sm 
                sm:leading-6
            `}
            onChange={onChange}
        />
    </div>
);