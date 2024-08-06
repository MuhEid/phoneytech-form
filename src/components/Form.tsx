import React, { useState } from "react";
import DeviceMockup from "./DeviceMockup";
import Logo from "./Logo";
import TermsAndConditions from "./TermsAndConditions";
import PatternLock from "./LockPattern";
import { EuroIcon } from "./EuroIcon";
import Image from "next/image";
import WaterDamageIcon from "../../public/images/waterDamageIcon.jpg";
import DropdownMenu from "./DropdownMenu";
import InputField from "./InputField";
import RepairsToBeMade from "./RepairsToBeMade";

type FormData = {
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
    email: string;
    device: string;
    street: string;
    houseNumber: string;
    postCode: string;
    city: string;
    landline: string;
    color: string;
    simPin: string;
    deviceUnlockCode: string;
    repairDate: string;
    deposit: number;
    totalPrice: number;
    waterDamage: string;
    datumOrtConfirm: string;
    kundeUnterschriftConfirm: string;
    notes: string;
    [key: string]: any;
};

type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: FormData;
};

export default function Form({ onSubmit, handleInput, formData }: FormProps) {
    const [hasWaterDamage, setHasWaterDamage] = useState<boolean>(false);
    const [waterDamageSelected, setWaterDamageSelected] = useState<string | null>(null);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setWaterDamageSelected(value);
        setHasWaterDamage(value === "yes");
    };
    const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

    const handleSelectionChange = (newSelectedItems: string[]) => {
        setSelectedAccessories(newSelectedItems);
    };

    const [selectedRepairs, setSelectedRepairs] = useState<string[]>([]);
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
                <div className="">
                    <p className="font-semibold">Repariert wird:</p>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <label className="flex items-center">
                            <input type="checkbox" name="diagnose" className="mr-2" />
                            Diagnose
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="software" className="mr-2" />
                            Software
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="wasserschaden" className="mr-2" />
                            Wasserschaden
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="akku" className="mr-2" />
                            Akku
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="display" className="mr-2" />
                            Display
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="touchglas" className="mr-2" />
                            Touchglas
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="lautsprecher" className="mr-2" />
                            Lautsprecher
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="mikrofon" className="mr-2" />
                            Mikrofon
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="hörmuschel" className="mr-2" />
                            Hörmuschel
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="anrufsensor" className="mr-2" />
                            Anrufsensor
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="flaschlicht" className="mr-2" />
                            Flasch Licht
                        </label>
                    </div>
                </div>
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
                        <DropdownMenu onSelectionChange={handleSelectionChange} />
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
                                    <EuroIcon />
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
                                    <EuroIcon />
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="form-control md:w-7/12 ">
                        <label className="cursor-pointer label">
                            <input
                                type="checkbox"
                                className="checkbox border border-primary mr-3"
                            />
                            <span className="text-lg font-semibold">
                                Ich bestätige hiermit, dass ich mit obere genannten Angabe
                                einverstanden bin und Akzeptiere diese.
                            </span>
                        </label>
                    </div>

                    <div className="flex justify-around py-5 space-x-4">
                        <label className="block">
                            Datum/Ort:
                            <input
                                type="text"
                                name="datumOrtConfirm"
                                className="mt-1 block w-full border rounded-md p-2"
                            />
                        </label>
                        <label className="block">
                            Kunde Unterschrift:
                            <input
                                type="text"
                                name="kundeUnterschriftConfirm"
                                className="mt-1 block w-full border rounded-md p-2"
                            />
                        </label>
                    </div>
                    <label className="flex-1 mb-2 text-gray-900 dark:text-white">
                        notizen:
                        <textarea
                            id="notes"
                            rows={3}
                            className="w-full text-sm p-3 text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="notizen..."
                        ></textarea>
                    </label>
                </div>
            </div>
            <div>
                <TermsAndConditions />
                <div className="mt-4">
                    <div className="form-control md:w-7/12">
                        <label className="cursor-pointer label">
                            <input
                                type="checkbox"
                                className="checkbox border border-primary mr-3"
                            />
                            <span className="label-text text-lg font-semibold">
                                Ich bestätige hiermit, dass ich mit obere genannten Angabe
                                einverstanden bin und Akzeptiere diese.
                            </span>
                        </label>
                    </div>

                    <div className="flex justify-around space-x-4 py-5">
                        <label className="block">
                            Datum/Ort:
                            <input
                                type="text"
                                name="datumOrtConfirm"
                                className="mt-1 block w-full border rounded-md p-2"
                            />
                        </label>
                        <label className="block">
                            Kunde Unterschrift:
                            <input
                                type="text"
                                name="kundeUnterschriftConfirm"
                                className="mt-1 block w-full border rounded-md p-2"
                            />
                        </label>
                    </div>
                </div>
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
