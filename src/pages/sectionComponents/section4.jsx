import * as React from "react";
import { Typography, Box } from "@mui/material";

const Section4 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // height: "100%",
                // backgroundImage: `url(${HuskiesBackground})`,
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
            }}
        >
            <Typography variant="h3" component="h3" sx={{}}>
                Section 4 - Events/party hour/eventual reviews/etc
            </Typography>
        </Box>
    );
};

export default Section4;