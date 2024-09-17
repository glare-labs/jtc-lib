export const validate = <TokenRecordType>(properties: Record<keyof TokenRecordType, PropertyDefinition>, customProperties: Record<string, PropertyDefinition>, unsupportedPropertyArray: Array<(keyof TokenRecordType) | {}>): Record<string, PropertyDefinition> => {
    const newProperties = {} as Record<string, PropertyDefinition>
    for (const [name, value] of Object.entries<PropertyDefinition>(properties)) {
        if (unsupportedPropertyArray.includes(name)) {
            continue
        }
        if (Object.hasOwn(customProperties, name)) {
            newProperties[name] = customProperties[name]
            continue
        }
        newProperties[name] = value
    }
    return newProperties
}