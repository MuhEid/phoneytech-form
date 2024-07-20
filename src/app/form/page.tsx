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
        <div className="container my-8 capitalize">
            {formSuccess ? (
                <div>{formSuccessMessage}</div>
            ) : (
                <Form onSubmit={handleSubmitForm} handleInput={handleInput} formData={formData} />
            )}
        </div>
    );
};

export default RepairForm;
