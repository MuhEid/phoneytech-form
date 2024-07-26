import React, { useState } from "react";
import DeviceMockup from "./DeviceMockup";
import Logo from "./Logo";
import TermsAndConditions from "./TermsAndConditions";
import { Checkbox, Label, Radio } from "flowbite-react";
import PatternLock from "./LockPattern";
import { EuroIcon } from "./EuroIcon";
import Image from "next/image";
import WaterDamageIcon from "../../public/images/waterDamageIcon.jpg";

type formProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
        firstName: string;
        lastName: string;
        company: string;
        phone: string;
        email: string;
        device: string;
    };
};

export default function Form({ onSubmit, handleInput, formData }: formProps) {
    const [hasWaterDamage, setHasWaterDamage] = useState<boolean>(false);
    const [waterDamageSelected, setWaterDamageSelected] = useState<string | null>(null);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setWaterDamageSelected(value);
        setHasWaterDamage(value === "yes");
        console.log(value, hasWaterDamage);
    };
    return (
        <form onSubmit={onSubmit} className="">
            <div className="flex items-center mb-5">
                <Logo className="w-5/12 p-5" />
                {/* <p className="w-1/4">auftragsnummer:</p> */}
                <h1 className="text-4xl text-center w-7/12 font-semibold">
                    Gerätereparaturformular
                </h1>
            </div>
            {/*  SECOND SECTION */}
            <div className="flex flex-col w-full mb-6">
                <div className="w-full">
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label
                                htmlFor="first-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                vorname
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required
                                value={formData.firstName}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="w-1/2">
                            <label
                                htmlFor="last-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                            >
                                nachname
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Doe"
                                required
                                value={formData.lastName}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className="flex w-full space-x-4 mb-3">
                        <div className="w-1/2">
                            <label
                                htmlFor="first-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                straße
                            </label>
                            <input
                                type="text"
                                name="festnetz"
                                id="street"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Salzstadelgasse"
                                required
                                value={formData.firstName}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="w-1/2">
                            <label
                                htmlFor="house-number"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                            >
                                huasnummer
                            </label>
                            <input
                                type="text"
                                name="houseNumber"
                                id="house-number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="1"
                                required
                                value={formData.lastName}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label
                                htmlFor="post-code"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                plz
                            </label>
                            <input
                                type="text"
                                name="postCode"
                                id="post-code"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="89073"
                                required
                                value={formData.firstName}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="w-1/2">
                            <label
                                htmlFor="last-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                            >
                                ort
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ulm"
                                required
                                value={formData.lastName}
                                onChange={handleInput}
                            />
                        </div>
                    </div>

                    <div className="flex space-x-4 mb-3">
                        <div className="w-1/2">
                            <label
                                htmlFor="first-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                festnetz
                            </label>
                            <input
                                type="text"
                                name="festnetz"
                                id="first-name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required
                                value={formData.firstName}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="w-1/2">
                            <label
                                htmlFor="last-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                            >
                                mobil
                            </label>
                            <input
                                type="phone"
                                name="phone"
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="+49 (1XX) XXXXXXXX"
                                required
                                value={formData.lastName}
                                onChange={handleInput}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="device"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            gerät
                        </label>
                        <input
                            type="text"
                            name="device"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                            value={formData.device}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@gmail.com"
                            required
                            value={formData.email}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between pr-4">
                    <div className="grid w-2/3">
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                farbe
                            </label>
                            <input
                                type="text"
                                name="farbe"
                                id="farbe"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                required
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="sim-pin"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                PIN der SIM karte
                            </label>
                            <input
                                type="text"
                                name="simPin"
                                id="sim-pin"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="123456"
                                required
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor=""
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                geräte entsperrcode
                            </label>
                            <input
                                type="text"
                                name="farbe"
                                id="farbe"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                required
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <PatternLock />
                </div>
                <div className="">
                    <p className="font-semibold">Repariert wird:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
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
                <div className="my-4 flex">
                    <div className=" w-1/3">
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

                    <DeviceMockup className="" />
                </div>

                <div className="">
                    <div className="mt-4">
                        <div className="flex justify-between space-x-4">
                            <label
                                htmlFor="message"
                                className="flex-1 mb-2 text-gray-900 dark:text-white"
                            >
                                Zubehör:
                                <textarea
                                    id="message"
                                    rows={3}
                                    className="w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="zubehör..."
                                ></textarea>
                            </label>
                            <label className="flex-1 mb-2 text-gray-900 dark:text-white">
                                Preis:
                                <textarea
                                    id="price"
                                    rows={3}
                                    className="w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Preis..."
                                ></textarea>
                            </label>
                        </div>

                        <div className="my-4 grid ">
                            <div>
                                <p className="text-lg font-semibold ">
                                    hat das Gerät einen Wasserschaden?
                                </p>

                                <div className="flex space-x-10">
                                    <div className="flex items-center gap-2 text-lg">
                                        <Radio
                                            id="water-damage-yes"
                                            name="waterDamage"
                                            value="yes"
                                            checked={waterDamageSelected === "yes"}
                                            onChange={handleRadioChange}
                                        />
                                        <Label className="text-lg" htmlFor="water-damage-yes">
                                            yes
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio
                                            id="water-damage-no"
                                            name="waterDamage"
                                            value="no"
                                            checked={waterDamageSelected === "no"}
                                            onChange={handleRadioChange}
                                        />
                                        <Label className="text-lg" htmlFor="water-damage-no">
                                            no
                                        </Label>
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
                                    <label className="font-semibold">
                                        <Checkbox name="agree" className="mr-4" /> mir ist bewusst,
                                        dass ich bei wasserschäden keine garantie oder
                                        gewährleistung nach der repatur erhalte
                                    </label>
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
                    <label className="font-semibold">
                        <Checkbox name="agree" className="mr-4" /> Ich bestätige hiermit, dass ich
                        mit obere genannten Angabe einverstanden bin und Akzeptiere diese.
                    </label>

                    <div className="flex justify-around py-5">
                        <label className="block">
                            Kunde Unterschrift:
                            <input
                                type="text"
                                name="kundeUnterschriftConfirm"
                                className="mt-1 block w-full border rounded-md p-2"
                            />
                        </label>
                        <label className="block">
                            Datum/Ort:
                            <input
                                type="text"
                                name="datumOrtConfirm"
                                className="mt-1 block w-full border rounded-md p-2"
                            />
                        </label>
                    </div>
                    <label className="flex-1 mb-2 text-gray-900 dark:text-white">
                        notizen:
                        <textarea
                            id="notes"
                            rows={3}
                            className="w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="notizen..."
                        ></textarea>
                    </label>
                </div>
            </div>
            <div>
                <TermsAndConditions />
                <div className="mt-4">
                    <label className="font-semibold">
                        <Checkbox name="agree" className="mr-4" /> Ich bestätige hiermit, dass ich
                        mit obere genannten Angabe einverstanden bin und Akzeptiere diese.
                    </label>

                    <div className="flex justify-around py-5">
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
                className="text-white my-4 bg-[#1f4696] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    );
}
