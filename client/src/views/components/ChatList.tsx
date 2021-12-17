// material-ui
import { Container, IconButton, Input, InputAdornment } from '@mui/material';

import { Request } from 'api/server/main';
import { useQuery } from 'react-query';

// ================================|| USERS ||================================ //

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TelegramIcon from '@mui/icons-material/Telegram';
import Messages from './Messages';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: '70%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const ChatList = ({ receiverId }: main.Props) => {
    const [conversationId, setconversationId] = useState("")

    const { data, isLoading } = useQuery(["conversation", receiverId], async () => {
        const data = await Request("initConversation", { "id": [receiverId] });
        console.log(data)
        return data.data.messages
    })

    const conversationIds = "kahfind"
    const pageCount = 4

    console.log(receiverId)

    const messages = [{ "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }, { "type": "sender", "message": "hi" }, { "type": "receiver", "message": "hi" }]

    return (
        <Container sx={{ backgroundColor: (theme) => theme.palette.secondary.main, height: "100%", width: "100%", borderRadius: "10px", border: "1px solid #000", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
            <Container sx={{
                backgroundColor: "white", height: "90%", width: "100%", borderRadius: "10px", overflow: "auto", padding: "10px !important", "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}>
                <Messages messages={messages} conversationId={conversationIds} pageCount={pageCount} />
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

export declare namespace main {
    export interface Props {
        receiverId: string
    }
    export interface users {
        username: string;
        _id: string
    }
}