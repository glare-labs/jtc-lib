
export function makeVar(variableName: string, defaultValue?: string): string {
    if(defaultValue) {
        return `--${variableName}: ${defaultValue};`
    }
    return `--${variableName}`
}