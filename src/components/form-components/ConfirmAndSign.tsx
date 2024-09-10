import React from "react";
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";
type ConfirmAndSignProps = {
    notesBox: boolean;
};
function ConfirmAndSign({ notesBox }: ConfirmAndSignProps) {
    const currentDate = new Date().toLocaleDateString("de-DE", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const handleConfirmAndSign = () => {};
    const handleCheckboxChange = () => {};
    // agreeWithTerms
    return (
        <div className="mt-4">
            <CheckboxField
                label="Ich bestätige hiermit, dass ich mit obere genannten Angabe einverstanden bin
                        und Akzeptiere diese."
                name="agreeWithTerms"
                checked={true}
                value="agreee"
                onChange={handleCheckboxChange}
                className="font-semibold mb-5"
            />

            <div className="flex items-center space-x-6 w-1/2">
                <p className="text-lg">
                    Datum/Ort: <span>{currentDate}</span>
                </p>

                <InputField
                    type="text"
                    name="signature"
                    label="Kunde: (Unterschrift)"
                    value=""
                    readOnly={true}
                    onChange={handleConfirmAndSign}
                />
            </div>
            {notesBox ? (
                <label className="form-control">
                    <div className="label">
                        <span className="text-lg">notizen</span>
                    </div>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        placeholder="notizen..."
                    ></textarea>
                </label>
            ) : (
                ""
            )}
        </div>
    );
}

export default ConfirmAndSign;
