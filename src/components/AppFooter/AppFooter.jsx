//css
import "./AppFooter.css"

//components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {

    return (
        <Typography
            variant="h5"
            component="h5"
            align="center"
            sx={{
                fontSize: "20px",
            }}>
            ✧DADOAZUL MARKETPLACE
            {' '}
            {'© '}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function AppFooter() {
    return (
        <div className="appFooter-style">
            <Box
                component="footer"
                sx={{
                    py: 1,
                    px: 2,
                    mt: 2,
                    bgcolor: 'primary.main',
                    color: 'white',
                }
                }
            >
                <Container
                    align="center"
                    sx={{
                        justifyContent: "center",
                    }}>
                </Container>
                <Copyright />
            </Box>
        </div>
    );
}