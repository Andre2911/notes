import {ReactNode} from "react";

export type AuthContextType = {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
};


export type AuthProviderProps = {
    children: ReactNode;
};
