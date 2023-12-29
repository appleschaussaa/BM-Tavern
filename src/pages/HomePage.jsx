// import * as React from "react";
import {
    // Grid,
    Typography,
    Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1,  }}>
            <Grid container 
            // spacing={1}
            >
                <Grid
                    item
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid black" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h1" component="h1" sx={{}}>
                            Section 1 - About/Story, mission and location
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid red", }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h1" component="h1" sx={{}}>
                            Section 2 - Products
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid black" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h1" component="h1" sx={{}}>
                            Section 3 - Events/party hour/etc
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container columnSpacing={{ xs: 1 }} sx={{ mt: 2 }}>
                <Grid
                    item
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid black", }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h1" component="h1" sx={{}}>
                            Section 4 - Contact
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid red" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h1" component="h1" sx={{}}>
                            Section 5 - TBD
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{ justifyContent: "center", border: "1px solid black" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h1" component="h1" sx={{}}>
                            Section 6 - TBD
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
