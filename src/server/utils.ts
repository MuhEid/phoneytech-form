import { customAlphabet } from "nanoid";

export const generateOrderId = () => {
    const currentYear = new Date().getFullYear();
    const stringYear = currentYear.toString().slice(-2);
    const nanoid = customAlphabet("1234567890", 10);
    const uniquePart = nanoid(3);
    return `A${stringYear}-${uniquePart}`;
};
