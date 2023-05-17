//components
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//css
import './AppButton.css'

export default function AppButton({ text, to }) {
    return (
        <Typography
            // noWrap
            component={NavLink}
            to={to}
            sx={{
                display: { xs: 'none', sm: 'none', md: 'flex' },
                m: 0,
                py: 0,
                px: 1,
                textDecoration: "none",
            }}
        >
            <Button
                // startIcon={<MailIcon />}
                disabled={false}
                variant="outlined"
                color="inherit"
                size="small"
                className='button-style'
                sx={{
                    mx: 0,
                    px: 1,
                    py: 0,
                    // py: "14px",
                    color: 'white',
                    textDecoration: "none",
                }}
            >{text}
            </Button>
        </Typography>
    )
}