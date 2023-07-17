import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    https:true
  },
  plugins: [
    mkcert({
      // mkcertPath:".cert/mkcert-v1.4.4-windows-amd64.exe"
    }),
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Components({
      dts: true, // or a custom path
      resolvers: [NaiveUiResolver()]
    }),
  ],
  resolve: {
    alias: {
      './': fileURLToPath(new URL('./src', import.meta.url)),
      './node_modules': fileURLToPath(new URL('./node_modules', import.meta.url))
    }
  }
})

