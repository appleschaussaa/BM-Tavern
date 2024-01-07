import * as React from "react";
import { Typography, Box } from "@mui/material";
import SwipeableTextMobileStepper from "../../components/Reusable/CardGridList";

const Section3 = () => {
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
            <Typography variant="h3" component="h3" sx={{ flexGrow: 1 , justifyContent: "center", }}>
                Section 3 - Products
            </Typography>
            <SwipeableTextMobileStepper />
        </Box>
    );
};

export default Section3;