import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2e293a",
                color: "#C79900",
                height: 35,
                // width: "100%",
                // marginTop: "auto",
                bottom: 0,
                // borderTopLeftRadius: 8,
                // borderTopRightRadius: 8,
                border: 2,
                borderBottom: 0,
                borderColor: "#ffff",
                borderRadius: 2,
                mb: 0.5,
            }}
        >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
                Footer
            </Typography>
        </Box>
    );
};

export default Footer;