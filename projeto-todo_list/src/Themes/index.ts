import {createTheme} from "@mui/material";
import {dark} from "@mui/material/styles/createPalette";

export const darkTheme = createTheme(
    {
        palette: {
            mode: "dark",
            ...dark
        }
    }
)
