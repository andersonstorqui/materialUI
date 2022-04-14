import Container from '@mui/material/Container';
import { red, yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";


import { Header } from '../partials/Header/Header'
import { useAuth } from '../state/auth';



const theme = createTheme({
    palette: {
        primary: {
            main: red[900],
        },
        secondary: {
            main: yellow[900],
        },
    },
});


export const Default = ({ children }) => {
    const [user] = useAuth()
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header user={user} />
            </ThemeProvider>
            <Container maxWidth="sm" sx={{ padding: "15px 0px" }} >
                {children}
            </Container>
        </>
    )
}

