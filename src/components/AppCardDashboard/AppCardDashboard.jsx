//css
import "./AppCardDashboard.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { Box, Chip, IconButton, InputAdornment, Typography, autocompleteClasses } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function AppCardDashboard({ dashboardProductImg }) {

    const pollo = "( °)> "
    const [count, setCount] = useState(0)

    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "20px",
                    // mx: 20,
                    // mb: "40px",
                    // Width: { xs: "330px", sm: "600px", md: "700px", lg: "1200px" },
                    borderRadius: "10px",
                }}

            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        width: "840px",
                    }}
                    className="dasboardCard-style "
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { sm: "row" }
                        }}
                        className="boxContainer-style"
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                            }}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <CardMedia
                                component="img"
                                sx={{ width: { xs: 100, sm: 100, md: 100, lg: 100 }, mx: "auto" }}
                                image={dashboardProductImg}
                                alt="Product_01.png"
                                className="productDetailsImg-style"
                            />
                            <Typography
                                variant="h5"
                                color="secondary"
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    mr: 10,
                                    ml: 2,
                                    width: "260px"
                                }}
                                className="productName-style"
                            >
                                "NOMBRE PRODUCTO"
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "row", sm: "row" },
                                // my: "20px",
                                // mb: "20px",
                                // pb: "20px",
                                // mx: "10px",
                                // m: "auto",
                            }}
                        >
                            <Button
                                component={Link}
                                to="/user-dashboard"
                                variant="contained"
                                size="small"
                                sx={{
                                    // mt: 1,
                                    // mb: 1,
                                    // px: 8,
                                    // mr: 3,
                                    mx: 2,
                                    py: 1.5,
                                    width: "160px",
                                }}
                                endIcon={<EditIcon />}> EDITAR
                            </Button>
                            <Button
                                component={Link}
                                to="/user-dashboard"
                                variant="outlined"
                                size="small"
                                sx={{
                                    // mt: 1,
                                    // mb: 1,
                                    py: 1.5,
                                }}
                                endIcon={<DeleteIcon />}> ELIMINAR
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}