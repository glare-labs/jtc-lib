/**
 * Converts string array to CSS variable.
 * 
 * @example
 * wrapVar('--a') -> var(--a)
 * wrapVar('--a', '--b') -> var(--a, var(--b))
 * wrapVar('--a', '--b', '--c') -> var(--a, var(--b, var(--c)))
 */
export function wrapVar(tokens: string[], defaultValue: string = ''): string {
    return tokens.map(token => `var(${token.replace(';', '')}`).join(', ') + (defaultValue !== '' ? `, ${defaultValue}` : '') + ')'.repeat(tokens.length)
}