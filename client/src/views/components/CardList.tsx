// material-ui
import { Container, Grid, Typography } from '@mui/material';

// ================================|| USERS ||================================ //

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const CardList = () => {

    const users = [{ "username": "marish" }, { "username": "praveen" },
    { "username": "praveenmarish" }, { "username": "marish" },
    { "username": "praveen" },
    { "username": "praveenmarish" }, { "username": "marish" },
    { "username": "praveen" },
    { "username": "praveenmarish" }]

    return (
        <Container sx={{ backgroundColor: (theme) => theme.palette.secondary.main, height: "100%", width: "100%", borderRadius: "10px", border: "1px solid #000", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
            <Typography sx={{ height: "5%", fontSize: "20px", textAlign: "center", paddingBottom: "20px" }}>
                Users
            </Typography>
            <Container sx={{
                backgroundColor: "white", height: "85%", width: "100%", borderRadius: "10px", overflow: "auto", padding: "10px !important", "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}>
                <Stack spacing={2}>
                    {users.map((val, index) => (
                        <Item key={index}>{val.username}</Item>
                    ))}
                </Stack>
            </Container>
        </Container >
    );
};

export default CardList;