export const required = (value) => {
    return value ? undefined : "You need to fill"
}

export const maxLengthCreator = (maxLength) => (value) => {
    return (value.length > maxLength) ? "Too much, bro" : undefined;
}