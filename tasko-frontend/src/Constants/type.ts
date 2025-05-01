export type AuthType = "login" | "signup"

export type FormValues = {
    fullName?: string
    email: string
    password: string
    confirmPassword?: string
}

export type AuthFormProps = {
    auth: AuthType
}