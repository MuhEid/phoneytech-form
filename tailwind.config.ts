import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
    content: [
        "./node_modules/flowbite-react/lib/**/*.js",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            container: {
                center: true,
                padding: "3rem lg:2rem", // default padding
                screens: {
                    sm: "100%", // full width on small screens
                    md: "100%", // full width on medium screens
                    lg: "800px", // 800px width on large screens
                    xl: "1200px", // 1200px width on extra-large screens
                    "2xl": "1200px", // 1400px width on 2x extra-large screens
                },
            },
            colors: {
                primary: "#1f4696",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
export default config;
