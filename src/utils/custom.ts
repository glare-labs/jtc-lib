import type { TokenType, WrappedTokenType } from "src/token/TokenType";

export const custom = <T extends Record<string, WrappedTokenType<TokenType, unknown>>> (
    tokens: T, 
    customTokens: T
): Record<string, WrappedTokenType<TokenType, unknown>> => {
    const newRecord = {} as Record<string, WrappedTokenType<TokenType, unknown>>

    for(const [name, value] of Object.entries(tokens)) {
        if(Object.hasOwn(customTokens, name)) {
            newRecord[name] = customTokens[name]
            continue
        }
        newRecord[name] = value

    }

    return newRecord
}