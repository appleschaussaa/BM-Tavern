import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "primary.main",
                color: "white",
                height: 35,
                // width: "100%",
                // marginTop: "auto",
                bottom: 0,
                // borderTopLeftRadius: 8,
                // borderTopRightRadius: 8,
                border: 2,
                borderBottom: 0,
                borderColor: "#ffff",
            }}
        >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
                Footer
            </Typography>
        </Box>
    );
};

export default Footer;