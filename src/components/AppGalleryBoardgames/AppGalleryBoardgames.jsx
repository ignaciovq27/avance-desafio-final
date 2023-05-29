//css
import "./AppGalleryBoardgames.css"

//components
import { useState } from "react";
import { useContext } from "react";
import { ContextProduct } from '../../context/ProductContext';

import { Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import AppCardProduct from "../AppCardProduct/AppCardProduct";
import AppFilters from "../AppFilters/AppFilters";

export default function AppGalleryBoardgames() {
    const { products } = useContext(ContextProduct);

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
            >✧ JUEGOS DE MESA ✧
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
                        sx={{
                            display: "flex", flexDirection: { xs: 'column', sm: 'row' },
                            gap: 4,
                            pb: 8
                        }}
                        flexWrap={"wrap"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                    >
                        {products.map((product) => (
                            <AppCardProduct
                                key={product.id}
                                productId={product.id}
                                productImg={product.img}
                                productUser={product.user}
                                productTitle={product.title}
                                productPrice={product.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                productDescription={product.description}
                            />
                        ))}
                    </Grid >
                </Grid>
            </Container >
        </>
    );
}