import type { TokenType, WrappedTokenType } from "src/token/TokenType"

export const excludeByRecordName = (tokens: Record<string, WrappedTokenType<TokenType, unknown>>, unsupportedTokenArray: Array<keyof typeof tokens | {}>): Record<string, WrappedTokenType<TokenType, unknown>> => {
    const newRecord = {} as Record<string, WrappedTokenType<TokenType, unknown>>

    for(const [name, value] of Object.entries(tokens)) {
        if(unsupportedTokenArray.includes(name)) {
            continue
        }
        newRecord[name] = value
    }

    return newRecord
}
