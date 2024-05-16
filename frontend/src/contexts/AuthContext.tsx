import {createContext, FC, useState} from "react";
import {AuthContextType, AuthProviderProps} from "./types.ts";
import { login as loginService } from "../service/Auth.ts";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<AuthProviderProps>= ({children}) => {
    const localStorageToken = localStorage.getItem('token');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(localStorageToken !== null);


    const login = (email: string, password: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            loginService(email, password).then(r => {
                setIsAuthenticated(true);
                localStorage.setItem('token', r.token);
                resolve();
            }).catch(() => {
                setIsAuthenticated(false);
                reject();
            })
        });
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;