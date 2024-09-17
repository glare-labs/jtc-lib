import type { WrappedPropertyTokenType, WrappedStyleTokenType, WrappedTokenType } from "src/token/TokenType";

/**
 * 
 * @example
 * ```typescript
 * cssText({
 *      textColor: {color: 'red'},
 *      bgColor: createStyle('background-color', 'black'),
 *      border: '1px solid black',
 *      [makeVar('width')]: '200px',
 *      width: wrapVar([makeVar('width')]),
 * })
 * 
 * cssText([
 *      'color: red',
 *      { border: '1px solid gray'},
 *      makeVar('height', '300px'),
 *      createStyle('background-color', 'black'),
 * ])
 * ```
 * 
 * @param tokens string | Array<string> | Array<Record<string, string>> | Array<{ type: 'style' | 'property', data: Record<string, string> }> | Record<string, string> | Record<string, { type: 'style' | 'property', data: Record<string, string> }>
 * @returns string
 */
export const cssText = (
    tokens: Record<string, WrappedStyleTokenType> | 
            Record<string, WrappedPropertyTokenType> | 
            Array<WrappedStyleTokenType> | 
            Array<WrappedPropertyTokenType> | 
            Record<string, string> |
            string
): string => {
    
    let cssText = ''

    if (typeof tokens === 'string') {
        // Don't format
        return tokens
    }

    if (typeof tokens === 'object') {
        for (const [key, value] of Object.entries(tokens)) {

            // WrappedTokenType
            if (Object.hasOwn(value, 'type') && Object.hasOwn(value, 'data')) {
                if (value.type === 'style') {
                    const [propName, propValue] = Object.entries(value.data as Record<string, string>)[0]
                    cssText += `${propName}: ${propValue};`
                } else if (value.type === 'property') {
                    cssText += `@property ${value.data.name} { initial-value: ${value.data.initialValue}; syntax: ${value.data.syntax}; inherits: ${value.data.inherits}; }`
                }

            } 
            // Non'WrappedTokenType
            else {
                if (!Array.isArray(tokens) && typeof value === 'string') {
                    cssText += (key as string)[key.length - 1] === ':' ? 'key' : `${key}: ` + (value[(value as string).length - 1] === ';' ? value : `${value};`)
                } else if (typeof value === 'string') {
                    cssText += (value[(value as string).length - 1] === ';' ? value : `${value};`)
                } else if (typeof key === 'string' && typeof value === 'object') {
                    cssText += `${Object.keys(value)}: ${Object.values(value)};`
                }

            }
        }
    }

    return cssText
}