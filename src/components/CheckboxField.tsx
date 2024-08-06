import React from "react";

type CheckboxFieldProps = {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, name, checked, onChange }) => (
    <label className="flex items-center">
        <input type="checkbox" name={name} className="mr-2" checked={checked} onChange={onChange} />
        {label}
    </label>
);

export default CheckboxField;
