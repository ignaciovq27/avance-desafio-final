//css
import "./AppProductDetails.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';

import { Box, Chip, IconButton, InputAdornment, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AppImg from "../AppImg/AppImg";
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

export default function AppProductDetails({
    productId,
    productUser,
    productTitle,
    productCategory,
    productPrice,
    productImg,
    productDescription,
    productQuantity,
    onClickFavourite,
    favouriteIconShow
}) {
    const { user } = useContext(ContextUser);
    const [count, setCount] = useState(0);

    const productMaxQuantity = parseInt(productQuantity)

    const handleIncrement = () => {
        setCount((prevCount) => Math.min(prevCount + 1, productMaxQuantity));
    };

    const handleDecrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
    };

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
            >✧ DETALLE DE PRODUCTO ✧
            </Typography>
            <Card
                elevation={5}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "10px",
                    mb: "40px",
                    maxWidth: { xs: "330px", sm: "600px", md: "940px", lg: "1040px" },
                    borderRadius: "20px",
                }}
                key={productId}

            >
                <CardContent
                    className="productDetailsCard-style"
                >

                    <Grid container
                        spacing={3}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            sx={{
                                display: "flex",
                            }}
                            justifyContent={"center"}
                            alignItems={"center"}
                            alignContent={"center"}

                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    width: { xs: 260, sm: 300, md: 360, lg: 400 }, mx: "auto",
                                    mr: { xs: 0, sm: 0, md: 5, lg: 5 },
                                    ml: { xs: 0, sm: 0, md: 0, lg: 0 },
                                }}
                                image={productImg}
                                alt="Product_img.png"
                                className="productDetailsImg-style"
                            />
                        </Grid >

                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}

                            sx={{
                                px: { xs: 'none', sm: '0px', md: "5px" },
                                display: "flex",
                            }}
                            justifyContent={"center"}
                            alignItems={"center"}
                            alignContent={"center"}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    // my: "20px",
                                    // mb: "20px",
                                    // pb: "20px",
                                    // mx: "10px",
                                    // m: "auto",
                                    maxWidth: { xs: "300px", sm: "500px", md: "940px", lg: "980px" },

                                }}
                                alignItems={"space-between"}
                            >
                                <Typography
                                    // variant="h6"
                                    color="primary"
                                    sx={{
                                        textAlign: { xs: "center", sm: "left", md: "left" }
                                    }}
                                // className=''
                                >Publicado por: {productUser}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="secondary"
                                    sx={{
                                        // textAlign: "justify",
                                        // textJustify: "initial",
                                        // mt: "20px",
                                        // mb: "20px",
                                        fontWeight: "bold",
                                        textAlign: { xs: "center", sm: "left", md: "left" }
                                    }}
                                // className=''
                                >{productTitle}
                                </Typography>
                                <hr className="hr-style3" />
                                <Typography
                                    disabled={false}
                                    // variant="h6"
                                    color="secondary"
                                    sx={{
                                        // textAlign: "left",
                                        // mt: "5px",
                                        textAlign: { xs: "center", sm: "left", md: "left" }

                                    }}
                                // className=''
                                >DESCRIPCIÓN:
                                </Typography>
                                <Typography
                                    disabled={false}
                                    // variant="h5"
                                    color="secondary"
                                    sx={{
                                        textAlign: "justify",
                                        textJustify: "initial",
                                        // mt: "20px",
                                        mt: "5px",
                                        mb: "15px",
                                        minWidth: "240px",
                                    }}

                                    className="productDetailsDescription-style"
                                >{productDescription}
                                </Typography>
                                <Typography
                                    // variant="h6"
                                    color="secondary"
                                    // className=''
                                    sx={{
                                        textAlign: { xs: "center", sm: "left", md: "left" }
                                    }}
                                >DISPONIBLES: {productQuantity}
                                </Typography>

                                <Box
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                                        display: "flex",
                                        flexDirection: { xs: "column", sm: "row", md: "row" },
                                        // flexDirection: "row",
                                        // my: "20px",
                                        // mb: "20px",
                                        // pb: "20px",
                                        // mx: "10px",
                                        // m: "auto",
                                    }}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                    textAlign={"center"}
                                >

                                    <Typography
                                        disabled={false}
                                        variant="h5"
                                        color="primary"
                                        // color="secondary"
                                        sx={{
                                            textAlign: "justify",
                                            textJustify: "initial",
                                            // mt: "20px",
                                            // mb: "20px",
                                            fontWeight: "600",
                                            fontSize: "32px"
                                        }}
                                    // className=''
                                    >{productPrice}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            // flexDirection: "row",
                                            // my: "20px",
                                            // mb: "20px",
                                            // pb: "10px",
                                            // mx: "10px",
                                            // m: "auto",
                                        }}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        textAlign={"center"}
                                    >
                                        <Button
                                            className="link-style2"
                                            disabled={!user}
                                            onClick={onClickFavourite}
                                            endIcon={favouriteIconShow}>
                                            {/* endIcon={<FavoriteBorderIcon color="white" className="iconInfo-style" />}> */}
                                            GUARDAR EN FAVORITOS
                                        </Button>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", sm: "row", md: "row" },
                                        pt: "10px"
                                    }}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                    textAlign={"center"}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",

                                        }}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        textAlign={"center"}
                                    >
                                        <Button
                                            variant="contained"
                                            onClick={handleDecrement}
                                            sx={{
                                                minWidth: "40px",
                                            }}
                                        >
                                            <RemoveIcon />
                                        </Button>
                                        <Typography
                                            variant="h5"
                                            color="secondary"
                                            sx={{
                                                // mt: "20px",
                                                mx: "10px",
                                                fontWeight: "bold",
                                                minWidth: { xs: "50px", sm: "50px", md: "50px", lg: "50px" },
                                            }}
                                        // className=''
                                        >{count}
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            onClick={handleIncrement}
                                            sx={{
                                                minWidth: "40px",
                                            }}
                                        >
                                            <AddIcon />
                                        </Button>
                                    </Box>
                                    <Box
                                    >
                                        <Button
                                            // component={Link}
                                            // to="/user-favourites"
                                            variant="contained"
                                            // color="primary"
                                            color="warning"
                                            startIcon={<AddShoppingCartIcon
                                                color="white"
                                                className="iconInfo-style" />}
                                            size="small"
                                            disabled={count <= 0 ? true : false}
                                            // fullWidth
                                            sx={{
                                                mt: { xs: 2, sm: 0, md: 0 },
                                                // mt: 3,
                                                ml: { xs: 0, sm: 1, md: 1 },
                                                // mx: 3,
                                                py: 1.5,
                                                width: "200px",
                                            }}
                                        >AÑADIR AL CARRITO
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid >
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}