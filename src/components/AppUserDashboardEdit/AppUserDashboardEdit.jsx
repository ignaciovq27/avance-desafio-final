//css
import "./AppUserDashboardEdit.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { Box, FormControl, IconButton, Typography, MenuItem } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';
import CategoryIcon from '@mui/icons-material/Category';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import AppImg from "../AppImg/AppImg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import SortIcon from '@mui/icons-material/Sort';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import AppButtonUpload from "../AppButtonUpload/AppButtonUpload";

export default function AppUserDashboardEdit() {

    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState(["JUEGOS DE MESA", "ACCESORIOS"]);
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");

    // const [searchOrder, setsearchOrder] = (0);
    // const [searchOrder, setsearchOrder] = useState(0);

    // const handleChange = (event) => {
    //     setsearchOrder(event.target.value);
    // };

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("Submit")
        console.log(productName)
        console.log(productCategory)
        console.log(productPrice)
        console.log(productDescription)
    }

    return (
        <>
            <Typography
                disabled={false}
                variant="h4"
                color="primary"
                sx={{
                    textAlign: "center",
                    py: "20px",
                    fontSize: { xs: "26px", sm: "30px", md: "34px" }
                }}
            // className=''
            >✧ CREAR PUBLICACIÓN ✧
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
                    maxWidth: { xs: "330px", sm: "600px", md: "880px", lg: "1040px" },
                    borderRadius: "20px",
                }}
                className="userCard-style"
            >
                <CardContent
                    sx={{
                        m: "0", p: "0",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="secondary"
                        // className=''
                        sx={{
                            pt: "30px",
                            pb: "10px",
                        }}
                    >REGISTRA LOS DATOS DE LA PUBLICACIÓN:
                    </Typography>

                    <Grid container
                        spacing={3}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                        sx={{
                            mb: { xs: 0, sm: 3, md: 2, lg: 3 }
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            // sm={6}
                            md={8}
                            sx={{
                                // pl: { xs: 'none', sm: '0px', md: "0px", lg: "30px" },
                                display: "flex",
                            }}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: { sx: "10ch", sm: "30ch", md: "40ch" } },
                                    display: "flex",
                                    // display: { md: 'flex' },
                                    my: "20px",
                                }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                textAlign={"center"}
                            >
                                <div>
                                    <div className="divTextField-style">
                                        <LabelIcon
                                            color="primary"
                                            sx={{ my: 0.5 }} />
                                        <TextField
                                            id="productName"
                                            label="NOMBRE DEL PRODUCTO"
                                            type="text"
                                            variant="outlined"
                                            required
                                            // disabled
                                            // helperText="Ingresa un nombre de usuario valido."
                                            error={false}
                                            value={productName}
                                            // defaultValue={userName}
                                            onChange={(e) => setProductName(e.target.value)}
                                            color="primary"
                                        // placeholder=""
                                        />
                                    </div>
                                    
                                    <div className="divTextField-style">
                                        <CategoryIcon
                                            color="primary"
                                            sx={{ my: 0.5 }} />
                                        <TextField
                                            sx={{ minWidth: "220px" }}
                                            value={0}
                                            label="CATEGORÍA"
                                            required
                                            error={false}
                                            select
                                            // onChange={handleChange}
                                            onChange={(e) => setProductCategory(e.target.value)}
                                        >
                                            <MenuItem value={0}>JUEGOS DE MESA</MenuItem>
                                            <MenuItem value={1} disabled>ACCESORIOS</MenuItem>

                                        </TextField>
                                        {/* <FormHelperText>Without label</FormHelperText> */}
                                    </div>


                                    <div className="divTextField-style">
                                        <MonetizationOnIcon
                                            color="primary"
                                            sx={{ my: 0.5 }} />
                                        <TextField
                                            sx={{ maxWidth: { xs: "220px", sm: "270px", md: "400px" } }}
                                            id="productPrice"
                                            label="PRECIO"
                                            type="number"
                                            variant="outlined"
                                            required
                                            // disabled
                                            // helperText="Ingresa un nombre de usuario valido."
                                            error={false}
                                            value={productPrice}
                                            onChange={(e) => setProductPrice(e.target.value)}
                                            color="primary"
                                            placeholder="9.990"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </div>

                                    <div className="divTextField-style">
                                        <DescriptionIcon
                                            color="primary"
                                            sx={{ mb: 9, }}
                                        />
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="DESCRIPCIÓN"
                                            type="text"
                                            variant="outlined"
                                            required
                                            // disabled
                                            // helperText="Ingresa un nombre de usuario valido."
                                            error={false}
                                            value={productDescription}
                                            // defaultValue={userName}
                                            onChange={(e) => setProductDescription(e.target.value)}
                                            color="primary"
                                            multiline
                                            rows={4}
                                        // placeholder=""
                                        // minRows={4}
                                        // maxRows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </div>

                                </div>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            // sm={6}
                            md={4}
                            sx={{
                                // pl: { xs: 'none', sm: '0px', md: "0px", lg: "30px" },
                                display: "flex",
                            }}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    // display: { md: 'flex' },
                                    mb: { xs: "40px", sm: "40px", md: "0px", lg: 0 },

                                }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                textAlign={"center"}
                            >
                                <Typography
                                    // variant="h4"
                                    color="secondary"
                                    // className=''
                                    sx={{
                                        minWidth: "250px"
                                    }}
                                >IMAGEN DEL PRODUCTO:
                                </Typography>
                                <AppImg
                                    src="\imgs\User_Profile_Img_00.png"
                                    alt="User_Profile_Img_00.png"
                                    width="140px"
                                    imgClass="userProfileImg2-style"
                                />
                                <AppButtonUpload />
                            </Box>
                        </Grid>
                    </Grid>

                    <hr className="hr-style4" />

                    <Box
                        sx={{
                            // display: "flex",
                            // display: { md: 'flex' },
                            mb: { xs: 2, sm: 2, md: 2, lg: 2 },
                        }}>


                        <Button
                            component={Link}
                            to="/user-dashboard"
                            variant="contained"
                            size="small"
                            color="secondary"
                            sx={{
                                mt: 1,
                                mb: 1,
                                py: 1.5,
                                mx: 3,
                                width: "160px",
                            }}
                            startIcon={<ArrowBackIcon />}>CANCELAR
                        </Button>
                        <Button
                            component={Link}
                            to="/user-dashboard"
                            variant="contained"
                            size="small"
                            color="warning"
                            sx={{
                                mt: 1,
                                mb: 1,
                                py: 1.5,
                                mx: 3,
                                width: "160px",
                            }}
                            endIcon={<CheckIcon />}>CONFIRMAR
                        </Button>
                    </Box>
                </CardContent>
            </Card>

        </>
    );
}