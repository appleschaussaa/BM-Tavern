import * as React from "react";
import {
    // Grid,
    Typography,
    Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MyComponents from "../components/Reusable/Gmap";
import SwipeableTextMobileStepper from "../components/Reusable/CardGridList";
import HuskiesBackground from "../images/huskies-logo.jpg";
// import OakBarBackground from "../images/wood-background.jpg"
import SignInSide from "../components/User/SignIn";
import Section1 from "./sectionComponents/section1";
import Section2 from "./sectionComponents/section2";
import Section3 from "./sectionComponents/section3";
import Section4 from "./sectionComponents/section4";
import Section5 from "./sectionComponents/section5";
import Section6 from "./sectionComponents/section6";

const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                // spacing={1}
            >
                <Grid
                    xs={8}
                    // rowHeight={1}
                    sx={{ justifyContent: "center", border: "1px solid black" }}
                >
                    <Section1 />
                </Grid>
                <Grid
                    xs={4}
                    sx={{ justifyContent: "center", border: "1px solid red" }}
                >
                    <Section2 />
                </Grid>
                <Grid
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid black" }}
                    // height={323}
                    // disableEqualOverflow
                >
                    <Section3 />
                </Grid>
            </Grid>
            <Grid container columnSpacing={{ xs: 1 }} sx={{ mt: 2 }}>
                <Grid
                    xs={12}
                    sx={{
                        justifyContent: "center",
                        // height: "400px",
                        border: "1px solid black",
                        // backgroundImage: `url(${HuskiesBackground})`,
                        // backgroundSize: 'cover',
                        // backgroundRepeat: 'no-repeat',
                        // backgroundPosition: 'center',
                    }}
                >
                    <Section4 />
                </Grid>
                <Grid
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid red" }}
                >
                    <Section5 />
                </Grid>
                <Grid
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid black" }}
                >
                    <Section6 />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
