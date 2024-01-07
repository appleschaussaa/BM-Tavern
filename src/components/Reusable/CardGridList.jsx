import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
// import OakBarBackground from "../../images/wood-background.jpg";

export default function MasonryImageList() {
    return (
        <Box
            sx={{
                width: "100%",
            }}
        >
            <ImageList
                variant="masonry"
                cols={1}
                row={2}
                gap={8}
                sx={{ display: "flex", 
                // flexWrap: "nowrap",
                px: 2,
            }}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ flex: "0 0 auto",  position: 'relative' }}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                // position: 'absolute',
                                // top: 0,
                                // left: 0,
                                width: '200px',
                                height: '250px',
                                objectFit: 'cover',
                              }}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUTBU0YCRq7hqXVLdz0AepKLh00LKbyDWoQ&usqp=CAU",
        title: "Beer",
    },
    {
        img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
        title: "Books",
    },
    {
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
        title: "Sink",
    },
    {
        img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        title: "Kitchen",
    },
    {
        img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
        title: "Blinds",
    },
    {
        img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
        title: "Chairs",
    },
    {
        img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
        title: "Laptop",
    },
    {
        img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
        title: "Doors",
    },
    {
        img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
        title: "Coffee",
    },
    {
        img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
        title: "Storage",
    },
    {
        img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
        title: "Candle",
    },
    {
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        title: "Coffee table",
    },
];
