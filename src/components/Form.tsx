import React from "react";
import DeviceMockup from "./DeviceMockup";
import DeviceMockupBack from "./DeviceMockupBack";
import Logo from "./LOGO";

type formProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
        firstName: string;
        lastName: string;
        company: string;
        phone: string;
        email: string;
    };
};

export default function Form({ onSubmit, handleInput, formData }: formProps) {
    return (
        <form onSubmit={onSubmit} className="my-5">
            <div className="flex justify-between">
                <Logo className="" />
                <div>Content </div>

                <div className="">
                    <p className="font-semibold">Wie sind Sie auf uns aufmerksam geworden?</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <label className="flex items-center">
                            <input type="checkbox" name="flyer" className="mr-2" />
                            Flyer
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="google" className="mr-2" />
                            Google
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="ebay" className="mr-2" />
                            eBay
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="empfehlung" className="mr-2" />
                            Empfehlung
                        </label>
                        <label className="flex items-center">
                            Sonstige
                            <input
                                type="text"
                                name="sonstige"
                                className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                            />
                        </label>
                    </div>
                </div>
            </div>
            {/*  SECOND SECTION */}
            <div className="flex w-full justify-between">
                <div className="">
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            First name
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
                    <div>
                        <label
                            htmlFor="last-name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Last name
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
                    <div>
                        <label
                            htmlFor="company"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Company
                        </label>
                        <input
                            type="text"
                            name="company"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Flowbite"
                            required
                            value={formData.company}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Phone number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="123-45-678"
                            required
                            value={formData.phone}
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
                            placeholder="john.doe@company.com"
                            required
                            value={formData.email}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="flex">
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
                </div>
                <div className="">
                    <p className="font-semibold">Repariert wird:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
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

            <div>
                <div className="mt-4 flex h-52">
                    <div className="flex flex-col justify-between">
                        <p className="font-semibold">Mängel am Gerät vor der Reparatur:</p>
                        <label className="flex items-center">
                            <input type="checkbox" name="üblicheGebrauchsspuren" className="mr-2" />
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
                    </div>
                    <div className="flex">
                        <DeviceMockup className="" />
                        <DeviceMockupBack />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="flex items-center">
                        <input type="checkbox" name="netzwlan" className="mr-2" />
                        WLAN
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="netzMobilfunk" className="mr-2" />
                        Mobilfunk
                    </label>
                </div>
                <div className="mt-4">
                    <p className="font-semibold">Reparieren Sie mein Gerät bis:</p>
                    <label>
                        <input
                            type="date"
                            name="repairDate"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <label className="block">
                        Anzahlung/Deposit:
                        <input
                            type="number"
                            name="anzahlung"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                    </label>
                    <label className="block">
                        Gesamtpreis:
                        <input
                            type="number"
                            name="gesamtpreis"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                    </label>
                </div>
                <div className="mt-4">
                    <label className="block">
                        Zubehör:
                        <input
                            type="text"
                            name="zubehör"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                    </label>
                    <label className="block">
                        Preis:
                        <input
                            type="number"
                            name="preis"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                    </label>
                </div>
                <div className="mt-4">
                    <label className="block">
                        Kunde Unterschrift:
                        <input
                            type="text"
                            name="kundeUnterschrift"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                    </label>
                    <label className="block">
                        Datum/Ort:
                        <input
                            type="text"
                            name="datumOrt"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                    </label>
                </div>
                <div className="mt-4">
                    <p className="font-semibold">
                        Ich bestätige hiermit, dass ich mit obere genannten Angabe einverstanden bin
                        und Akzeptiere diese.
                    </p>
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
            </div>

            <button
                type="submit"
                className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
}
