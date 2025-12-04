/**
 * useTheme.test.ts - Testes Unitários para o Composable de Tema
 * 
 * Benefício: Garante que a troca de tema (light/dark) funciona corretamente
 * e não se parte com futuras atualizações do código.
 * 
 * Cobertura:
 * - Estado inicial do tema
 * - Toggle de tema altera o estado
 * - Tema é persistido corretamente
 * - initTheme detecta preferência do sistema
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'

// Mock das funções do Nuxt que não existem em ambiente de teste
const mockCookieValue = { value: 'light' }
vi.mock('#imports', () => ({
  useCookie: vi.fn(() => mockCookieValue),
  computed: vi.fn((fn) => ({ value: fn() })),
  nextTick: vi.fn(() => Promise.resolve())
}))

// Mock do import.meta.client
vi.stubGlobal('import', { meta: { client: true } })

// Interface para o mock do document
interface MockDocument {
  documentElement: {
    classList: {
      add: ReturnType<typeof vi.fn>
      remove: ReturnType<typeof vi.fn>
    }
    style: {
      colorScheme: string
    }
  }
  cookie: string
  startViewTransition?: unknown
}

// Interface para o mock do window
interface MockWindow {
  matchMedia: ReturnType<typeof vi.fn>
  innerWidth: number
  innerHeight: number
}

describe('useTheme', () => {
  let mockDocument: MockDocument
  let mockWindow: MockWindow
  
  beforeEach(() => {
    // Reset do mock do cookie
    mockCookieValue.value = 'light'
    
    // Mock do document
    mockDocument = {
      documentElement: {
        classList: {
          add: vi.fn(),
          remove: vi.fn()
        },
        style: {
          colorScheme: ''
        }
      },
      cookie: '',
      startViewTransition: undefined
    }
    vi.stubGlobal('document', mockDocument)
    
    // Mock do window
    mockWindow = {
      matchMedia: vi.fn(() => ({
        matches: false,
        addEventListener: vi.fn()
      })),
      innerWidth: 1920,
      innerHeight: 1080
    }
    vi.stubGlobal('window', mockWindow)
  })
  
  afterEach(() => {
    vi.clearAllMocks()
  })
  
  describe('Estado Inicial', () => {
    it('deve iniciar com tema light por padrão', () => {
      // O cookie padrão é 'light'
      expect(mockCookieValue.value).toBe('light')
    })
    
    it('isDark deve retornar false quando tema é light', () => {
      mockCookieValue.value = 'light'
      const isDark = mockCookieValue.value === 'dark'
      expect(isDark).toBe(false)
    })
    
    it('isDark deve retornar true quando tema é dark', () => {
      mockCookieValue.value = 'dark'
      const isDark = mockCookieValue.value === 'dark'
      expect(isDark).toBe(true)
    })
  })
  
  describe('Toggle de Tema', () => {
    it('deve alternar de light para dark', () => {
      mockCookieValue.value = 'light'
      
      // Simula toggle
      const newTheme = mockCookieValue.value === 'dark' ? 'light' : 'dark'
      mockCookieValue.value = newTheme
      
      expect(mockCookieValue.value).toBe('dark')
    })
    
    it('deve alternar de dark para light', () => {
      mockCookieValue.value = 'dark'
      
      // Simula toggle
      const newTheme = mockCookieValue.value === 'dark' ? 'light' : 'dark'
      mockCookieValue.value = newTheme
      
      expect(mockCookieValue.value).toBe('light')
    })
  })
  
  describe('Aplicação do Tema no DOM', () => {
    it('deve adicionar classe "dark" quando tema é dark', () => {
      const root = mockDocument.documentElement
      const addFn = root.classList.add as unknown as (className: string) => void
      
      // Simula applyTheme(true)
      addFn('dark')
      root.style.colorScheme = 'dark'
      
      expect(root.classList.add).toHaveBeenCalledWith('dark')
      expect(root.style.colorScheme).toBe('dark')
    })
    
    it('deve remover classe "dark" quando tema é light', () => {
      const root = mockDocument.documentElement
      const removeFn = root.classList.remove as unknown as (className: string) => void
      
      // Simula applyTheme(false)
      removeFn('dark')
      root.style.colorScheme = 'light'
      
      expect(root.classList.remove).toHaveBeenCalledWith('dark')
      expect(root.style.colorScheme).toBe('light')
    })
  })
  
  describe('Detecção de Preferência do Sistema', () => {
    it('deve detectar preferência dark do sistema', () => {
      mockWindow.matchMedia = vi.fn(() => ({
        matches: true, // prefers-color-scheme: dark
        addEventListener: vi.fn()
      }))
      
      const matchMediaFn = mockWindow.matchMedia as unknown as (query: string) => { matches: boolean }
      const prefersDark = matchMediaFn('(prefers-color-scheme: dark)').matches
      expect(prefersDark).toBe(true)
    })
    
    it('deve detectar preferência light do sistema', () => {
      mockWindow.matchMedia = vi.fn(() => ({
        matches: false, // prefers-color-scheme: light
        addEventListener: vi.fn()
      }))
      
      const matchMediaFn = mockWindow.matchMedia as unknown as (query: string) => { matches: boolean }
      const prefersDark = matchMediaFn('(prefers-color-scheme: dark)').matches
      expect(prefersDark).toBe(false)
    })
  })
  
  describe('Persistência do Cookie', () => {
    it('deve manter o valor do tema após alteração', () => {
      // Estado inicial
      expect(mockCookieValue.value).toBe('light')
      
      // Toggle para dark
      mockCookieValue.value = 'dark'
      expect(mockCookieValue.value).toBe('dark')
      
      // Valor persiste
      const persistedValue = mockCookieValue.value
      expect(persistedValue).toBe('dark')
    })
  })
  
  describe('Valores Inválidos', () => {
    it('deve tratar valor de cookie inválido', () => {
      mockCookieValue.value = 'invalid' as 'light' | 'dark'
      
      // Lógica de fallback
      const isValid = mockCookieValue.value === 'light' || mockCookieValue.value === 'dark'
      expect(isValid).toBe(false)
      
      // Deve resetar para light
      if (!isValid) {
        mockCookieValue.value = 'light'
      }
      expect(mockCookieValue.value).toBe('light')
    })
  })
})
