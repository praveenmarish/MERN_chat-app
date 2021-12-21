// material-ui
import { Stack, Paper } from "@mui/material"
import { styled } from '@mui/material/styles';
import { receiveMessages } from "api/server/socket";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: '70%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const Messages = ({ messages, conversationId, pageCount, receiverId }: main.Props) => {

    useEffect(() => {
        receiveMessages((data: string) => { console.log(data) })
    }, [])



    console.log(conversationId, messages, pageCount, receiverId)
    return (
        <Stack spacing={2} sx={{ marginBottom: "2%", minHeight: "100%", display: "flex", flexDirection: "column-reverse" }}>
            {messages?.map((data, index) => (
                <Item key={index} sx={{ marginLeft: data.senderId === receiverId ? "inherit" : "auto !important" }}>
                    {data.message}
                </Item>
            ))}
        </Stack>
    )
}

export default Messages

export declare namespace main {
    export interface MsgFormat {
        senderId: string
        message: string;
    }
    export interface Props {
        messages: MsgFormat[];
        conversationId: string;
        pageCount: number;
        receiverId: string;
    }
}