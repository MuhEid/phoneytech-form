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
    totalAccessoryPrice: number;
    deviceUnlockCode: string;
    repairMaxPrice: number | null;
    deposit: number | null;
    totalPrice: number | null;
    notes: string;
    [key: string]: any;
};

