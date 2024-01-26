import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
    VitePWA({
        manifest: {
            name: "MedTrackr",
            short_name: "MedTrackr",
            theme_color: "#ffffff",
            background_color: "#ffffff",
            display: "standalone",
            scope: "/",
            start_url: "/",
            icons: [
                {
                    src: "/img/ico/maskable_icon.png",
                    sizes: "196x196",
                    type: "image/png",
                    purpose: "any maskable"
                },
                {
                    src: "/img/ico/logo192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "/img/ico/logo256.png",
                    sizes: "256x256",
                    type: "image/png"
                },
                {
                    src: "/img/ico/logo384.png",
                    sizes: "384x384",
                    type: "image/png"
                },
                {
                    src: "/img/ico/logo512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        }
    })
  ],
})
