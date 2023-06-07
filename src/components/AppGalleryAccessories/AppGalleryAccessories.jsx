//css
import "./AppGalleryAccessories.css"

//components
import { useState } from "react";
import { useContext } from "react";
import { ContextProduct } from '../../context/ProductContext';
import { ContextFavourite } from '../../context/FavouriteContext';


import { Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import AppCardProduct from "../AppCardProduct/AppCardProduct";
import AppFilters from "../AppFilters/AppFilters";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function AppGalleryAccessories() {
    const { accessories } = useContext(ContextProduct);
    const { favourites, addFavourites, deleteFavourites } = useContext(ContextFavourite);
    const [searchText, setSearchText] = useState("")

    const [sortOrder, setSortOrder] = useState(0)
    const [searchOrder, setsearchOrder] = useState(0);
    // console.log(sortOrder)
    console.log(accessories)


    // function handleToggleIsFavourite(product) {
    //     setIsFavourite(prevIsFavourite => !prevIsFavourite);
    //     const likeStatus = product.fav
    //     if (likeStatus) {
    //         product.fav = true
    //         addFavourites(product)
    //         console.log("AGREGADO A FAV")
    //         //   setPhotos([...photos])
    //     }
    //     else {
    //         product.fav = false
    //         console.log("ELIMINADO DE FAV")
    //         //   setPhotos([...photos])
    //     }
    // }

    const handleOnChange = (event) => {
        setsearchOrder(event.target.value);
        if (event.target.value === 0) {
            setSortOrder(0);
            console.log("sort 0");
        }
        if (event.target.value === 1) {
            setSortOrder(1);
            console.log("sort 1");
            // console.log(sortOrder);
        }
        if (event.target.value === 2) {
            setSortOrder(2);
            console.log("sort 2");
            // console.log(sortOrder);
        }
        if (event.target.value === 3) {
            setSortOrder(3);
            console.log("sort 3");
            // console.log(sortOrder);
        }
    }

    function logicOrder(a, b) {
        if (sortOrder === 0) {
            return sortByTitle(a, b);
        }

        if (sortOrder === 1) {
            return sortByTitle(b, a);
        }

        if (sortOrder === 2) {
            return sortByPrice(a, b);
        }

        if (sortOrder === 3) {
            return sortByPrice(b, a);
        }
        // return 0;
    }

    function sortByTitle(a, b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        // return 0;
    }

    function sortByPrice(a, b) {
        if (a.price < b.price) {
            return -1
        }
        if (a.price > b.price) {
            return 1
        }
        // return 0;
    }

    return (
        <>
            <Typography
                disabled={false}
                variant="h4"
                color="primary"
                sx={{
                    textAlign: "center",
                    pt: "20px",
                    pb: "20px",
                    fontSize: { xs: "28px", sm: "30px", md: "34px" }
                }}
            // className=''
            >✧ ACCESORIOS ✧
            </Typography>

            <AppFilters
                infoText="PUBLICACIONES: "
                infoTextLength={accessories.length}
                searchTextNav={searchText}
                setSearchTextNav={setSearchText}
                handleOnChangeSort={handleOnChange}
                searchOrderSort={searchOrder}
            />

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
                        {accessories
                            .sort((a, b) => logicOrder(a, b))
                            .filter((accessorie) => accessorie.title.toUpperCase().includes(searchText.toUpperCase().trim()))
                            .map((accessorie, i) => {
                                const likeStatus = accessorie.fav;
                                return (
                                    <AppCardProduct
                                        key={accessorie.id}
                                        productId={accessorie.id}
                                        productImg={accessorie.img}
                                        productUser={accessorie.user}
                                        productTitle={accessorie.title}
                                        productPrice={accessorie.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                        productDescription={accessorie.description}
                                        toDetailProduct={`/accessorie-details/${accessorie.id}`}
                                        onClickFavourite={() => {
                                            const accessorie = accessories[i];
                                            if (accessorie.fav) {
                                                accessorie.fav = false;
                                                deleteFavourites(accessorie.id)
                                                console.log("Eliminado de Favoritos");
                                                console.log(favourites)
                                            } else {
                                                accessorie.fav = true;
                                                addFavourites(accessorie);
                                                console.log("Agregado a favoritos");
                                                console.log(favourites)
                                            }
                                        }}
                                        favouriteIconShow={likeStatus ?
                                            (<FavoriteIcon size="large" />)
                                            : (<FavoriteBorderIcon size="large" />)}
                                    />
                                )
                            })}
                    </Grid >
                </Grid>
            </Container >
        </>
    );
}