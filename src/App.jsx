// import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/Theme";
import HomePage from "./pages/HomePage";
import Footer from "./components/Navigation/Footer";
import ResponsiveAppBar from "./components/Navigation/Header";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Box
                    sx={{
                        border: "1px solid black",
                        minHeight: "100%",
                        minWidth: "100%",
                    }}
                >
                    <Grid
                        container
                        sx={{
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Grid xs={12}>
                            <ResponsiveAppBar />
                        </Grid>
                        <Grid xs={12}>
                            <HomePage />
                        </Grid>
                        <Grid xs={12}>
                            <Footer />
                        </Grid>
                    </Grid>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
