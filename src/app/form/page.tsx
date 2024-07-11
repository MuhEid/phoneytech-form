"use client";
import React, { useState } from "react";

const RepairForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
    });
    const [formSuccess, setFormSuccess] = useState(false);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));
    };
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log(Object.fromEntries(data.entries()));
    };
    return (
        <form action="" onSubmit={handleSubmitForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                    Vorname:
                    <input
                        type="text"
                        name="firstName"
                        className="mt-1 block w-full border rounded-md p-2"
                        onChange={handleInput}
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
            <button
                type="submit"
                className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
};

export default RepairForm;
