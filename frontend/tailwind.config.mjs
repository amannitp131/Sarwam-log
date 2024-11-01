const flowbite = require("flowbite/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Include Flowbite content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Add Flowbite as a plugin
  ],
};
