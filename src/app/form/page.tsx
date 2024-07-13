"use client";
import Form from "@/components/Form";
import React, { useState } from "react";
import { z } from "zod";

const RepairForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
    });
    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState("");
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));
    };
    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit the data. Please try again.");
            }

            // Handle response if necessary
            const data: responseData = await response.json();
            setFormSuccess(true);
            setFormSuccessMessage(data.submission_text);

            console.log(data);
            // Update state or perform other actions upon successful submission
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error state or display error message to the user
        }
    };
    return (
        <div className="container mx-auto px-4 py-8">
            {formSuccess ? (
                <div>{formSuccessMessage}</div>
            ) : (
                // <form action="" onSubmit={handleSubmitForm}>
                //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                //         <label className="block">
                //             Vorname:
                //             <input
                //                 type="text"
                //                 name="firstName"
                //                 className="mt-1 block w-full border rounded-md p-2"
                //                 value={formData.firstName}
                //                 onChange={handleInput}
                //             />
                //         </label>
                //         <label className="block">
                //             Nachname:
                //             <input
                //                 type="text"
                //                 name="lastName"
                //                 className="mt-1 block w-full border rounded-md p-2"
                //                 value={formData.lastName}
                //                 onChange={handleInput}
                //             />
                //         </label>
                //     </div>
                //     <button
                //         type="submit"
                //         className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                //     >
                //         Submit
                //     </button>
                <Form onSubmit={handleSubmitForm} handleInput={handleInput} />
                // </form>
            )}
        </div>
    );
};

export default RepairForm;
