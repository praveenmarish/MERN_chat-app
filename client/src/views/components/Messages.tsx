// material-ui
import { Stack, Paper } from "@mui/material"
import { styled } from '@mui/material/styles';
import { Request } from "api/server/main";
import { receiveMessages } from "api/server/socket";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: '70%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const Messages = ({ conversationId, pageCount, receiverId }: main.Props) => {

    const client = useQueryClient()

    const callback = (data: string) => {
        console.log(data)
        client.invalidateQueries(["message", conversationId])
    }

    useEffect(() => {
        receiveMessages(callback)
    }, [])

    const { data } = useQuery(["message", conversationId], async () => {
        const data = await Request("messages", { conversationId, "pageNo": 1 });
        console.log(data.data.messages)
        return data.data.messages
    })

    //setMessage((prevlist) => [...prevlist, data])

    // const scrollEvent = () => {
    //     console.log("scroll")
    // }

    useEffect(() => {
        const Html = document.getElementById("messages")
        if (Html !== null) {
            if (data !== undefined) {
                Html.scrollTop = Html.scrollHeight
            }
            //Html.onscroll = scrollEvent
        }
    }, [data])


    console.log(conversationId, pageCount, receiverId)
    return (
        <Stack spacing={2} sx={{ marginBottom: "2%", minHeight: "100%", display: "flex", flexDirection: "column-reverse" }}>
            {data?.map((data: main.message, index: number) => (
                <Item key={index} sx={{ marginLeft: data.senderId === receiverId ? "inherit" : "auto !important" }}>
                    {data.message}
                </Item>
            ))}
        </Stack>
    )
}

export default Messages

export declare namespace main {
    export interface message {
        senderId: string;
        message: string;
    }
    export interface Props {
        conversationId: string;
        pageCount: number;
        receiverId: string;
    }
}