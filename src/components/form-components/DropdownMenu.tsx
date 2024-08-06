import { useState } from "react";
import { TiDelete, TiArrowSortedDown } from "react-icons/ti";

const accessoryItems: { name: string; price: number }[] = [
    { name: "Hülle", price: 10 },
    { name: "Panzerglas", price: 10 },
    { name: "Ladegerät", price: 10 },
    { name: "Ladekable", price: 10 },
    { name: "Kopfhörer", price: 10 },
    { name: "Datenübertragung", price: 10 },
];

interface DropdownMenuProps {
    onSelectionChange: (selectedItems: { name: string; price: number }[]) => void;
}

const DropdownMenu = ({ onSelectionChange }: DropdownMenuProps) => {
    const [selectedItems, setSelectedItems] = useState<{ name: string; price: number }[]>([]);

    const [accessoryPrice, setAccesoryPrice] = useState<number>(0);
    const handleAccesoryPrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const values = e.target.value;
    };

    const handleSelect = (item: { name: string; price: number }) => {
        if (selectedItems.map((itemObject) => itemObject.name === item.name)) {
            const newSelectedItems = [...selectedItems, item];
            setSelectedItems(newSelectedItems);
            onSelectionChange(newSelectedItems);
            console.log(selectedItems);
        }
    };

    const handleRemove = (item: { name: string; price: number }) => {
        const newSelectedItems = selectedItems.filter((ele) => ele !== item);
        setSelectedItems(newSelectedItems);
        onSelectionChange(newSelectedItems);
    };

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-center my-10">
            <h4 className="font-semibold">
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
                        <div key={index} className="flex items-center">
                            <div className="flex items-center justify-between text-gray-900 bg-white border border-gray-300 rounded-md px-5 py-1 my-1 w-full">
                                <label>{item.name}</label>

                                <input
                                    type="number"
                                    name={`${item}Price`}
                                    placeholder="Preis here"
                                    className="input border border-main focus:border-none w-1/4"
                                />
                            </div>
                            <button
                                className="text-red-500 hover:text-red-700 ml-2"
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
