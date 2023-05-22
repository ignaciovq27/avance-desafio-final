//css
import "./AppProductDetails.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
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

export default function AppProductDetails() {

    const pollo = "( °)> "
    const [count, setCount] = useState(0)

    return (
        <>
            <Card
                elevation={5}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "50px",
                    mb: "40px",
                    maxWidth: { xs: "330px", sm: "600px", md: "940px", lg: "980px" },
                    borderRadius: "20px",
                }}

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
                                sx={{ width: { xs: 260, sm: 300, md: 360, lg: 400 }, mx: "auto" }}
                                image="\imgs\products\Product_01.png"
                                alt="Product_01.png"
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
                            }}
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
                                >"NOMBRE PUBLICADOR"
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
                                >"NOMBRE PRODUCTO"
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
                                    }}
                                // className=''
                                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil beatae ipsum assumenda reprehenderit dolorem porro minus doloremque recusandae nesciunt odio cupiditate eum ullam itaque quos similique accusantium sint, nisi maxime!
                                </Typography>
                                <Typography
                                    // variant="h6"
                                    color="secondary"
                                    // className=''
                                    sx={{
                                        textAlign: { xs: "center", sm: "left", md: "left" }
                                    }}
                                >DISPONIBLES: 0
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
                                        color="secondary"
                                        sx={{
                                            textAlign: "justify",
                                            textJustify: "initial",
                                            // mt: "20px",
                                            // mb: "20px",
                                            fontWeight: "600",
                                            fontSize: "32px"
                                        }}
                                    // className=''
                                    >$9.990
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
                                            disabled
                                            endIcon={<FavoriteBorderIcon color="white" className="iconInfo-style" />}>
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
                                        <Button variant="contained" onClick={() => setCount((count) => count - 1)}>
                                            <RemoveIcon />
                                        </Button>
                                        <Typography
                                            variant="h5"
                                            color="secondary"
                                            sx={{
                                                // mt: "20px",
                                                mx: "20px",
                                                fontWeight: "bold",
                                            }}
                                        // className=''
                                        >{count}
                                        </Typography>

                                        <Button
                                            sx={{
                                                // mt: 3,
                                                // mb: 1,
                                                // py: 1,
                                                // px: 0.5,
                                                // mx: 3,
                                            }}
                                            variant="contained" onClick={() => setCount((count) => count + 1)}>
                                            <AddIcon />
                                        </Button>
                                    </Box>
                                    <Box
                                    // flexGrow={1}
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
                                            // fullWidth
                                            sx={{
                                                mt: { xs: 2, sm: 0, md: 0 },
                                                // mt: 3,
                                                // mb: 1,
                                                py: 1,
                                                // mx: 3,
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