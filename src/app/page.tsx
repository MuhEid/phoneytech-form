export default function Home() {
    return (
        <form
            className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg"
            method="POST"
            action=""
        >
            <h1 className="text-2xl font-bold mb-6 text-center">
                PhonyTechs Handy-Tablet & Computer Reparatur Service
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                    Vorname:
                    <input
                        type="text"
                        name="firstName"
                        className="mt-1 block w-full border rounded-md p-2"
                        // onChange={handleInput}
                    />
                </label>
                <label className="block">
                    Nachname:
                    <input
                        type="text"
                        name="lastName"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <label className="block">
                    Straße:
                    <input
                        type="text"
                        name="straße"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
                <label className="block">
                    Hausnummer:
                    <input
                        type="text"
                        name="hausnummer"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <label className="block">
                    PLZ:
                    <input
                        type="text"
                        name="plz"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
                <label className="block">
                    Ort:
                    <input
                        type="text"
                        name="ort"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <label className="block">
                    Festnetz:
                    <input
                        type="text"
                        name="festnetz"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
                <label className="block">
                    Mobil:
                    <input
                        type="text"
                        name="mobil"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <label className="block">
                    E-Mail:
                    <input
                        type="email"
                        name="email"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
                <label className="block">
                    Gerät:
                    <input
                        type="text"
                        name="gerät"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <label className="block">
                    Farbe:
                    <input
                        type="text"
                        name="farbe"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
                <label className="block">
                    PIN der Sim Karte:
                    <input
                        type="text"
                        name="pinSimKarte"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <label className="block">
                    Gerätesperrcode:
                    <input
                        type="text"
                        name="gerätesperrcode"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
                <label className="block">
                    Sperr Muster:
                    <input
                        type="text"
                        name="sperrMuster"
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                </label>
            </div>
            {/* <div className="mt-4">
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
                        <input type="checkbox" name="sonstige" className="mr-2" />
                        Sonstige
                    </label>
                </div>
            </div> */}
            {/* <div className="mt-4">
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
            <div className="mt-4">
                <p className="font-semibold">Mängel am Gerät vor der Reparatur:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <label className="flex items-center">
                        <input type="checkbox" name="üblicheGebrauchsspuren" className="mr-2" />
                        Übliche Gebrauchsspuren
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="deutlicheGebrauchsspuren" className="mr-2" />
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
                    Ich bestätige hiermit, dass ich mit obere genannten Angabe einverstanden bin und
                    Akzeptiere diese.
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
            </div> */}
            <button
                type="submit"
                className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
}
