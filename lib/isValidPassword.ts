export async function isValidPassword(password: string){
    return (await hashedPasswordFunction(password)) === process.env.PASSWORD
}

export async function hashedPasswordFunction(password: string) {
    const arrayBuffer = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(password))

    return Buffer.from(arrayBuffer).toString("base64")
}