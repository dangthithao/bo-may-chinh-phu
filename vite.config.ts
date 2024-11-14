import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build :{
    rollupOptions: {
      output: {
        entryFileNames: 'bo-may-chinh-phu.js',
        assetFileNames: 'bo-may-chinh-phu.css'
      },
    },
  },
},  
)
