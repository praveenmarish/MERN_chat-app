import { IconButton, Input, InputAdornment } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { SetStateAction, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'react-error-boundary'
import { Request } from 'api/server/main';
import { sendMsg } from 'api/server/socket';

const SendInput = ({ conversationId }: Sender.Props) => {
    const [SendMessageText, setSendMessageText] = useState("")
    const client = useQueryClient()
    const handleError = useErrorHandler()

    const { mutate: send } = useMutation(async (values: Sender.Msg) => {
        const res = await Request("sendMessage", values)
        return res
    },
        {
            onSuccess: async (data) => {
                setSendMessageText("")
                client.invalidateQueries(["message", conversationId])
            },
            onError: (err) => {
                if ((err as any).response) {
                    handleError(Error((err as any).response.data.error))
                } else {
                    handleError(Error(err as any))
                }
            },
        }
    );

    const handleOnChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSendMessageText(e.target.value);
    };


    const handleSubmit = () => {
        console.log(SendMessageText)
        sendMsg({ message: SendMessageText, conversationId: conversationId })
        send({ conversationId: conversationId, message: SendMessageText })
    }

    return (
        <Input
            fullWidth
            type='text'
            value={SendMessageText}
            onChange={handleOnChange}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={handleSubmit}>
                        <TelegramIcon sx={{ color: (theme) => theme.palette.primary.main }} />
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}

export default SendInput

export declare namespace Sender {
    export interface Props {
        conversationId: string
    }
    export interface Msg {
        conversationId: string,
        message: string
    }
}