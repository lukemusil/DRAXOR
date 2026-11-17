import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({isSsrBuild}) => {
  return {
    // Web je na kořeni https://draxor.cz. Absolutní cesty drží assety
    // i na podstránce /ochrana-osobnich-udaju/.
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: isSsrBuild
          ? {}
          : {
              manualChunks(id) {
                if (
                  id.includes('node_modules/react-dom') ||
                  id.includes('node_modules/react/') ||
                  id.includes('node_modules/scheduler/')
                ) {
                  return 'react';
                }
                if (id.includes('node_modules/motion/') || id.includes('node_modules/framer-motion/')) {
                  return 'motion';
                }
              },
            },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
