"use client";
import React, { createContext, useState, useEffect } from "react";

type FormDataType = {
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
    totalAccessoryPrice: number;
    repairs: {
        repairsWillBeMade: string[];
        testBeforeRepair: string[];
        deviceItemsBeforeRepair: string[];
    };
    deviceUnlockCode: string;
    repairMaxPrice: number;
    deposit: number;
    totalPrice: number;
    notes: string;
    orderId: string;
    hasWaterDamage: boolean;
    waterDamageSelected: string | null;
    selectedAccessories: { name: string; price: number }[];
    agreeWithTerms: boolean;
    [key: string]: any;
};

type FormDataContextType = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNoneInputFields: (data: { name: keyof FormDataType; value: any }) => void;
};

export const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<FormDataType>({
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
        repairs: {
            repairsWillBeMade: [],
            testBeforeRepair: [],
            deviceItemsBeforeRepair: [],
        },
        deviceUnlockCode: "",
        repairMaxPrice: 0,
        deposit: 0,
        totalPrice: 0,
        notes: "",
        orderId: "",
        hasWaterDamage: false,
        waterDamageSelected: null,
        selectedAccessories: [],
        agreeWithTerms: false,
    });

    // Persist form data to localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedData = localStorage.getItem("formData");
            if (savedData) {
                setFormData(JSON.parse(savedData));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("formData", JSON.stringify(formData));
        }
    }, [formData]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));
    };

    const handleNoneInputFields = (data: { name: keyof FormDataType; value: any }) => {
        if (typeof data === "object" && data.name && data.value !== undefined) {
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

    return (
        <FormDataContext.Provider
            value={{ formData, setFormData, handleInput, handleNoneInputFields }}
        >
            {children}
        </FormDataContext.Provider>
    );
};
