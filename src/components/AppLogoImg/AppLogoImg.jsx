//css

//components
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

export default function AppLogoImg({ to, width, src }) {
    return (
        <>
            <Typography
                variant=""
                noWrap
                component={Link}
                to={to}
                sx={{ display: { xs: 'flex', sm: 'flex' }, m: 0, px: 1.5 }}
            ><img src={src} width={width} alt="DADOAZUL_logo" />
            </Typography>
        </>
    )
}