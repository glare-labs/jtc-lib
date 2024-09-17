import type { WrappedStyleTokenType } from "src/token/TokenType";

export const isStyle = (styleLike: WrappedStyleTokenType | Record<string, unknown> | any): boolean => {
    if(Object.hasOwn(styleLike, 'type') && styleLike['type'] !== undefined && styleLike['type'] !== null && styleLike['type'] === 'style' && Object.hasOwn(styleLike, 'data') && styleLike['data'] !== undefined && styleLike['data'] !== null) {
        return true
    }
    return false
}