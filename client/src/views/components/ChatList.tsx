// material-ui
import { Container, IconButton, Input, InputAdornment } from '@mui/material';

// ================================|| USERS ||================================ //

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TelegramIcon from '@mui/icons-material/Telegram';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: '70%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const ChatList = () => {

    const messages = [{ "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }]

    return (
        <Container sx={{ backgroundColor: (theme) => theme.palette.secondary.main, height: "100%", width: "100%", borderRadius: "10px", border: "1px solid #000", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
            <Container sx={{
                backgroundColor: "white", height: "90%", width: "100%", borderRadius: "10px", overflow: "auto", padding: "10px !important", "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}>
                <Stack spacing={2} sx={{ marginBottom: "2%" }}>
                    {messages.map((data, index) => (
                        <Item key={index} sx={{ marginLeft: data.type === "sender" ? "auto !important" : "inherit" }}>
                            {data.message}
                        </Item>
                    ))}
                </Stack>
                <Container sx={{ position: "sticky", bottom: "0px" }}>
                    <Input
                        fullWidth
                        type='text'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <TelegramIcon sx={{ color: (theme) => theme.palette.primary.main }} />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Container>

            </Container>
        </Container >
    );
};

export default ChatList;