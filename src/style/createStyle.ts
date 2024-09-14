import type { WrappedTokenType } from "src/token/TokenType"

export const createStyle = (cssProp: string, value: string): WrappedTokenType<'style', Record<string, string>> => {
    return ({
        type: 'style',
        data: {
            [cssProp]: value
        }
    })
}