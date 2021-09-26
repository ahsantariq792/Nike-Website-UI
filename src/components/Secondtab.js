// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import MailIcon from '@mui/icons-material/Mail';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import img1 from '../images/nike.png';

// const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//         right: -3,
//         top: 13,
//         border: `2px solid ${theme.palette.background.paper}`,
//         padding: '0 4px',
//     },
// }));

export default function Secondtab() {
    return (
        <>
            <div>
                <img style={{ height: "20px", width: "60px" }} src={img1} alt="Logo" />
            </div>
            {/* <div style={{ display: "flex", justifyContent: "right",margin:"0px", position:"absolute",top:"14%",left:"90%" }}>
                <Badge color="primary">
                    <MailIcon color="action" />
                </Badge>
                <IconButton aria-label="cart">
                    <StyledBadge color="action">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </div> */}
        </>
    );
}
