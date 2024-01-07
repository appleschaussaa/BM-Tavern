import * as React from "react";
import { Typography, Box } from "@mui/material";
import MyComponents from "../../components/Reusable/Gmap";

const Section2 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // height: "100%",
            }}
        >
            <Typography variant="h3" component="h3" sx={{}}>
                Section 2 - Location, map and hours
            </Typography>
            <MyComponents sx={{}} />
        </Box>
    );
};

export default Section2;
