import React from "react";

type InputFieldProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
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
}) => (
    <div className="w-1/2">
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">
            {label}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            readOnly={readOnly}
        />
    </div>
);

export default InputField;
