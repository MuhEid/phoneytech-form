import React, { useCallback, useEffect, useState } from "react";
import DeviceMockup from "./form-components/DeviceMockup";
import Logo from "./Logo";
import Image from "next/image";
import WaterDamageIcon from "../../public/images/waterDamageIcon.jpg";
import DropdownMenu from "./form-components/DropdownMenu";
import InputField from "./form-components/InputField";
import RepairsToBeMade from "./form-components/RepairsToBeMade";
import ConfirmAndSign from "./form-components/ConfirmAndSign";
import { FaAngleRight, FaEuroSign } from "react-icons/fa";
import { FormData } from "@/app/form/page";
import Link from "next/link";
import PatternLock from "./form-components/LockPattern";

type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNoneInputFields: (data: { name: string; value: any }) => void;
    formData: FormData;
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
    handleNoneInputFields,
}: FormProps) {
    const [hasWaterDamage, setHasWaterDamage] = useState<boolean>(false);
    const [waterDamageSelected, setWaterDamageSelected] = useState<string | null>(null);
    const [deposit, setDeposit] = useState<number>(0);
    const [selectedRepairs, setSelectedRepairs] = useState({
        repairsWillBeMade: [] as string[],
        testBeforeRepair: [] as string[],
    });
    const [selectedAccessories, setSelectedAccessories] = useState<
        { name: string; price: number }[]
    >([]);
    const [agreeWithTerms, setAgreeWithTerms] = useState<boolean>(false);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setWaterDamageSelected(value);
        setHasWaterDamage(value === "yes");
    };
    const handleSelectedAccessories = (newSelectedItems: { name: string; price: number }[]) => {
        setSelectedAccessories(newSelectedItems);
    };
    // Wrap 'handleSelectedRepairs' with 'useCallback'
    const handleSelectedRepairs = useCallback((selectedItems: string[], fieldName: string) => {
        setSelectedRepairs((prev) => ({
            ...prev,
            [fieldName]: selectedItems,
        }));
    }, []);

    const handleAgreeWithTerms = (newAgreeWithTerms: boolean) => {
        setAgreeWithTerms(newAgreeWithTerms);
    };

    const calculateTotalAccessoryPrice = () => {
        return parseFloat(
            selectedAccessories.reduce((acc, item) => acc + item.price, 0).toFixed(2)
        );
    };
    const totalAccessoryPrice = calculateTotalAccessoryPrice();
    // const totalPrice = totalAccessoryPrice; /* + other form inputs' prices */
    // const remainingAmount = totalPrice - deposit;

    useEffect(() => {
        handleNoneInputFields({ name: "repairs", value: selectedRepairs });
    }, [selectedRepairs, handleNoneInputFields]);

    useEffect(() => {
        handleNoneInputFields({ name: "accessories", value: selectedAccessories });
    }, [selectedAccessories, handleNoneInputFields]);

    useEffect(() => {
        handleNoneInputFields({ name: "waterDamage", value: hasWaterDamage });
    }, [hasWaterDamage, handleNoneInputFields]);

    useEffect(() => {
        handleNoneInputFields({ name: "agreeWithTerms", value: agreeWithTerms });
    }, [agreeWithTerms, handleNoneInputFields]);
    useEffect(() => {
        handleNoneInputFields({ name: "totalAccessoryPrice", value: totalAccessoryPrice });
    }, [totalAccessoryPrice, handleNoneInputFields]);

    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center mb-5">
                <Logo className="w-2/3 md:w-5/12 md:p-5" />
                <h1 className="text-2xl md:text-4xl text-center md:w-7/12 font-bold my-4 ">
                    Gerätereparaturformular
                </h1>
            </div>
            {/*  SECOND SECTION */}
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
                            type="phone"
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
                    onRepairsChange={handleSelectedRepairs}
                    fieldName="repairsWillBeMade"
                    header="Repariert wird:"
                />
            </div>
            {/* third section */}
            <div className="mt-5">
                <div className="my-4 w-full justify-between flex flex-col md:flex-row">
                    <div>
                        <RepairsToBeMade
                            repairOptions={deviceItemsBeforeRepair}
                            onRepairsChange={handleSelectedRepairs}
                            fieldName="deviceItemsBeforeRepair"
                            header="Mängel am Gerät vor der Reparatur:"
                        />

                        <DeviceMockup className="my-5 md:my-0" />
                    </div>

                    <RepairsToBeMade
                        repairOptions={testBeforeRepair}
                        onRepairsChange={handleSelectedRepairs}
                        fieldName="testBeforeRepair"
                        header=""
                    />
                </div>

                <div className="">
                    <div className="mt-4">
                        <div>
                            <DropdownMenu onSelectionChange={handleSelectedAccessories} />
                            <div className="flex items-center justify-end text-gray-900">
                                <span className="text-lg font-semibold">Total:</span>
                                <span className="flex justify-center items-center text-xl ml-2">
                                    {totalAccessoryPrice} <FaEuroSign />
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
                                            checked={waterDamageSelected === "yes"}
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
                                            checked={waterDamageSelected === "no"}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="text-lg" htmlFor="water-damage-no">
                                            no
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {hasWaterDamage ? (
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
                                            />
                                            <span className="text-lg font-semibold">
                                                mir ist bewusst, dass ich bei wasserschäden keine
                                                garantie oder gewährleistung nach der repatur
                                                erhalte
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 w-full">
                {/* Reusable Input Group */}

                <InputField
                    label="Reparieren Sie mein Gerät bis:"
                    type="number"
                    name="repairMaxPrice"
                    value={formData.repairMaxPrice ?? ""}
                    onChange={handleInput}
                    euro
                />

                {/* Deposit Field */}
                <InputField
                    label="Anzahlung/Deposit:"
                    type="number"
                    name="deposit"
                    value={formData.deposit ?? ""}
                    onChange={handleInput}
                    euro
                />

                {/* Total Price Field */}
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
                    notesBox={false}
                    label="Hiermit bestätige ich, dass ich mit den oben genannten Bedingungen einverstanden bin und diese akzeptiere."
                    onAgreeWithTerms={handleAgreeWithTerms}
                    agreeWithTerms={agreeWithTerms}
                />
            </div>

            <button
                type="submit"
                className="text-white my-4 self-center bg-main hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-1/2 sm:w-auto px-8 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    );
}
