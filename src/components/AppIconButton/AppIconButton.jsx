//css
import './AppIconButton.css'

//components
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function AppIconButton({ icon, to, count, maxCount, onClick, xsDisplay, smDisplay }) {
    return (
        <Typography
            // noWrap
            component={NavLink}
            to={to}
            sx={{
                display: { xs: { xsDisplay }, sm: { smDisplay }, md: 'flex' },
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
                <Badge badgeContent={count} max={maxCount} color="secondary">
                    {icon}
                </Badge>
            </IconButton>
        </Typography>
    )
}