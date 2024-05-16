import {createTheme} from "@mui/material";
import '@fontsource/roboto';

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#f2d161',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f2f5f9',
            paper: '#ffffff',
        }
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif'
    },
    components:  {
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: 16,
                    '& .MuiInputBase-root': {
                        borderRadius: 12,
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 12,
                    fontSize: 16,
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 24
                }
            }
        },

    }

})