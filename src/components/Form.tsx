import React from "react";
import DeviceMockup from "./form-components/DeviceMockup";
import Logo from "./Logo";
import Image from "next/image";
import WaterDamageIcon from "../../public/images/waterDamageIcon.jpg";
import DropdownMenu from "./form-components/DropdownMenu";
import InputField from "./form-components/InputField";
import RepairsToBeMade from "./form-components/RepairsToBeMade";
import ConfirmAndSign from "./form-components/ConfirmAndSign";
import { FaAngleRight, FaEuroSign } from "react-icons/fa";
import { AccessoryItem, FormData, RepairsSelection } from "@/types";
import Link from "next/link";
import PatternLock from "./form-components/LockPattern";

type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: FormData;
    onRepairsChange: (selectedItems: string[], fieldName: keyof RepairsSelection) => void;
    onAccessoriesChange: (selectedItems: AccessoryItem[]) => void;
    onWaterDamageChange: (hasWaterDamage: boolean) => void;
    onWaterDamageAcknowledgedChange: (acknowledged: boolean) => void;
    onAgreeWithTermsChange: (agreeWithTerms: boolean) => void;
    isSubmitting: boolean;
};

const repairsWillBeMade = [
    "Diagnose",
    "Software",
    "Wasserschaden",
    "Akku",
    "Displayschaden/Touchglas",
    "Lautsprecher",
    "Mikrofon",
    "Hörmuschel",
    "WLAN-Netz",
    "Mobilfunknetz",
    "Kopfhörerbuchse",
    "Ladebuchse",
    "Volumentaste",
    "Stummschalttaste",
    "Power-Taste",
    "Home-Taste",
    "Finger-ID",
    "Gesichts-ID",
    "Haupt kamera",
    "Front kamera",
];

const testBeforeRepair = [
    "Touchfunktion",
    "Lautsprecher",
    "Mikrofon",
    "Hörmuschel",
    "Anrufsensor",
    "Flashlicht",
    "WLAN-Netz",
    "Mobilfunknetz",
    "Kopfhörerbuchse",
    "Ladebuchse",
    "Volumentaste",
    "Stummschalttaste",
    "Power-Taste",
    "Home-Taste",
    "Finger-ID",
    "Gesichts-ID",
    "Hauptkamera",
    "Frontkamera",
];

const deviceItemsBeforeRepair = [
    "Übliche Gebrauchsspuren",
    "Deutliche Gebrauchsspuren",
    "Rahmen verbogen",
    "SIM & SD Karte entfernt",
    "Hülle Entfernt",
];

