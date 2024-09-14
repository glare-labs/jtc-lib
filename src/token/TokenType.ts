
export type TokenType = 'style' | 'property'

export type WrappedTokenType<TokenTypeGeneric extends TokenType, DataTypeGeneric> = {
    type: TokenTypeGeneric
    data: DataTypeGeneric
}

export type WrappedStyleTokenType = WrappedTokenType<'style', Record<string, string>>
export type WrappedPropertyTokenType = WrappedTokenType<'style', PropertyDefinition>