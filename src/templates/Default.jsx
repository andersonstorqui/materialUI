import Container from '@mui/material/Container';
import { red, yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";


import { Header } from '../partials/Header/Header'




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
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
            <Container maxWidth="sm" sx={{ padding: "15px 0px" }} >
                {children}
            </Container>
        </>
    )
}

