"use client";
import Form from "@/components/Form";
import { generateOrderId } from "@/server/utils";
import React, { useState } from "react";

const RepairForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
        device: "",
        orderId: "",
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

        // Generate orderId and update formData
        const newOrderId = generateOrderId();
        const updatedFormData = { ...formData, orderId: newOrderId };

        try {
            const response = await fetch("http://localhost:5000/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "*",
                },
                body: JSON.stringify(updatedFormData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit the data. Please try again.");
            }

            // Handle response if necessary
            const data = await response.json();
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
