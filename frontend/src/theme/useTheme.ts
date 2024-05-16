import {ThemeContext, ThemeContextType} from "./ThemeProvider.tsx";
import {useContext} from "react";

export const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};