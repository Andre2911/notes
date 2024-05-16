import {Box, Button, Card, CardContent, IconButton, InputAdornment, styled, TextField, Typography} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from "react";
import {useAuth} from "../contexts/useAuth.ts";
import {Navigate} from "react-router-dom";

const BoxWrapper = styled(Box)(
    ({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.default
    })
)

export default function Login() {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('guevara@ensolvers.com');
    const [password, setPassword] = useState<string>('123456');
    const [error, setError] = useState('');
    const {login} = useAuth();
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password).catch(() => {
            setError('Invalid email or password');
        });
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) {
        return <Navigate to={'/dashboard'}/>
    }
    return (
        <BoxWrapper>
            <Card elevation={1}>
                <CardContent>
                    <form onSubmit={handleOnSubmit}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: '100%',
                            minWidth: 400,
                        }}>
                        <Typography variant={'h4'}  textAlign={'center'}>Sign in</Typography>
                        <TextField
                            label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} type={'email'}  required fullWidth/>
                        <TextField
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}  required fullWidth
                        InputProps={{
                            endAdornment: <InputAdornment position={"end"}>
                                <IconButton onClick={handleShowPassword}>
                                    {showPassword  ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                </IconButton>
                                </InputAdornment>
                        }}/>
                            {error && (
                                <Typography variant="body2" color="error" textAlign={'center'}>
                                    {error}
                                </Typography>
                            )}
                        <Button type={"submit"} variant={"contained"} fullWidth>Sign in</Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </BoxWrapper>
    )
}