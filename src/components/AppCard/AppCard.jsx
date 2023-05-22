//css
import './AppCard.css'

//components
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { Box, Divider } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

export default function AppCard( {productImg}) {
    return (
        <>

            <Card sx={{
                maxWidth: 300,
                borderRadius: "8px",
                transition: "0.15s",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, #0e5895 0px 0px 0px 2px, rgba(60, 64, 67, 0.3) 0px 2px 6px 2px",
                }
            }}>
                <Box
                    sx={{
                        px: 1,
                        pt: 0.5,

                    }}
                    textAlign={"right"}
                >
                    <IconButton color="primary">
                        <FavoriteIcon size="large" />
                    </IconButton>
                </Box>
                <Typography
                    component={Link}
                    to="/product-details"
                    sx={{
                        textDecoration: "none"
                    }}>
                    <CardMedia
                        component="img"
                        sx={{
                            // width: { xs: 200, sm: 200, md: 200, lg: 180 },
                            width: "60%",
                            mx: "auto", px: 1,
                        }}
                        image={productImg}
                        // image="\imgs\products\Product_01.png"
                        // image="\imgs\User_Profile_Img_01.png"
                        alt="Product_01.png"
                    />
                    <Divider sx={{ py: 0.5 }} />
                    <CardContent
                        sx={{ px: 2, pb: 1 }}
                        className="cardContent-style"
                    >
                        <Typography
                            // variant="h6"
                            color="primary"
                            sx={{
                                textAlign: { xs: "center", sm: "center", md: "center" },
                                fontSize: "12px",
                            }}
                        // className=''
                        >"NOMBRE PUBLICADOR"
                        </Typography>
                        <Typography
                            variant="h5"
                            color="secondary"
                            sx={{
                                fontWeight: "bold",
                                textAlign: { xs: "center", sm: "center", md: "center" },
                                fontSize: "22px"
                            }}
                        // className=''
                        >"NOMBRE PRODUCTO"
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
                                mb: "5px",
                            }}
                            className="cardProductInfo-style"
                        >Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing.
                        </Typography>
                        <Typography
                            variant="h5"
                            color="primary"
                            sx={{
                                fontWeight: "bold",
                                textAlign: { xs: "center", sm: "center", md: "center" },
                                fontSize: "30px"
                            }}
                        // className=''
                        >$ 9.990
                        </Typography>
                    </CardContent>
                </Typography>
            </Card>
        </>
    )
}