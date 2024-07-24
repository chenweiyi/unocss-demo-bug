import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  cli: {
    entry: {
      patterns: ['./src/**/*.{vue,jsx,tsx,md,mdx,html}'],
      outFile: 'src/uno.css'
    }
  },
  // presets: [presetUno(), presetAttributify()]
  presets: [presetUno()]
})
