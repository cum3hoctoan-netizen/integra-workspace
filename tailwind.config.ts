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
        'integra-ivory': '#FFFFF0', // Trắng ngà
        'integra-navy': '#000080',  // Xanh Navy
        'integra-gold': '#D4AF37',  // Ép kim vàng
      },
    },
  },
  plugins: [],
};
export default config;