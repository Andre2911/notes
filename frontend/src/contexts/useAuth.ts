import {AuthContextType} from "./types.ts";
import {useContext} from "react";
import AuthContext from "./AuthContext.tsx";

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};