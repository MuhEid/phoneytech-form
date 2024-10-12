"use client";
import Form from "@/components/Form";
import { generateOrderId } from "@/server/utils";
import React, { useState } from "react";

export type FormData = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    device: string;
    street: string;
    houseNumber: string;
    postCode: string;
    city: string;
    serialNumber: string;
    color: string;
    simPin: string;
    repairs: {};
    deviceUnlockCode: string;
    repairMaxPrice: number;
    deposit: number;
    totalPrice: number;
    notes: string;
    [key: string]: any;
};

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
        repairs: {},
        deviceUnlockCode: "",
        repairMaxPrice: 0,
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

        try {
            // Submit form data to the database API
            const submitResponse = await fetch("http://localhost:5000/api/submit", {
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

            console.log(submitData);

            // Optionally, trigger PDF download
            if (submitData.download_url) {
                window.location.href = `http://localhost:5000${submitData.download_url}`;
            }

            // After successful form submission, send an email
            try {
                const response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        to: "shiban@phonytechs.de",
                        subject: "New Phone Repair Order",
                        formData: updatedFormData, // Pass the entire formData
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Failed to send email. Please try again.");
                }

                const data = await response.json();
                console.log(data);
            } catch (error: any) {
                console.error("Error sending email:", error);
                // Optionally, notify the user about the email failure
                setFormSuccess(false);
                setFormSuccessMessage(
                    "Form submitted, but failed to send email. Please contact support."
                );
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
            {/* {formSuccess ? (
                <div>{formSuccessMessage}</div>
            ) : ( */}
            <Form
                onSubmit={handleSubmitForm}
                handleInput={handleInput}
                formData={formData}
                handleNoneInputFields={handleNoneInputFields}
            />
            {/* )} */}
        </div>
    );
};

export default RepairForm;
