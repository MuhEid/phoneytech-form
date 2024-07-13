import React from "react";

type formProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({ onSubmit, handleInput }: formProps) {
    return (
        <form onSubmit={onSubmit}>
            <div className="grname gap-6 mb-6 md:grname-cols-2">
                <div>
                    <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Phone number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        required
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Email address
                </label>
                <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                    onChange={handleInput}
                />
            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
}
