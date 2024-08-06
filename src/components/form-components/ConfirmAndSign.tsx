import React from "react";
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";

function ConfirmAndSign() {
    const currentDate = new Date().toDateString();
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

            <div className="flex items-end space-x-6">
                {<p className="text-lg">Datum/Ort:{currentDate}</p>}

                <InputField
                    type="text"
                    name="signature"
                    label="Kunde Unterschrift"
                    value=""
                    onChange={handleConfirmAndSign}
                />
            </div>
            <label className="form-control">
                <div className="label">
                    <span className="text-lg">notizen</span>
                </div>
                <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="notizen..."
                ></textarea>
            </label>
        </div>
    );
}

export default ConfirmAndSign;
