import React from "react";
import { FaEuroSign } from "react-icons/fa";

type InputFieldProps = {
    label: string;
    type: string;
    name: string;
    value: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    euro?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    name,
    value,
    readOnly = false,
    onChange,
    placeholder = "",
    required = false,
    euro = false,
}) => (
    <div className="md:w-1/2 sm:w-full">
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">
            {label}
        </label>
        <div className="relative">
            <input
                type={type}
                name={name}
                id={name}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                    euro ? "pr-10" : ""
                } focus:ring-blue-500 focus:border-blue-500`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                readOnly={readOnly}
            />
            {euro && (
                <FaEuroSign className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            )}
        </div>
    </div>
);

export default InputField;
