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
    host: "192.168.68.106", // Allows access from your local network
    port: 5173, // You can set any port number you prefer
  },
  plugins: [react()],
});
