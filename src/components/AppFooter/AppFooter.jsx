//css
import "./AppFooter.css"

//components
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppImg from "../AppImg/AppImg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppIconButton from "../AppIconButton/AppIconButton";
import AppFooterInfo from "./AppFooterInfo";

export default function AppFooter() {
    return (
        <>
            <div className="appFooter-style">
                <Box
                    component="footer"
                    sx={{
                        py: 1,
                        px: 2,
                        mt: 2,
                        bgcolor: 'secondary.main',
                        color: 'white',
                    }
                    }>
                    <Container
                        align="center"
                        sx={{ display: "flex" }}>
                        <Grid container
                            alignItems={"center"}
                            alignContent={"center"}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                sx={{ display: { xs: 'flex', sm: 'flex' } }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                textAlign={"center"}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        textAlign: "center",
                                        m: "auto",
                                        display: { xs: 'flex', sm: 'flex' },
                                        gap: 0.5,
                                        mt: "10px",
                                        // mb: "10px",
                                    }}
                                    textAlign={"center"}
                                >¿AÚN NO ERES PARTE DE LA COMUNIDAD?
                                </Typography>
                                <Typography
                                    disabled={false}
                                    variant="h6"
                                    color="white"
                                    sx={{
                                        textAlign: "justify",
                                        textJustify: "initial",
                                        mt: "10px",
                                    }}
                                // className=''
                                >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit amet loremter.
                                </Typography>
                                <Typography
                                    component={Link}
                                    to="/login"
                                    sx={{
                                        m: 0,
                                        pt: 2,
                                        pb: 4,
                                    }}
                                >
                                    <Button variant="contained"
                                        sx={{
                                            m: 0,
                                            py: 2,
                                        }}
                                    >
                                        REGISTRARSE
                                    </Button>
                                </Typography>
                            </Grid >
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                sx={{ display: { xs: 'flex', sm: 'flex' } }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                textAlign={"center"}
                            >
                                <AppImg
                                    // to="/"
                                    src="\imgs\Logo_02.png"
                                    alt="Logo_02"
                                    width="220px"
                                    display="flex"
                                />
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        m: "auto",
                                        display: { xs: 'flex', sm: 'flex' },
                                        gap: 0.5,
                                        mt: "10px",
                                        mb: "20px"
                                    }}
                                    textAlign={"center"}
                                > <MailOutlineIcon /> CONTACTO@DADOAZUL.CL
                                </Typography>
                            </Grid >
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={3}
                                sx={{ display: { xs: 'flex', sm: 'flex' } }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                textAlign={"center"}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        m: "auto",
                                        mt: "10px",
                                        mb: "20px"
                                    }}
                                    textAlign={"center"}
                                >SÍGUENOS EN:
                                </Typography>
                                <Box sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: "center", pb: "20px", gap: "5px" }}>
                                    <AppIconButton icon={<InstagramIcon />} to="/" component={Link} backgroundColor={"rgb(29, 95, 149)"}
                                        boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"} />
                                    <AppIconButton icon={<TwitterIcon />} to="/" component={Link} backgroundColor={"rgb(29, 95, 149)"}
                                        boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"} />
                                    <AppIconButton icon={<YouTubeIcon />} to="/" component={Link} backgroundColor={"rgb(29, 95, 149)"}
                                        boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"} />
                                    <AppIconButton icon={<FacebookIcon />} to="/" component={Link} backgroundColor={"rgb(29, 95, 149)"}
                                        boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"} />
                                </Box>
                            </Grid >
                        </Grid>
                    </Container>
                    <Box>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: "15px"
                            }}
                        >
                            DADOAZUL MARKETPLACE
                            {' '}
                            {'© '}
                            {' '}
                            {new Date().getFullYear()}
                            {''}
                        </Typography>
                    </Box>
                    <AppFooterInfo />
                </Box>
            </div>
        </>
    );
}