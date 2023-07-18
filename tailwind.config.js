/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/styles/**/*.{css}",
];

export const theme = {
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  extend: {
    colors: {
      darkBlue: "#27374D",
    },
    keyframes: {
      wiggle: {
        "0%": { transform: "rotate(-0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      translateM: {
        "0%": { transform: "translateX(-116%)" },
        "100%": { transform: "translate(116%)" },
      },
      translateP: {
        "0%": { transform: "translateX(116%)" },
        "100%": { transform: "translate(-116%)" },
      },
    },
    animation: {
      translateM: "translateM 70s linear infinite",
      translateP: "translateP 70s linear infinite",
      wiggle: "wiggle 20s linear infinite",
    },
  },
};

export const plugins = [require("tailwind-scrollbar")];
