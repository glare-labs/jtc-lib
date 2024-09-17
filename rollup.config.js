import terser from '@rollup/plugin-terser'
import typescript from "@rollup/plugin-typescript"

export default {
    input: ['./src/index.ts'],
    output: [
        {
            file: './build/index.esm.js',
            format: "esm",
        },
        {
            file: './build/index.cjs.js',
            format: "cjs",
        },
        {
            file: './build/index.min.js',
            name: 'StyleValidator',
            format: 'iife',
            plugins: [
                terser()
            ]
        }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            outputToFilesystem: false,
        })
    ],
    watch: true,
}