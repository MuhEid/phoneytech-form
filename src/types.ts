export type AccessoryItem = {
    name: string;
    price: number;
};

export type RepairsSelection = {
    repairsWillBeMade: string[];
    testBeforeRepair: string[];
    deviceItemsBeforeRepair: string[];
};

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
    repairs: RepairsSelection;
    accessories: AccessoryItem[];
    waterDamage: boolean;
    waterDamageAcknowledged: boolean;
    agreeWithTerms: boolean;
    totalAccessoryPrice: number;
    deviceUnlockCode: string;
    repairMaxPrice: number | null;
    deposit: number | null;
    totalPrice: number | null;
    notes: string;
    signature: string;
    orderId: string;
};

