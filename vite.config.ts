import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';

const SRC_DIR = './';
const PUBLIC_DIR = './public';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isDev = env.NODE_ENV === 'development';

  return {
    build: {
      sourcemap: isDev,
      target: 'esnext',
      polyfillDynamicImport: false,
    },
    root: SRC_DIR,
    publicDir: PUBLIC_DIR,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
      conditions: ['development', 'browser'],
    },
    server: {
      port: 3000,
      host: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      transformMode: { web: [/\.[jt]sx?$/] },
      setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect.js'],
      // otherwise, solid would be loaded twice:
      deps: { registerNodeLoader: true },
      // if you have few tests, try commenting one
      // or both out to improve performance:
      // threads: false,
      // isolate: false,
    },

    plugins: [
      solidPlugin(),
      eslint({
        fix: false,
        ...(isDev && {
          failOnWarning: false,
          failOnError: false,
        }),
      }),
      // https://vite-plugin-pwa.netlify.app/
      VitePWA({
        mode: isDev ? 'development' : 'production',
        workbox: {
          sourcemap: isDev,
        },
        devOptions: {
          enabled: !isDev,
          navigateFallback: 'index.html',
        },
        injectRegister: null,
        base: '/',
        srcDir: 'src',
        filename: 'sw.ts',
        includeAssets: ['/favicon.png'],
        registerType: 'autoUpdate',
        strategies: 'injectManifest',
        injectManifest: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
        manifest: {
          name: 'Solid mobile',
          short_name: 'Solid mobile',
          description: 'Solid mobile',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          start_url: '/',
          display: 'standalone',
          icons: [
            {
              src: '/icons/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/icons/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/icons/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
  };
});
