import {defineConfig} from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    resolve:{
      alias: {
        "@": path.resolve(__dirname, "./src"),

        // 🔥 force single react instance
        react: path.resolve(__dirname, "node_modules/react"),
        "react-dom": path.resolve(__dirname, "node_modules/react-dom")
      },
      dedupe: ["react", "react-dom"]
    },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true
      }
    }
  }
});
