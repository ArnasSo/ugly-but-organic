import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  // Enable Tailwind CSS and React Router plugins
  plugins: [tailwindcss(), reactRouter()],
});