//css
import "./AppUserDashboardEdit.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { ContextProduct } from "../../context/ProductContext";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { Box, FormControl, IconButton, Typography, MenuItem } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';
import CategoryIcon from '@mui/icons-material/Category';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppImg from "../AppImg/AppImg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import InputAdornment from '@mui/material/InputAdornment';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import AppButtonUpload from "../AppButtonUpload/AppButtonUpload";

export default function AppUserDashboardEdit({ dashboardTitle, dashboardSubtitle, confirmButtonText }) {

    const { user } = useContext(ContextUser);
    const { products, createProduct, editProduct } = useContext(ContextProduct);
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState([]);
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("/imgs/products/Product_00.png");

    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        if (id !== undefined) {
            const findProduct = products.find((item) => item.id === parseInt(id))

            // foundedProductUser = findProduct.item.user
            if (findProduct && findProduct.user !== user.name) {
                console.log("Error: Usuario no válido");
                return navigate("/")
            }
            else {
                console.log("Producto editado:")
                console.log(findProduct)
                setTitle(findProduct.title)
                setCategory(findProduct.category)
                setPrice(findProduct.price)
                setQuantity(findProduct.quantity)
                setDescription(findProduct.description)
                setImg(findProduct.img)

                if (findProduct) {
                    setIsEditing(true)
                }
            }
        }
    }, [id])


    const handleSubmit = async (e) => {
        console.log(isEditing)
        e.preventDefault()
        // console.log("Submit")
        console.log("producto ingresado: " + title)
        console.log("categoría ingresada: " + category)
        console.log("precio ingresado: " + price)
        console.log("cantidad ingresada: " + quantity)
        console.log("descripción ingresada: " + description)
        console.log("imagen ingresada: " + img)

        if (title.length > 60) {
            return alert("error: Indica un nombre de producto válido.")
        }

        if (description.length > 450) {
            return alert("error: Indica una descripción de producto válida.")
        }

        // if (
        //     title === ""
        //     || category === ""
        //     || price === ""
        //     || quantity === ""
        //     || description === ""
        //     || img === "") {
        //     return alert("error: Debe completar todos los registros.")
        // }

        const newProduct = {
            id: Date.now(),
            user: user.name,
            title,
            category,
            price,
            img,
            description,
            quantity,
        }
        createProduct(newProduct)
        console.log("new product created")

        if (newProduct) {
            if (isEditing) {
                const updatedProduct = {
                    id: parseInt(id),
                    user: user.name,
                    title,
                    category,
                    price,
                    img,
                    description,
                    quantity,
                }
                editProduct(updatedProduct)
                console.log("Products updated")
            }
            setIsEditing(false)
            console.log(isEditing)
            return navigate("/user-dashboard")
        }
    }

    // const [searchOrder, setsearchOrder] = (0);
    // const [searchOrder, setsearchOrder] = useState(0);

    // const handleChange = (event) => {
    //     setsearchOrder(event.target.value);
    // };

    return (
        <>
            <Typography
                disabled={false}
                variant="h4"
                color="primary"
                sx={{
                    textAlign: "center",
                    pt: "20px",
                    pb: "15px",
                    fontSize: { xs: "26px", sm: "30px", md: "34px" }
                }}
            // className=''
            >
                {/* ✧ CREAR PUBLICACIÓN ✧ */}
                {dashboardTitle}

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
                    >
                        {dashboardSubtitle}
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
                                id="userDashboardEditForm"
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
                                            id="name"
                                            label="NOMBRE DEL PRODUCTO"
                                            type="text"
                                            variant="outlined"
                                            required
                                            // disabled
                                            value={title}
                                            autoFocus
                                            // defaultValue={productTitle}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setTitle(value);
                                                setTitleError(value.length > 60);
                                            }}
                                            error={titleError}
                                            helperText={titleError ? "El nombre debe tener 60 caracteres MAX." : ""}
                                            color="primary"
                                            placeholder="Catan: El juego"
                                        />
                                    </div>

                                    <div className="divTextField-style">
                                        <CategoryIcon
                                            color="primary"
                                            sx={{ my: 0.5 }} />
                                        <TextField
                                            sx={{ minWidth: "220px" }}
                                            id="category"
                                            label="CATEGORÍA"
                                            placeholder="ELIGE UNA CATEGORÍA"
                                            required
                                            error={false}
                                            select
                                            value={0}
                                            // onChange={handleChange}
                                            onChange={(e) => setCategory(e.target.value)}
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
                                            id="price"
                                            label="PRECIO"
                                            type="number"
                                            variant="outlined"
                                            required
                                            // disabled
                                            // helperText="Ingresa un nombre de usuario valido."
                                            error={false}
                                            value={price}
                                            // onChange={(e) => setPrice(e.target.value)}
                                            onChange={(e) => setPrice(Number(e.target.value))}
                                            color="primary"
                                            placeholder="9.990"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                inputProps: { min: 1 },
                                            }}
                                        />
                                    </div>

                                    <div className="divTextField-style">
                                        <ShoppingCartIcon
                                            color="primary"
                                            sx={{ my: 0.5 }} />
                                        <TextField
                                            id="quantity"
                                            label="CANTIDAD"
                                            type="number"
                                            variant="outlined"
                                            required
                                            // disabled
                                            // helperText={nameError ? "Ingresa una cantidad válida." : ""}
                                            error={false}
                                            value={quantity}
                                            // defaultValue={userName}
                                            onChange={(e) => setQuantity(Number(e.target.value))}
                                            color="primary"
                                            placeholder="1"
                                            InputProps={{
                                                // inputProps: { min: 1 },
                                            }}
                                        />
                                    </div>

                                    <div className="divTextField-style">
                                        <DescriptionIcon
                                            color="primary"
                                            sx={{ mb: 9, }}
                                        />
                                        <TextField
                                            id="description"
                                            label="DESCRIPCIÓN"
                                            type="text"
                                            variant="outlined"
                                            required
                                            // disabled
                                            error={descriptionError}
                                            helperText={descriptionError ? "La descripción debe tener 450 caracteres MAX." : ""}
                                            value={description}
                                            // defaultValue={userName}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setDescription(value);
                                                setDescriptionError(value.length > 450);
                                            }}
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
                                    imgClass="userProductImg-style"
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
                            // component={Link}
                            // to="/user-dashboard"
                            type="submit"
                            form="userDashboardEditForm"
                            variant="contained"
                            size="small"
                            color="warning"
                            // onClick={handleSubmit}
                            sx={{
                                mt: 1,
                                mb: 1,
                                py: 1.5,
                                mx: 3,
                                width: "160px",
                            }}
                            endIcon={<CheckIcon />}>{confirmButtonText}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}