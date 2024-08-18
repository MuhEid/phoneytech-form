import React, { useEffect, useState } from "react";
import DeviceMockup from "./form-components/DeviceMockup";
import Logo from "./Logo";
import TermsAndConditions from "./form-components/TermsAndConditions";
import PatternLock from "./form-components/LockPattern";
import Image from "next/image";
import WaterDamageIcon from "../../public/images/waterDamageIcon.jpg";
import DropdownMenu from "./form-components/DropdownMenu";
import InputField from "./form-components/InputField";
import RepairsToBeMade from "./form-components/RepairsToBeMade";
import ConfirmAndSign from "./form-components/ConfirmAndSign";
import { FaEuroSign } from "react-icons/fa";
import { FormData } from "@/app/form/page";

type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNoneInputFields: (data: { name: string; value: any }) => void;
    formData: FormData;
};

export default function Form({
    onSubmit,
    handleInput,
    formData,
    handleNoneInputFields,
}: FormProps) {
    const [hasWaterDamage, setHasWaterDamage] = useState<boolean>(false);
    const [waterDamageSelected, setWaterDamageSelected] = useState<string | null>(null);
    const [deposit, setDeposit] = useState<number>(0);
    const [selectedRepairs, setSelectedRepairs] = useState<string[]>([]);
    const [selectedAccessories, setSelectedAccessories] = useState<
        { name: string; price: number }[]
    >([]);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setWaterDamageSelected(value);
        setHasWaterDamage(value === "yes");
    };
    const handleSelectedAccessories = (newSelectedItems: { name: string; price: number }[]) => {
        setSelectedAccessories(newSelectedItems);
    };
    const handleSelectedRepairs = (newSelectedRepair: string[]) => {
        setSelectedRepairs(newSelectedRepair);
    };

    const calculateTotalAccessoryPrice = () => {
        return parseFloat(
            selectedAccessories.reduce((acc, item) => acc + item.price, 0).toFixed(2)
        );
    };

    useEffect(() => {
        handleNoneInputFields({ name: "repairs", value: selectedRepairs });
    }, [selectedRepairs, handleNoneInputFields]);

    useEffect(() => {
        handleNoneInputFields({ name: "accessories", value: selectedAccessories });
    }, [selectedAccessories, handleNoneInputFields]);
    useEffect(() => {
        handleNoneInputFields({ name: "waterDamage", value: hasWaterDamage });
    }, [hasWaterDamage, handleNoneInputFields]);

    const totalAccessoryPrice = calculateTotalAccessoryPrice();
    const totalPrice = totalAccessoryPrice; /* + other form inputs' prices */
    const remainingAmount = totalPrice - deposit;

    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <div className="flex items-center mb-5">
                <Logo className="w-2/3 md:w-5/12 md:p-5" />
                <h1 className="text-2xl md:text-4xl text-center md:w-7/12 font-semibold">
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
                            label="Festnetz"
                            type="text"
                            name="landline"
                            value={formData.landline}
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
                    <div className="grid w-full">
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
                <RepairsToBeMade onRepairsChange={handleSelectedRepairs} />
            </div>
            {/* third section */}
            <div className="mt-5">
                <div className="my-4 flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                        <p className="font-semibold">Mängel am Gerät vor der Reparatur:</p>
                        <div className="grid grid-cols-1  gap-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="üblicheGebrauchsspuren"
                                    className="mr-2"
                                />
                                Übliche Gebrauchsspuren
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="deutlicheGebrauchsspuren"
                                    className="mr-2"
                                />
                                Deutliche Gebrauchsspuren
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="rahmenVerbogen" className="mr-2" />
                                Rahmen verbogen
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="simEntfernt" className="mr-2" />
                                SIM & SD Karte entfernt
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="antenneEntfernt" className="mr-2" />
                                Antenne entfernt
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="netzwlan" className="mr-2" />
                                WLAN
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="netzMobilfunk" className="mr-2" />
                                Mobilfunk
                            </label>
                        </div>
                    </div>

                    <DeviceMockup className="my-5 md:my-0" />
                </div>

                <div className="">
                    <div className="mt-4">
                        <div>
                            <DropdownMenu onSelectionChange={handleSelectedAccessories} />
                            <div className="flex items-center justify-end text-gray-900">
                                <span className="text-lg font-semibold">Total:</span>
                                <span className="flex justify-center items-center text-xl ml-2">
                                    {totalPrice} <FaEuroSign />
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

                    <div className="my-4">
                        <div className="">
                            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Reparieren Sie mein Gerät bis:
                            </p>
                            <label>
                                <input
                                    type="date"
                                    name="repairDate"
                                    className="mt-1 block w-full border rounded-md p-2 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                />
                            </label>
                        </div>
                        <label className="block">
                            Anzahlung/Deposit:
                            <div className="relative mt-1">
                                <input
                                    type="number"
                                    name="deposit"
                                    className="block w-full border rounded-md p-2 pr-10 text-gray-900 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <FaEuroSign />
                                </div>
                            </div>
                        </label>
                        <label className="block">
                            Gesamtpreis:
                            <div className="relative mt-1">
                                <input
                                    type="number"
                                    name="totalPrice"
                                    className="block w-full border rounded-md p-2 pr-10 text-gray-900 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <FaEuroSign />
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <ConfirmAndSign notesBox={true} />
            </div>
            <div>
                <TermsAndConditions />
                <ConfirmAndSign notesBox={false} />
            </div>

            <button
                type="submit"
                className="text-white my-4 self-center bg-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-1/2 sm:w-auto px-8 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    );
}
