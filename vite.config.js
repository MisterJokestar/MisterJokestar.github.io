import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vike()],
  base: "/",
});
