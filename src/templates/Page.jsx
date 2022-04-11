import { Typography } from "@mui/material";
import { red, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";






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


export const Page = ({ title, Component }) => {
    return (
        <>
            <Typography variant="h3" >
                {title}
            </Typography>
            <Component />
        </>
    )
}

