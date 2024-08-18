"use client";
import Form from "@/components/Form";
import { generateOrderId } from "@/server/utils";
import React, { useState } from "react";

export type FormData = {
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
    repairs: string[];
    deviceUnlockCode: string;
    repairDate: string;
    deposit: number;
    totalPrice: number;
    notes: string;
    [key: string]: any;
};

const RepairForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
        device: "",
        street: "",
        houseNumber: "",
        postCode: "",
        city: "",
        landline: "",
        color: "",
        simPin: "",
        repairs: [],
        deviceUnlockCode: "",
        repairDate: "",
        deposit: 0,
        totalPrice: 0,
        notes: "",
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

    const handleNoneInputFields = (data: { name: keyof FormData; value: any }) => {
        if (typeof data === "object" && data.name && data.value) {
            setFormData((prevState) => {
                // Check if the value has actually changed before updating the state
                if (prevState[data.name] !== data.value) {
                    return {
                        ...prevState,
                        [data.name]: data.value,
                    };
                }
                return prevState;
            });
        }
    };

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Generate orderId and update formData
        const newOrderId = generateOrderId();
        const updatedFormData = { ...formData, orderId: newOrderId };
        console.log(updatedFormData);

        try {
            const response = await fetch("http://localhost:3000/api/submit", {
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
                <Form
                    onSubmit={handleSubmitForm}
                    handleInput={handleInput}
                    formData={formData}
                    handleNoneInputFields={handleNoneInputFields}
                />
            )}
        </div>
    );
};

export default RepairForm;
