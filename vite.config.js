import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#2D83E8", // your custom color
      },
    },
  },
  plugins: [],
}