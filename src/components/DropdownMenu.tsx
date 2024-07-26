import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const accessoryItems: string[] = [
    "Hülle",
    "Panzerglas",
    "Ladegerät",
    "Ladekable",
    "Kopfhörer",
    "Datenübertragung",
];

interface DropdownMenuProps {
    onSelectionChange: (selectedItems: string[]) => void;
}

const DropdownMenu = ({ onSelectionChange }: DropdownMenuProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSelect = (item: string) => {
        if (!selectedItems.includes(item)) {
            const newSelectedItems = [...selectedItems, item];
            setSelectedItems(newSelectedItems);
            onSelectionChange(newSelectedItems);
        }
    };

    const handleRemove = (item: string) => {
        const newSelectedItems = selectedItems.filter((ele) => ele !== item);
        setSelectedItems(newSelectedItems);
        onSelectionChange(newSelectedItems);
    };

    return (
        <div className="w-96">
            <Dropdown label="Zubehör" dismissOnClick={false} className="">
                {accessoryItems.map((ele, index) => (
                    <Dropdown.Item
                        key={index}
                        className="px-4 py-2 text-gray-900 bg-white border-b border-gray-300 hover:bg-gray-200 hover:text-gray-900 cursor-pointer"
                        onClick={() => handleSelect(ele)}
                    >
                        {ele}
                    </Dropdown.Item>
                ))}
            </Dropdown>
            <div className="mt-4">
                {selectedItems.map((item, index) => (
                    <div key={index} className="flex items-center ">
                        <div className="flex items-center justify-between text-gray-900 bg-white border border-gray-300 rounded-md px-5 py-1 my-1">
                            <label>{item}</label>
                            <input
                                type="number"
                                name={`${item}Price`}
                                placeholder="Preis"
                                className="border-none w-1/4"
                            />
                        </div>
                        <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleRemove(item)}
                        >
                            <MdDelete size={35} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
