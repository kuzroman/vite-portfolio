import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader({
            svgo: false,
        }),
        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: ['vue', 'vue-router', 'vue/macros', '@vueuse/head'],
            dts: 'src/auto-imports.d.ts',
            dirs: ['src/stores'],
            vueTemplate: true,
            resolvers: [ElementPlusResolver()],
        }),
        // https://github.com/antfu/unplugin-vue-components
        Components({
            dirs: ['src/**/components'],
            deep: true,
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/],
            dts: 'src/components.d.ts',
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                    directives: true,
                }),
            ],
        }),
    ],
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
})
