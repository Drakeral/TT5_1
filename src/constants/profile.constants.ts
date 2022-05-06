export interface ILoginProps {
    email: string,
    password: string
}

export const loginForm: ILoginProps = {
    email: '',
    password: ''
}

export interface AuthContextObj {
    token: string | null | undefined,
    isLoggedIn: boolean,
    login: (token: string, expirationTime: any) => void,
    logout: () => void
};

export interface INameProps {
    budget: number,
    name: string,
    description: string
}

export const objectNameForm: INameProps = {
    budget: 0,
    name: "",
    description: ""
}