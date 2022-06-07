import { createTheme, ThemeProvider } from "@mui/material";
import HeaderBackground from "../sebbyk.jpg";

const PURPLE = "#9047FF";
const BLACK = "#1C1B1F";

const THEME = createTheme({
  palette: {
    primary: {
      main: PURPLE,
    },
    secondary: {
      main: BLACK,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          fontSize: ".875rem",
        },
      },
    },
  },
  header: {
    backgroundImage: `url(${HeaderBackground})`,
  },
});

const CustomThemeProvider = (props) => {
  const { children } = props;

  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
