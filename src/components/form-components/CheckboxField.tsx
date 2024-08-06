import React from "react";

type CheckboxFieldProps = {
    label: string;
    name: string;
    value: string;
    className?: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    label,
    name,
    checked,
    onChange,
    className,
    value,
}) => (
    <label className={`flex items-center text-xl ${className}`}>
        <input
            type="checkbox"
            name={name}
            className="checkbox mr-2"
            checked={checked}
            onChange={onChange}
            value={value}
        />
        {label}
    </label>
);

export default CheckboxField;
