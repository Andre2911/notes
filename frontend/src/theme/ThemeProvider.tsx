import {createContext, FC, useState} from "react";
import {themeCreator} from "./base.ts";
import {ThemeProvider as MuiThemeProvider} from "@mui/material/styles";

type ThemeProviderProps = {
    children: React.ReactNode;
}

export type ThemeContextType = {
    themeName: string;
    setThemeName: (name: string) => void;
};

export const ThemeContext  = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const curThemeName = localStorage.getItem('appTheme') || 'DarkTheme';
    const [themeName, _setThemeName] = useState<string>(curThemeName);
    const theme = themeCreator(themeName);

    const setThemeName = (themeName: string) => {
        localStorage.setItem('appTheme', themeName);
        _setThemeName(themeName);
    };

    return (
        <ThemeContext.Provider value={{setThemeName, themeName}}>
            <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;