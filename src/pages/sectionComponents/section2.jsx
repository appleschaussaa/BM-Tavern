import * as React from "react";
import { Typography, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MyComponents from "../../components/Reusable/Gmap";

const Section2 = () => {
    return (
        <Grid
            container
            // spacing={1}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // height: "100%",
            }}
        >
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "100%",
                }}
            >
                <Grid md={12}>
                    <Typography variant="h4" sx={{}}>
                        Section 2 - Location, map and hours
                    </Typography>
                </Grid>
                <Grid md={10}>
                    <MyComponents sx={{ width: "50%", height: "50%" }} />
                </Grid>
            </Card>
        </Grid>
    );
};

export default Section2;
