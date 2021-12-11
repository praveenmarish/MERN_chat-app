import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

// constants
import Constants from 'constants/Images'

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <Container sx={{ backgroundImage: `url(${Constants["background_img"]})`, height: "100vh", width: "100vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", backgroundRepeat: "no-repeat", backgroundSize: "cover", maxWidth: "inherit !important" }}>
        <Outlet />
    </Container>
);

export default MinimalLayout;