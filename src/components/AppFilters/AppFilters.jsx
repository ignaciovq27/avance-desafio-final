//css
import './AppFilters.css'

//components
import { useState } from "react";
import { useContext } from "react";
import { ContextProduct } from "../../context/ProductContext";

// import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box, FormControl, FormHelperText, InputAdornment, MenuItem, Select } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

export default function AppFilters({ searchTextNav, setSearchTextNav }) {
    const { products } = useContext(ContextProduct);

    const [searchOrder, setsearchOrder] = useState(0);

    const handleChange = (event) => {
        setsearchOrder(event.target.value);
    };
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    // my: "20px",
                    // mb: "40px",
                    gap: "14px",
                    mx: { xs: "23px", sm: "10px", md: "14px", lg: "80px", xl: "200px" },
                }}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                textAlign={"center"}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <Typography
                        // variant="h6"
                        color="secondary"
                        // className=''
                        sx={{
                            px: 1
                        }}
                    >
                        PUBLICACIONES:
                    </Typography>
                    <Typography
                        color="primary"
                        sx={{ fontWeight: "600", fontSize: "20px" }}
                    >{products.length}
                    </Typography>
                </Box>
                <div className="divTextField-style">
                    <Typography
                        // variant="h6"
                        color="secondary"
                        // className=''
                        sx={{
                            // pb: "20px"
                            px: "10px"
                        }}
                    >BÚSQUEDA:
                    </Typography>

                    <TextField
                        id="searchGameboard"
                        label="BUSCAR POR NOMBRE"
                        type="text"
                        variant="outlined"
                        placeholder="Splendor..."
                        color="primary"
                        onChange={(e) => setSearchTextNav(e.target.value.trimStart())}
                        value={searchTextNav}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className="divTextField-style">
                    <Typography
                        // variant="h6"
                        color="secondary"
                        // className=''
                        sx={{
                            // pb: "20px"
                            px: "10px"
                        }}
                    >ORDENAR POR:
                    </Typography>
                    <FormControl sx={{ minWidth: 220 }}>
                        <TextField
                            value={searchOrder}
                            onChange={handleChange}
                            select
                            // label="ORDENAR"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SortIcon color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            <MenuItem value={0}>ORDEN DE A - Z</MenuItem>
                        </TextField>
                        {/* <FormHelperText>Without label</FormHelperText> */}
                    </FormControl>
                </div>
            </Box >
        </>
    )
}