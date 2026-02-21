"use client";
import Form from "@/components/Form";
import { generateOrderId, calculateAccessoryTotal, calculateTotalPrice } from "@/utils";
import { AccessoryItem, FormData, RepairsSelection } from "@/types";
import React, { useCallback, useEffect, useState } from "react";

type NumericFieldName = "repairMaxPrice" | "deposit" | "totalPrice";
const numericFields = new Set<NumericFieldName>(["repairMaxPrice", "deposit", "totalPrice"]);

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
        repairs: {
            repairsWillBeMade: [],
            testBeforeRepair: [],
            deviceItemsBeforeRepair: [],
        },
        accessories: [],
        waterDamage: false,
        waterDamageAcknowledged: false,
        agreeWithTerms: false,
        totalAccessoryPrice: 0,
        deviceUnlockCode: "",
        repairMaxPrice: null,
        deposit: null,
        totalPrice: null,
        notes: "",
        signature: "",
        orderId: "",
    });
    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isTotalPriceManual, setIsTotalPriceManual] = useState(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name as keyof FormData;
        const fieldValue = e.target.value;

        if (numericFields.has(fieldName as NumericFieldName)) {
            const parsedValue = fieldValue === "" ? null : Number(fieldValue);
            const numericValue =
                parsedValue !== null && Number.isFinite(parsedValue) ? parsedValue : null;

            if (fieldName === "totalPrice") {
                setIsTotalPriceManual(numericValue !== null);
            }

            setFormData((prevState) => ({
                ...prevState,
                [fieldName]: numericValue,
            }));
            return;
        }

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));
    };

    const handleRepairsChange = useCallback(
        (selectedItems: string[], fieldName: keyof RepairsSelection) => {
            setFormData((prevState) => ({
                ...prevState,
                repairs: {
                    ...prevState.repairs,
                    [fieldName]: selectedItems,
                },
            }));
        },
        []
    );

    const handleAccessoriesChange = useCallback((selectedItems: AccessoryItem[]) => {
        setFormData((prevState) => ({
            ...prevState,
            accessories: selectedItems,
        }));
    }, []);

    const handleWaterDamageChange = useCallback((hasWaterDamage: boolean) => {
        setFormData((prevState) => ({
            ...prevState,
            waterDamage: hasWaterDamage,
            waterDamageAcknowledged: hasWaterDamage ? prevState.waterDamageAcknowledged : false,
        }));
    }, []);

    const handleWaterDamageAcknowledgedChange = useCallback((acknowledged: boolean) => {
        setFormData((prevState) => ({
            ...prevState,
            waterDamageAcknowledged: acknowledged,
        }));
    }, []);

    const handleAgreeWithTermsChange = useCallback((agreeWithTerms: boolean) => {
        setFormData((prevState) => ({
            ...prevState,
            agreeWithTerms,
        }));
    }, []);

    useEffect(() => {
        const accessoryTotal = calculateAccessoryTotal(formData.accessories);
        const calculatedTotalPrice = calculateTotalPrice(
            accessoryTotal,
            formData.repairMaxPrice,
            formData.deposit
        );

        const nextTotalPrice = isTotalPriceManual
            ? formData.totalPrice ?? calculatedTotalPrice
            : calculatedTotalPrice;

        setFormData((prevState) => {
            if (
                prevState.totalAccessoryPrice === accessoryTotal &&
                prevState.totalPrice === nextTotalPrice
            ) {
                return prevState;
            }

            return {
                ...prevState,
                totalAccessoryPrice: accessoryTotal,
                totalPrice: nextTotalPrice,
            };
        });
    }, [formData.accessories, formData.deposit, formData.repairMaxPrice, formData.totalPrice, isTotalPriceManual]);

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
            setFormSuccess(false);
            setFormSuccessMessage("Missing NEXT_PUBLIC_API_URL. Please check your environment config.");
            return;
        }

        const newOrderId = generateOrderId();
        const updatedFormData = { ...formData, orderId: newOrderId };

        try {
            setIsSubmitting(true);

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

            const submitData = await submitResponse.json();
            setFormSuccess(true);
            setFormSuccessMessage(submitData.submission_text || "Form submitted successfully.");

            if (submitData.download_url) {
                window.location.href = `${apiUrl}${submitData.download_url}`;
            }
            // After successful form submission, send an email
            try {
                const response = await fetch(`${apiUrl}/send-email`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
                        subject: `${updatedFormData.lastName} - ${updatedFormData.orderId} Repair Order`,
                        formData: updatedFormData,
                        filename: submitData.filename,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Failed to send email. Please try again.");
                }
                const emailResponseData = await response.json();
                console.log(emailResponseData.message || "Email sent successfully.");
            } catch (error: any) {
                console.error("Error sending email:", error);
                setFormSuccess(false);
                setFormSuccessMessage(
                    "Form submitted, but failed to send email. Please contact support."
                );
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setFormSuccess(false);
            setFormSuccessMessage("Failed to submit the form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container my-8 capitalize">
            {formSuccessMessage ? (
                <p className={`mb-4 text-sm ${formSuccess ? "text-green-700" : "text-red-700"}`}>
                    {formSuccessMessage}
                </p>
            ) : null}

            <Form
                onSubmit={handleSubmitForm}
                handleInput={handleInput}
                formData={formData}
                onRepairsChange={handleRepairsChange}
                onAccessoriesChange={handleAccessoriesChange}
                onWaterDamageChange={handleWaterDamageChange}
                onWaterDamageAcknowledgedChange={handleWaterDamageAcknowledgedChange}
                onAgreeWithTermsChange={handleAgreeWithTermsChange}
                isSubmitting={isSubmitting}
            />
        </div>
    );
};

export default RepairForm;
