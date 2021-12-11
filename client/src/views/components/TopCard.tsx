// material-ui
import { Container, Typography } from '@mui/material';

// ================================|| USERS ||================================ //

const TopCard = () => {

    return (
        <Container sx={{ backgroundColor: "white" }}>
            <Typography sx={{ fontSize: "24px", marginTop: "10px", marginBottom: "10px", color: (theme) => theme.palette.primary.main, fontWeight: "bolder" }}>
                Username: Marish
            </Typography>
        </Container>
    );
};

export default TopCard;