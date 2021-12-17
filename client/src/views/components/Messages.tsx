// material-ui
import { Stack, Paper } from "@mui/material"
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: '70%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const Messages = ({ messages, conversationId, pageCount }: main.Props) => {
    return (
        <Stack spacing={2} sx={{ marginBottom: "2%" }}>
            {messages.map((data, index) => (
                <Item key={index} sx={{ marginLeft: data.type === "sender" ? "auto !important" : "inherit" }}>
                    {data.message}
                </Item>
            ))}
        </Stack>
    )
}

export default Messages

export declare namespace main {
    export interface MsgFormat {
        type: string;
        message: string;
    }
    export interface Props {
        messages: MsgFormat[];
        conversationId: string;
        pageCount: number
    }
}