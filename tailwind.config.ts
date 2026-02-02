import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        ".pages/**/*.{js,ts,jsx,tsx,mdx}",
        ".components/**/*.{js,ts,jsx,tsx,mdx}",
        ".app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                valentine: {
                    brand: "#C08081", //The Pink/Rose
                    surface: "#262626", //The Dark Card Background
                    text: "#EDEDED", //The Off-White Text
                },
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;