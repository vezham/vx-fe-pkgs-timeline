/// <reference types='vitest' />
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/packages/core/react-v2',
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json')
    })
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      entry: {
        index: 'src/index.ts',
        'plugin/index': 'src/heroui/plugin/index.ts'
      },
      name: 'react-v2',
      fileName: 'index',
      formats: ['es' as const]
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        entryFileNames: ({ name }) => `${name}.js`
      }
    }
  },
  test: {
    name: 'react-v2',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const
    }
  }
}))
