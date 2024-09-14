import type { WrappedTokenType } from "src/token/TokenType"

export const createProperty = (value: PropertyDefinition): WrappedTokenType<'property', PropertyDefinition> => {
    return ({
        type: 'property',
        data: {
            syntax: '*',
            initialValue: '',
            ...value,
        } as PropertyDefinition
    })
}