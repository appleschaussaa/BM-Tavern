import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    //   fontSize:
                },
            },
        },
    },
    typography: {
        fontFamily: ["Roboto Slab"].join(","),
        // h3: {
        //     fontSize: "1.2rem",
        //     "@media (min-width:600px)": {
        //         fontSize: "1.5rem",
        //     },
        //     [theme.breakpoints.up("md")]: {
        //         fontSize: "2.4rem",
        //     },
        // },
    },
    // palette: {
        //  foresst green, white and brick brown
        primary: {
            // Husky Purple
            main: "#39275B",
            // Husky Gold
            secondary: "#C79900",
            light: "",
        },
        background: {
            paper: "",
            default: "",
            main: "",
            secondary: "",
            test: "",
        },
        boxBackground: {
            // paper: "#fea82f",
            default: "",
            main: "",
            test: "",
        },
        text: {
            main: "",
            primary: "",
            secondary: "",
            disabled: "",
        },
    // },
});

export default theme;
