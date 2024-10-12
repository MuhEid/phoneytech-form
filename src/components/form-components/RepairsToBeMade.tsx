import { useState } from "react";
import CheckboxField from "./CheckboxField";

type RepairsToBeMadeProps = {
    repairOptions: string[]; // Generic list of options passed as a prop
    onRepairsChange: (selectedItems: string[], fieldName: string) => void; // Add fieldName to track multiple usages
    fieldName: string; // Add fieldName to identify this group of checkboxes
    header: string;
};

function RepairsToBeMade({
    repairOptions,
    onRepairsChange,
    fieldName,
    header,
}: RepairsToBeMadeProps) {
    const [checkedRepairs, setCheckedRepairs] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setCheckedRepairs((prevCheckedRepairs) => {
            const updatedRepairs = checked
                ? [...prevCheckedRepairs, value]
                : prevCheckedRepairs.filter((repair) => repair !== value);

            onRepairsChange(updatedRepairs, fieldName); // Pass the updated list and the fieldName
            return updatedRepairs;
        });
    };

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
                        checked={checkedRepairs.includes(repair)}
                        onChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </div>
    );
}

export default RepairsToBeMade;
