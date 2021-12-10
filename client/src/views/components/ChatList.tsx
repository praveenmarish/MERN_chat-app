// material-ui
import { Container } from '@mui/material';

// ================================|| USERS ||================================ //

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: '70%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const ChatList = () => {

    const messages = [{ "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" },]

    return (
        <Container sx={{ backgroundColor: (theme) => theme.palette.secondary.main, height: "100%", width: "100%", borderRadius: "10px", border: "1px solid #000", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
            <Container sx={{
                backgroundColor: "white", height: "90%", width: "100%", borderRadius: "10px", overflow: "auto", padding: "10px !important", "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}>
                <Stack spacing={2}>
                    {messages.map((data, index) => (
                        <Item key={index} sx={{ marginLeft: data.type === "sender" ? "auto !important" : "inherit" }}>
                            {data.message}
                        </Item>
                    ))}
                </Stack>

            </Container>
        </Container >
    );
};

export default ChatList;