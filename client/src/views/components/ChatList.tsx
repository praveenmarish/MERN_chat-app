// material-ui
import { Container } from '@mui/material';

import { Request } from 'api/server/main';
import { useQuery } from 'react-query';
import { useRef, useLayoutEffect } from "react";

// ================================|| USERS ||================================ //

import Messages from './Messages';
import SendInput from './SendInput';

const ChatList = ({ receiverId }: main.Props) => {

    const chat = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (chat.current !== null) {
            chat.current.scrollTop = chat.current.scrollHeight;
        }
    }, [receiverId])

    const { data, isLoading } = useQuery(["conversation", receiverId], async () => {
        const data = await Request("initConversation", { "id": [receiverId] });
        console.log(data)
        return data.data
    })

    return (
        <Container sx={{ backgroundColor: (theme) => theme.palette.secondary.main, height: "100%", width: "100%", borderRadius: "10px", border: "1px solid #000", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
            <Container ref={chat} sx={{
                backgroundColor: "white", height: "90%", width: "100%", borderRadius: "10px", overflow: "auto", padding: "10px !important", "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}>
                {isLoading ? <></> :
                    <Messages messages={data.messages} conversationId={data.ConversationId} pageCount={data.pageCount} receiverId={receiverId} />}
                {isLoading ? <></> :
                    <Container sx={{ position: "sticky", top: "auto", bottom: 0 }}>
                        <SendInput conversationId={data.ConversationId} />
                    </Container>}
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