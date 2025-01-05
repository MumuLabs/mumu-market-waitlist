import React from "react";

interface FormInputProps {
    label: string;
    name: string;
    type?: "text" | "email" | "password";
    content: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const FormInput: React.FC<FormInputProps> = ({
    label,
    name,
    type = "text",
    content,
    placeholder,
    onChange
}) => (
    <div className="relative flex flex-col">
        <label htmlFor={name} className="sr-only">
            {label}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            value={content}
            placeholder={placeholder}
            className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={onChange}
        />
    </div>
);