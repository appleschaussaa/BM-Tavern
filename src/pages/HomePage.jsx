// import * as React from "react";
import {
    // Grid,
    Typography,
    Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MyComponents from "../components/Reusable/Gmap";
import SwipeableTextMobileStepper from "../components/Reusable/CardGridList";

const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1,  }}>
            <Grid container 
            // spacing={1}
            >
                <Grid
                    
                    xs={7}
                    sx={{ justifyContent: "center", border: "1px solid black" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h3" component="h3" sx={{  }}>
                            Section 1 - About/Story, mission and location
                        </Typography>
                        <Typography variant="h6" component="h3" sx={{ width: "80%"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas eos ex nulla fugiat a modi error saepe adipisci harum molestias dolorem non, neque, natus atque ullam laudantium soluta consectetur!
                            Voluptatem mollitia nihil quidem? Quas distinctio perspiciatis, dolorem nesciunt architecto culpa eos. Consequuntur necessitatibus, dignissimos corporis pariatur facere saepe expedita nostrum iusto velit. Corrupti ut neque voluptas veritatis expedita hic.
                            Porro similique in accusantium rerum nam eligendi laborum repudiandae at odio exercitationem. Reprehenderit dolorum eaque, temporibus id minus atque laborum suscipit, nihil veritatis consectetur doloremque doloribus accusantium error delectus aut.
                            Itaque modi odio molestias perspiciatis deserunt ut eveniet. Veniam, eveniet. Eligendi cum voluptates ipsam impedit veniam, aliquam dicta nobis, debitis saepe excepturi similique ad neque alias, facere obcaecati itaque non!
                            Vero velit possimus deleniti aliquam sapiente quasi perspiciatis magni ipsa at, nisi animi maxime aliquid, unde pariatur illum rerum odio id non mollitia amet recusandae odit. Vero quis doloribus rerum!
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    
                    xs={5}
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
                        <Typography variant="h3" component="h3" sx={{}}>
                            Section 2 - Location, map and hours
                        </Typography>
                        <MyComponents />
                    </Box>
                </Grid>
                <Grid
                    
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
                        <Typography variant="h3" component="h3" sx={{}}>
                            Section 3 - Products
                        </Typography>
                        <SwipeableTextMobileStepper />
                    </Box>
                </Grid>
            </Grid>
            <Grid container columnSpacing={{ xs: 1 }} sx={{ mt: 2 }}>
                <Grid
                    
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
                        <Typography variant="h3" component="h3" sx={{}}>
                            Section 4 - Events/party hour/etc
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    
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
                        <Typography variant="h3" component="h3" sx={{}}>
                            Section 5 - Contact
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    
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
                        <Typography variant="h3" component="h3" sx={{}}>
                            Section 6 - TBD
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
