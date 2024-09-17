/**
 * It is specially optimized for css selectors.
 */
export const toKebabCase = (
    str: string,
    options?: Partial<{
        keepNumber: boolean,
        keptCharArray: Array<string>,
        replacedCharArray: Array<string>,
        skippedCharArray: Array<string>,
    }>
): string => {
    const keptCharArray: Array<string> = options?.keptCharArray ?? []
    const replacedCharArray: Array<string> = options?.replacedCharArray ?? []
    const skippedCharArray: Array<string> = options?.skippedCharArray ?? []

    if (options?.keepNumber ?? true) {
        keptCharArray.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
    }

    replacedCharArray.push('_')

    return removeConsecutiveByCharArray(removeAllWhitespace(str
        .split('')
        .map((letter, idx) => {
            if (letter === '-') return '-'
            if (replacedCharArray.includes(letter)) return '-'
            if (keptCharArray.includes(letter)) return letter
            if (skippedCharArray.includes(letter)) return ''

            if (letter.toUpperCase() === letter) {
                return `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
            }
            return letter
        })
        .join('')), ['-']);
}

export const removeConsecutiveByCharArray = (from: string, excludedCharArray: Array<string>): string => {
    return from.split('').reduce((pre, cur) => `${pre}${(pre[pre.length - 1] === cur) && excludedCharArray.includes(cur) ? '' : cur}`)
}

export const removeAllWhitespace = (str: string): string => {
    return str.replace(/\s+/g, '');
}