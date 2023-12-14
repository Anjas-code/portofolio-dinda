import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                genoa: {
                    50: "#F3FAF8",
                    100: "#D6F1EC",
                    200: "#ADE2D9",
                    300: "#7DCBC3",
                    400: "#52AFA8",
                    500: "#38948E",
                    600: "#286F6C",
                    700: "#265F5E",
                    800: "#224D4C",
                    900: "#204141",
                    950: "#0D2626",
                },

                smoky: {
                    50: "#F6F6F8",
                    100: "#EAEAEF",
                    200: "#D9D9E4",
                    300: "#C0C1D0",
                    400: "#A1A1B9",
                    500: "#8C8AA7",
                    600: "#7C7898",
                    700: "#726C89",
                    800: "#5F5A71",
                    900: "#4E4B5D",
                    950: "#33313A",
                },

                "cream-can": {
                    50: "#FEF9EC",
                    100: "#FBEFCA",
                    200: "#F6DD91",
                    300: "#F0C149",
                    400: "#EEB031",
                    500: "#E79019",
                    600: "#CC6D13",
                    700: "#A94D14",
                    800: "#8A3D16",
                    900: "#723315",
                    950: "#411807",
                },

                "outrageous-orange": {
                    50: "#FEF3EE",
                    100: "#FDE4D7",
                    200: "#FAC4AE",
                    300: "#F79B7A",
                    400: "#F26440",
                    500: "#EF4220",
                    600: "#E02916",
                    700: "#BA1B14",
                    800: "#941818",
                    900: "#771717",
                    950: "#400A0B",
                },

                neutral: {
                    50: "#F9FBFD",
                    100: "#F8F9FB",
                    400: "#F1F5F8",
                    600: "#E6E9EC",
                    700: "#D1D9E2",
                    900: "#7C8B9D",
                    black: "#1E1E1E",
                    gray: {
                        50: "#5F6D7E",
                        500: "#2E3646",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
