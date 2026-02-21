import { customAlphabet } from "nanoid";

export const generateOrderId = () => {
    const currentYear = new Date().getFullYear();
    const stringYear = currentYear.toString().slice(-2);
    const nanoid = customAlphabet("1234567890", 10);
    const uniquePart = nanoid(3);
    return `A${stringYear}-${uniquePart}`;
};

/**
 * Calculate total price from accessories
 */
export const calculateAccessoryTotal = (accessories: { name: string; price: number }[]): number => {
    return parseFloat(accessories.reduce((acc, item) => acc + item.price, 0).toFixed(2));
};

/**
 * Calculate total price from accessories and manual inputs
 */
export const calculateTotalPrice = (
    accessoryTotal: number,
    _repairMaxPrice: number | null,
    _deposit: number | null
): number => {
    // Otherwise, compute from accessories + deposit
    // For now, totalPrice = totalAccessoryPrice (can be extended with repairMaxPrice logic later)
    return accessoryTotal;
};
