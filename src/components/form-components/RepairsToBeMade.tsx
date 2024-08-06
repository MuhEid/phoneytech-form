import { useState } from "react";
import CheckboxField from "./CheckboxField";

const repairList = [
    "diagnose",
    "software",
    "wasserschaden",
    "akku",
    "touchglas",
    "lautsprecher",
    "mikrofon",
    "hörmuschel",
    "anrufsensor",
    "flasch Licht",
];

type RepairsToBeMadeProps = {
    onRepairsChange: (selectedItems: string[]) => void;
};

function RepairsToBeMade({ onRepairsChange }: RepairsToBeMadeProps) {
    const [checkedRepairs, setCheckedRepairs] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setCheckedRepairs((prevCheckedRepairs) => {
            const updatedRepairs = checked
                ? [...prevCheckedRepairs, value]
                : prevCheckedRepairs.filter((repair) => repair !== value);

            onRepairsChange(updatedRepairs);
            return updatedRepairs;
        });
    };

    return (
        <div className="mt-7">
            <p className="text-xl mb-2 font-semibold">Repariert wird:</p>
            <div className="grid grid-cols-2 gap-4 mt-2 capitalize">
                {repairList.map((repair) => (
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
