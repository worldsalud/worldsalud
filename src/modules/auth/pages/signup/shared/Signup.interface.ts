export interface SignupInterface {
    name: string
    email: string
    password: string
    confirmPassword: string
    [key: string]: string;
}