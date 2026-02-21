import CheckboxField from "./CheckboxField";
import { RepairsSelection } from "@/types";

type RepairsToBeMadeProps = {
    repairOptions: string[];
    onRepairsChange: (selectedItems: string[], fieldName: keyof RepairsSelection) => void;
    fieldName: keyof RepairsSelection;
    header: string;
    value: string[];
};

function RepairsToBeMade({
    repairOptions,
    onRepairsChange,
    fieldName,
    header,
    value,
}: RepairsToBeMadeProps) {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: v, checked } = event.target;

        const base = value;
        const next = checked ? [...base, v] : base.filter((r) => r !== v);
        onRepairsChange(next, fieldName);
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
                        checked={value.includes(repair)}
                        onChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </div>
    );
}

export default RepairsToBeMade;
