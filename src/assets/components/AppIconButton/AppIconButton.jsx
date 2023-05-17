//components
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

//css
import './AppIconButton.css'

export default function AppIconButton({ icon, to, count, onClick }) {
    return (
        <Typography
            // noWrap
            component={NavLink}
            to={to}
            sx={{
                display: { xs: 'none', sm: 'none', md: 'flex' },
                m: 0,
                py: 0,
                textDecoration: "none",
            }}
        >
            <IconButton
                className='IconButton-style'
                size="large"
                onClick={onClick}
            >
                <Badge badgeContent={count} color="secondary">
                    {icon}
                </Badge>
            </IconButton>
        </Typography>
    )
}