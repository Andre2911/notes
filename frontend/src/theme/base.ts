import {Theme} from "@mui/material";
import {LightTheme} from "./schemes/LightTheme.ts";
import {DarkTheme} from "./schemes/DarkTheme.ts";

export function themeCreator(theme: string): Theme {
    return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
    LightTheme,
    DarkTheme
};
