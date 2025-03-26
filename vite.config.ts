
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './', // Relative path for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name)) {
            return `assets/images/[name].[hash][extname]`;
          }
          
          if (/\.(css)$/.test(name)) {
            return `assets/css/[name].[hash][extname]`;
          }
          
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(name)) {
            return `assets/fonts/[name].[hash][extname]`;
          }
          
          return `assets/[name].[hash][extname]`;
        }
      }
    }
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
