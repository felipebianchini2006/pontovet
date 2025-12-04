import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    // ═══════════════════════════════════════════════════════════════════════════
    // VITEST CONFIG - Testes Unitários
    // Benefício: Garante que funcionalidades principais não quebram com updates
    // ═══════════════════════════════════════════════════════════════════════════
    globals: true,
    environment: 'happy-dom',
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['app/composables/**/*.ts']
    }
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './app'),
      '@': resolve(__dirname, './app'),
      '#imports': resolve(__dirname, './.nuxt/imports.d.ts')
    }
  }
})
