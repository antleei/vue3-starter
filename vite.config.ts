import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`
        }
    },
    css: {
        devSourcemap: true
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ArcoResolver()],
            dts: 'src/auto-imports.d.ts'
        }),
        Components({
            resolvers: [
                ArcoResolver({
                    sideEffect: true
                })
            ],
            dts: 'src/components.d.ts'
        }),
        eslintPlugin({
            cache: false,
            failOnError: false,
            include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
            exclude: ['node_modules', 'dist']
        })
    ]
});
