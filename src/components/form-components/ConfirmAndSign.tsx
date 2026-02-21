import React from "react";
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";

type ConfirmAndSignProps = {
    notesBox: boolean;
    label?: string;
    onAgreeWithTerms: (newAgreeWithTerms: boolean) => void;
    agreeWithTerms: boolean;
    signature: string;
    notes: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function ConfirmAndSign({
    notesBox,
    label,
    onAgreeWithTerms,
    agreeWithTerms,
    signature,
    notes,
    onInputChange,
}: ConfirmAndSignProps) {
    const currentDate = new Date().toLocaleDateString("de-DE", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        onAgreeWithTerms(checked);
    };

    return (
        <div className="mt-4">
            <CheckboxField
                label={
                    label
                        ? label
                        : "Ich bestätige hiermit, dass ich mit den oben genannten Angaben einverstanden bin und diese akzeptiere."
                }
                name="agreeWithTerms"
                checked={agreeWithTerms}
                onChange={handleCheckboxChange}
                className="font-semibold mb-5"
            />

            <div className="flex items-end space-x-6 w-1/2">
                <p className="text-lg">
                    Datum/Ort: <span>{currentDate}</span>
                </p>

                <InputField
                    type="text"
                    name="signature"
                    label="Kunde: (Unterschrift)"
                    value={signature}
                    readOnly
                />
            </div>

            {notesBox && (
                <label className="form-control">
                    <div className="label">
                        <span className="text-lg">Notizen</span>
                    </div>
                    <textarea
                        name="notes"
                        className="textarea textarea-bordered h-24"
                        placeholder="Notizen..."
                        value={notes}
                        onChange={onInputChange}
                    ></textarea>
                </label>
            )}
        </div>
    );
}

export default ConfirmAndSign;
