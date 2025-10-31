"use client";
import Form from "@/components/Form";
import { generateOrderId } from "@/utils";
import { FormData } from "@/types";
import React, { useState } from "react";

const RepairForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        device: "",
        street: "",
        houseNumber: "",
        postCode: "",
        city: "",
        serialNumber: "",
        color: "",
        simPin: "",
        totalAccessoryPrice: 0,
        repairs: {},
        deviceUnlockCode: "",
        repairMaxPrice: null,
        deposit: null,
        totalPrice: null,
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
        if (typeof data === "object" && data.name) {
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

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        try {
            // Submit form data to the database API
            const submitResponse = await fetch(`${apiUrl}/submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFormData),
            });

            if (!submitResponse.ok) {
                throw new Error("Failed to submit the data. Please try again.");
            }

            // Handle response from submission API
            const submitData = await submitResponse.json();
            setFormSuccess(true);
            setFormSuccessMessage(submitData.submission_text);

            // Optionally, trigger PDF download
            if (submitData.download_url) {
                window.location.href = `${apiUrl}${submitData.download_url}`;
            }
        } catch (error: any) {
            console.error("Error submitting form:", error);
            // Optionally, notify the user about the submission failure
            setFormSuccess(false);
            setFormSuccessMessage("Failed to submit the form. Please try again.");
        }
    };

    return (
        <div className="container my-8 capitalize">
            <Form
                onSubmit={handleSubmitForm}
                handleInput={handleInput}
                formData={formData}
                handleNoneInputFields={handleNoneInputFields}
            />
        </div>
    );
};

export default RepairForm;
