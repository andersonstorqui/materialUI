import Container from '@mui/material/Container';
import { red, yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";






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


export const Clean = ({ Component }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
            </ThemeProvider>
            <Container maxWidth="sm" sx={{ padding: "15px 0px" }} >
                <Component />
            </Container>
        </>
    )
}

