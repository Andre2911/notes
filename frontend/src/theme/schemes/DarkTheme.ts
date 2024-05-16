import {createTheme} from "@mui/material";
import '@fontsource/roboto';

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f2d161',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#212121',
            paper: '#000',
        }
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
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