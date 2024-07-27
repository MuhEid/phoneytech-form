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
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">
                    Zubehör
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {accessoryItems.map((ele, index) => (
                        <li key={index} onClick={() => handleSelect(ele)}>
                            <a>{ele}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                {selectedItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div className="flex items-center justify-between text-gray-900 bg-white border border-gray-300 rounded-md px-5 py-1 my-1 w-full">
                            <label>{item}</label>
                            <input
                                type="number"
                                name={`${item}Price`}
                                placeholder="Preis"
                                className="border-none w-1/4"
                            />
                        </div>
                        <button
                            className="text-red-500 hover:text-red-700 ml-2"
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

//   <select className="select select-bordered w-full max-w-xs" onChange={handleSelectionChange}>
//       <option disabled selected>
//           Pick your favorite anime
//       </option>
//       <option>Naruto</option>
//       <option>One Piece</option>
//       <option>Dragon Ball</option>
//   </select>;