export default function Form({
    onSubmit,
    handleInput,
    formData,
    onRepairsChange,
    onAccessoriesChange,
    onWaterDamageChange,
    onWaterDamageAcknowledgedChange,
    onAgreeWithTermsChange,
    isSubmitting,
}: FormProps) {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onWaterDamageChange(e.target.value === "yes");
    };

    const isSubmitDisabled =
        isSubmitting ||
        !formData.agreeWithTerms ||
        (formData.waterDamage && !formData.waterDamageAcknowledged);

    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center mb-5">
                <Logo className="w-2/3 md:w-5/12 md:p-5" />
                <h1 className="text-2xl md:text-4xl text-center md:w-7/12 font-bold my-4 ">
                    Gerätereparaturformular
                </h1>
            </div>

            <div className="flex flex-col w-full mb-6">
                <div className="w-full">
                    <div className="flex space-x-4 mb-3">
                        <InputField
                            label="Vorname"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInput}
                            placeholder="John"
                            required
                        />
                        <InputField
                            label="Nachname"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInput}
                            placeholder="Doe"
                            required
                        />
                    </div>
                    <div className="flex w-full space-x-4 mb-3">
                        <InputField
                            label="Straße"
                            type="text"
                            name="street"
                            value={formData.street}
                            onChange={handleInput}
                            placeholder="Salzstadelgasse"
                        />
                        <InputField
                            label="Hausnummer"
                            type="text"
                            name="houseNumber"
                            value={formData.houseNumber}
                            onChange={handleInput}
                            placeholder="1"
                        />
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <InputField
                            label="PLZ"
                            type="text"
                            name="postCode"
                            value={formData.postCode}
                            onChange={handleInput}
                            placeholder="89073"
                        />
                        <InputField
                            label="Ort"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInput}
                            placeholder="Ulm"
                        />
                    </div>

                    <div className="flex space-x-4 mb-3">
                        <InputField
                            label="IMEI/SN"
                            type="text"
                            name="serialNumber"
                            value={formData.serialNumber}
                            onChange={handleInput}
                            placeholder="123456"
                        />
                        <InputField
                            label="Mobil"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInput}
                            placeholder="+49 (1XX) XXXXXXXX"
                        />
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <InputField
                            label="Gerät"
                            type="text"
                            name="device"
                            value={formData.device}
                            onChange={handleInput}
                        />
                        <InputField
                            label="Email address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInput}
                            placeholder="john.doe@gmail.com"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <div className="grid w-5/6">
                        <InputField
                            label="Farbe"
                            type="text"
                            name="color"
                            value={formData.color}
                            onChange={handleInput}
                        />
                        <InputField
                            label="PIN der SIM Karte"
                            type="text"
                            name="simPin"
                            value={formData.simPin}
                            onChange={handleInput}
                            placeholder="123456"
                        />
                        <InputField
                            label="Geräte Entsperrcode"
                            type="text"
                            name="deviceUnlockCode"
                            value={formData.deviceUnlockCode}
                            onChange={handleInput}
                        />
                    </div>
                    <PatternLock />
                </div>
                <RepairsToBeMade
                    repairOptions={repairsWillBeMade}
                    onRepairsChange={onRepairsChange}
                    fieldName="repairsWillBeMade"
                    header="Repariert wird:"
                    value={formData.repairs.repairsWillBeMade}
                />
            </div>

            <div className="mt-5">
                <div className="my-4 w-full justify-between flex flex-col md:flex-row">
                    <div>
                        <RepairsToBeMade
                            repairOptions={deviceItemsBeforeRepair}
                            onRepairsChange={onRepairsChange}
                            fieldName="deviceItemsBeforeRepair"
                            header="Mängel am Gerät vor der Reparatur:"
                            value={formData.repairs.deviceItemsBeforeRepair}
                        />

                        <DeviceMockup className="my-5 md:my-0" />
                    </div>

                    <RepairsToBeMade
                        repairOptions={testBeforeRepair}
                        onRepairsChange={onRepairsChange}
                        fieldName="testBeforeRepair"
                        header=""
                        value={formData.repairs.testBeforeRepair}
                    />
                </div>

                <div className="">
                    <div className="mt-4">
                        <div>
                            <DropdownMenu
                                selectedItems={formData.accessories}
                                onSelectionChange={onAccessoriesChange}
                            />
                            <div className="flex items-center justify-end text-gray-900">
                                <span className="text-lg font-semibold">Total:</span>
                                <span className="flex justify-center items-center text-xl ml-2">
                                    {formData.totalAccessoryPrice} <FaEuroSign />
                                </span>
                            </div>
                        </div>

                        <div className="my-4 grid">
                            <div>
                                <p className="text-lg font-semibold">
                                    hat das Gerät einen Wasserschaden?
                                </p>
                                <div className="flex space-x-10">
                                    <div className="flex items-center gap-2 text-lg">
                                        <input
                                            type="radio"
                                            id="water-damage-yes"
                                            name="waterDamage"
                                            value="yes"
                                            className="radio radio-primary"
                                            checked={formData.waterDamage}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="text-lg" htmlFor="water-damage-yes">
                                            yes
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            id="water-damage-no"
                                            name="waterDamage"
                                            value="no"
                                            className="radio radio-primary"
                                            checked={!formData.waterDamage}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="text-lg" htmlFor="water-damage-no">
                                            no
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {formData.waterDamage ? (
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src={WaterDamageIcon}
                                        alt=""
                                        className="object-cover"
                                        width={250}
                                        height={250}
                                    />
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <input
                                                type="checkbox"
                                                className="checkbox border border-primary mr-3"
                                                checked={formData.waterDamageAcknowledged}
                                                onChange={(event) =>
                                                    onWaterDamageAcknowledgedChange(
                                                        event.target.checked
                                                    )
                                                }
                                            />
                                            <span className="text-lg font-semibold">
                                                mir ist bewusst, dass ich bei wasserschäden keine
                                                Garantie oder Gewährleistung nach der Reparatur
                                                erhalte
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 w-full">
                <InputField
                    label="Reparieren Sie mein Gerät bis:"
                    type="number"
                    name="repairMaxPrice"
                    value={formData.repairMaxPrice ?? ""}
                    onChange={handleInput}
                    euro
                />

                <InputField
                    label="Anzahlung/Deposit:"
                    type="number"
                    name="deposit"
                    value={formData.deposit ?? ""}
                    onChange={handleInput}
                    euro
                />

                <InputField
                    label="Gesamtpreis:"
                    type="number"
                    name="totalPrice"
                    value={formData.totalPrice ?? ""}
                    onChange={handleInput}
                    euro
                />
            </div>
            <div className="my-4">
                <div className="text-white flex w-1/2 items-center justify-around bg-main hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none">
                    <Link href="/terms" target="_blank" className="">
                        Allgemeine Geschäftsbedingungen lesen
                    </Link>
                    <FaAngleRight size={16} />
                </div>

                <ConfirmAndSign
                    notesBox
                    label="Hiermit bestätige ich, dass ich mit den oben genannten Bedingungen einverstanden bin und diese akzeptiere."
                    onAgreeWithTerms={onAgreeWithTermsChange}
                    agreeWithTerms={formData.agreeWithTerms}
                    signature={formData.signature}
                    notes={formData.notes}
                    onInputChange={handleInput}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`text-white my-4 self-center font-medium rounded-lg text-sm !w-1/2 sm:w-auto px-8 py-2.5 text-center focus:ring-4 focus:outline-none ${isSubmitDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-main hover:bg-blue-900 focus:ring-blue-300"
                    }`}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}
