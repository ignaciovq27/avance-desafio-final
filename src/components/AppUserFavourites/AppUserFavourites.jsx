//css
import "./AppUserFavourites.css"

//components
import { useState } from "react";
import { Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import AppCardProduct from "../AppCardProduct/AppCardProduct";
import AppFilters from "../AppFilters/AppFilters";

export default function AppUserFavourites() {

    return (
        <>
            <Typography
                disabled={false}
                variant="h4"
                color="primary"
                sx={{
                    textAlign: "center",
                    py: "20px",
                    fontSize: { xs: "28px", sm: "30px", md: "34px" }
                }}
            // className=''
            >✧ MIS FAVORITOS ✧
            </Typography>

            <AppFilters />
            <Container
                sx={{
                    m: "auto",
                    p: 3,
                    py: 4,
                    maxWidth: "1400px !important",
                }}
            >
                <Grid container
                    spacing={3}
                    textAlign={"center"}
                >
                    <Grid
                        item
                        xs={12}
                        // sm={6}
                        // md={12}
                        sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}
                        flexWrap={"wrap"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                    >
                        <AppCardProduct
                            key="1"
                            productId="1"
                            productImg="\imgs\products\Product_00.png"
                            productUser='"UserName"'
                            productTitle='"product.title"'
                            productPrice='"product.price"'
                            productDescription='"product.description"'
                        />
                    </Grid >
                </Grid>
            </Container >
        </>
    );
}