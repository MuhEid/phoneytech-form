import { useState } from "react";
import { TiDelete, TiArrowSortedDown } from "react-icons/ti";
import { FaEuroSign } from "react-icons/fa";

const accessoryItems: { name: string; price: number }[] = [
    { name: "Hülle", price: 10.49 },
    { name: "Panzerglas", price: 10.0 },
    { name: "Ladegerät", price: 10.19 },
    { name: "Ladekabel", price: 25.48 },
    { name: "Kopfhörer", price: 10.97 },
    { name: "Datenübertragung", price: 13.15 },
];

interface DropdownMenuProps {
    onSelectionChange: (selectedItems: { name: string; price: number }[]) => void;
}

const DropdownMenu = ({ onSelectionChange }: DropdownMenuProps) => {
    const [selectedItems, setSelectedItems] = useState<{ name: string; price: number }[]>([]);

    const handleSelect = (item: { name: string; price: number }) => {
        if (!selectedItems.some((selectedItem) => selectedItem.name === item.name)) {
            const newSelectedItems = [...selectedItems, item];
            setSelectedItems(newSelectedItems);
            onSelectionChange(newSelectedItems);
        }
    };

    const handleRemove = (item: { name: string; price: number }) => {
        const newSelectedItems = selectedItems.filter((ele) => ele.name !== item.name);
        setSelectedItems(newSelectedItems);
        onSelectionChange(newSelectedItems);
    };

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-center mt-10">
            <h4 className="font-semibold my-5">
                Wählen Sie aus, welches Zubehör Sie hinzufügen möchten
            </h4>
            <div className="w-full md:w-1/2">
                <div className="dropdown w-full">
                    <label tabIndex={0} className="btn btn-primary bg-main text-white m-1 w-full">
                        Zubehör
                        <TiArrowSortedDown />
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {accessoryItems.map((ele, index) => (
                            <li key={index} onClick={() => handleSelect(ele)}>
                                <a>{ele.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    {selectedItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-around">
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
