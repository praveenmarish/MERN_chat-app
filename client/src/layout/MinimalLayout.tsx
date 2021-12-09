import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <Container>
        <Outlet />
    </Container>
);

export default MinimalLayout;