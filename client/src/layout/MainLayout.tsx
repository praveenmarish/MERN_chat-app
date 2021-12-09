import { Outlet } from 'react-router-dom';

// material-ui
import { Box } from '@mui/material';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    );
};

export default MainLayout;