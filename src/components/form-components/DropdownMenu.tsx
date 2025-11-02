import { useState } from "react";
import { TiDelete, TiArrowSortedDown } from "react-icons/ti";
import { FaEuroSign } from "react-icons/fa";

const accessoryItems: string[] = [
    "Hülle",
    "Panzerglas",
    "Ladegerät",
    "Ladekabel",
    "Kopfhörer",
    "Datenübertragung",
];

interface DropdownMenuProps {
    selectedItems: { name: string; price: number }[];
    onSelectionChange: (selectedItems: { name: string; price: number }[]) => void;
}

const DropdownMenu = ({ selectedItems, onSelectionChange }: DropdownMenuProps) => {
    const [currentPrice, setCurrentPrice] = useState<number | null>(null);
    const [selectedAccessory, setSelectedAccessory] = useState<string | null>(null);

    const handleSelect = (item: string) => {
        if (!selectedItems.some((selectedItem) => selectedItem.name === item)) {
            setSelectedAccessory(item);
        }
    };

    const handleAddItem = () => {
        if (selectedAccessory && currentPrice !== null && isFinite(currentPrice)) {
            const newItem = { name: selectedAccessory, price: currentPrice };
            const newSelectedItems = [...selectedItems, newItem];
            onSelectionChange(newSelectedItems);
            // Reset input fields
            setSelectedAccessory(null);
            setCurrentPrice(null);
        }
    };

    const handleRemove = (item: { name: string; price: number }) => {
        const newSelectedItems = selectedItems.filter((ele) => ele.name !== item.name);
        onSelectionChange(newSelectedItems);
    };

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-center mt-10">
            <h4 className="font-semibold my-5">
                Wählen Sie aus, welches Zubehör Sie hinzufügen möchten
            </h4>
            <div className="w-full md:w-1/2">
                <div className="dropdown w-full z-10">
                    <label
                        tabIndex={0}
                        className="btn btn-primary bg-main hover:bg-blue-900 text-white m-1 w-full"
                    >
                        Zubehör
                        <TiArrowSortedDown />
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {accessoryItems.map((ele) => (
                            <li key={ele}>
                                <button
                                    type="button"
                                    className="text-left w-full"
                                    onClick={() => handleSelect(ele)}
                                >
                                    {ele}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Show input field for price if an accessory is selected */}
                {selectedAccessory && (
                    <div className="mt-4">
                        <h5 className="font-semibold">Set price for {selectedAccessory}</h5>
                        <input
                            type="number"
                            className="input  w-full max-w-xs mt-2"
                            placeholder="Enter price"
                            value={currentPrice ?? ""}
                            onChange={(e) => {
                                const v = e.target.value;
                                if (v === "") {
                                    setCurrentPrice(null);
                                } else {
                                    const num = Number.parseFloat(v);
                                    setCurrentPrice(Number.isFinite(num) ? num : null);
                                }
                            }}
                            min={0}
                            step={0.01}
                            inputMode="decimal"
                        />
                        <button className="btn btn-main mt-2 ml-2" onClick={handleAddItem}>
                            Add {selectedAccessory}
                        </button>
                    </div>
                )}

                <div className="mt-4">
                    {selectedItems.map((item) => (
                        <div key={item.name} className="flex items-center justify-around">
                            <div className="flex items-center text-gray-900 bg-white border border-gray-300 rounded-md px-5 py-1 my-1 w-1/2">
                                <h4>{item.name}</h4>
                                <span className="flex-1 ml-2">{item.price}</span>
                                <FaEuroSign />
                            </div>

                            <button
                                className=" text-red-500 hover:text-red-700 ml-2"
                                onClick={() => handleRemove(item)}
                            >
                                <TiDelete size={25} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
