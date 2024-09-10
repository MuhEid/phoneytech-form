import { customAlphabet } from "nanoid";

export const generateOrderId = () => {
    const currentYear = new Date().getFullYear();
    const nanoid = customAlphabet("1234567890", 10);
    const uniquePart = nanoid(5);
    return `PT${currentYear}-${uniquePart}`;
};
