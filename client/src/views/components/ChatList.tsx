// material-ui
import { Container } from '@mui/material';

import { Request } from 'api/server/main';
import { useQuery } from 'react-query';
import { useRef, useLayoutEffect } from "react";
import { useErrorHandler } from 'react-error-boundary'

// ================================|| USERS ||================================ //

import Messages from './Messages';
import SendInput from './SendInput';
import { joinConversation } from 'api/server/socket';

const ChatList = ({ receiverId }: main.Props) => {

    const chat = useRef<null | HTMLDivElement>(null);
    const handleError = useErrorHandler()

    useLayoutEffect(() => {
        if (chat.current !== null) {
            chat.current.scrollTop = chat.current.scrollHeight;
        }
    }, [receiverId])

    const { data, isLoading } = useQuery(["conversation", receiverId], async () => {
        const data = await Request("initConversation", { "id": [receiverId] });
        console.log(data)
        joinConversation(data.data.ConversationId)
        return data.data
    }, {
        onError: (err) => {
            if ((err as any).response) {
                handleError(Error((err as any).response.data.error))
            } else {
                handleError(Error(err as any))
            }
        }
    })

    return (
        <Container sx={{ backgroundColor: (theme) => theme.palette.secondary.main, height: "100%", width: "100%", borderRadius: "10px", border: "1px solid #000", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
            <Container ref={chat} id="messages" sx={{
                backgroundColor: "white", height: "90%", width: "100%", borderRadius: "10px", overflow: "auto", padding: "10px !important", "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}>
                {isLoading ? <></> :
                    <Messages conversationId={data?.ConversationId} pageCount={data?.pageCount} receiverId={receiverId} />}
                {isLoading ? <></> :
                    <Container sx={{ position: "sticky", top: "auto", bottom: 0 }}>
                        <SendInput conversationId={data?.ConversationId} />
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