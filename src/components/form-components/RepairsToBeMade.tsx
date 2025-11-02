import { useEffect, useState } from "react";
import CheckboxField from "./CheckboxField";

type RepairsToBeMadeProps = {
    repairOptions: string[];
    onRepairsChange: (selectedItems: string[], fieldName: string) => void;
    fieldName: string;
    header: string;
    value?: string[]; // controlled selected values
    defaultValue?: string[]; // uncontrolled initial selection
};

function RepairsToBeMade({
    repairOptions,
    onRepairsChange,
    fieldName,
    header,
    value,
    defaultValue = [],
}: RepairsToBeMadeProps) {
    const [checkedRepairs, setCheckedRepairs] = useState<string[]>(defaultValue);

    const isControlled = Array.isArray(value);
    const selected = isControlled ? (value as string[]) : checkedRepairs;

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: v, checked } = event.target;

        const base = selected;
        const next = checked ? [...base, v] : base.filter((r) => r !== v);

        if (!isControlled) {
            setCheckedRepairs(next);
        }
        onRepairsChange(next, fieldName);
    };

    useEffect(() => {
        if (!isControlled) {
            onRepairsChange(checkedRepairs, fieldName);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedRepairs]);

    return (
        <div className="mt-7">
            <p className="text-xl mb-2 font-semibold">{header}</p>
            <div className="grid grid-cols-2 gap-4 mt-2 capitalize">
                {repairOptions.map((repair) => (
                    <CheckboxField
                        key={repair}
                        label={repair}
                        name={repair}
                        value={repair}
                        checked={selected.includes(repair)}
                        onChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </div>
    );
}

export default RepairsToBeMade;
