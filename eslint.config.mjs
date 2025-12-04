// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // ═══════════════════════════════════════════════════════════════════════════
  // ESLINT CONFIG - Regras de Qualidade de Código
  // Benefício: Previne "código sujo" e mantém consistência no projeto
  // ═══════════════════════════════════════════════════════════════════════════
  rules: {
    // Vue 3 - Regras de estilo
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    
    // Ordem dos atributos em templates Vue
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',      // is, v-is
        'LIST_RENDERING',  // v-for
        'CONDITIONALS',    // v-if, v-else-if, v-else, v-show, v-cloak
        'RENDER_MODIFIERS', // v-pre, v-once
        'GLOBAL',          // id
        'UNIQUE',          // ref, key
        'SLOT',            // v-slot, slot
        'TWO_WAY_BINDING', // v-model
        'OTHER_DIRECTIVES', // v-custom-directive
        'OTHER_ATTR',      // custom attributes
        'EVENTS',          // @click, v-on
        'CONTENT'          // v-html, v-text
      ],
      alphabetical: false
    }],
    
    // Componentes multi-palavra (exceto páginas e layouts)
    'vue/multi-word-component-names': 'off',
    
    // Máximo de atributos por linha
    'vue/max-attributes-per-line': ['warn', {
      singleline: { max: 3 },
      multiline: { max: 1 }
    }],
    
    // Indentação no template
    'vue/html-indent': ['error', 2],
    
    // Espaçamento em mustaches {{ }}
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    
    // Não permitir v-html (segurança XSS) - aviso apenas
    'vue/no-v-html': 'warn',
    
    // Require v-bind:key com v-for
    'vue/require-v-for-key': 'error',
    
    // TypeScript
    '@typescript-eslint/no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    
    // Console logs - aviso em dev, erro em prod
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    
    // Debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  }
})
