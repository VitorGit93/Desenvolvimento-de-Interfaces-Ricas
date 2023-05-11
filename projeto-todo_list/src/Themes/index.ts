import { createTheme } from "@mui/material/styles";
import { blue, green } from "@mui/material/colors";

const customPalette = {
  primary: {
    main: blue[500],
  },
  secondary: {
    main: green[500],
  },
  error: {
    main: "#ed213a",
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...customPalette,
  },
});
