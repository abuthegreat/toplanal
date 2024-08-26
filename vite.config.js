import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@crema", replacement: "/src/@crema" }],
  },
  define: {
    "process.env": {},
  },
  server: {
    host: "localhost", // Allows access from your local network
    port: 3005, // You can set any port number you prefer
  },
  plugins: [react()],
});
