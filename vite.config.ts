import {unstable_vitePlugin as remix} from '@remix-run/dev';
import {defineConfig} from 'vite';
import {installGlobals} from '@remix-run/node';

installGlobals();

export default defineConfig({
    ssr: {
        noExternal: ['@gravity-ui/uikit', '@gravity-ui/icons'],
    },
    plugins: [remix()],
    optimizeDeps: {
        //workaround for the problem https://github.com/vitejs/vite/issues/7719
        extensions: ['.css'],
        esbuildOptions: {
            plugins: [
                (await import('esbuild-sass-plugin')).sassPlugin({
                    type: 'style',
                }),
            ],
        },
    },
});
