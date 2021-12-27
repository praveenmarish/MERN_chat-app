// material-ui
import { Container, Typography } from '@mui/material';

// ================================|| USERS ||================================ //

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Request } from 'api/server/main';
import { Dispatch, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import { useErrorHandler } from 'react-error-boundary'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const CardList = ({ receiver }: main.Props) => {

    const handleError = useErrorHandler()

    const { data, isLoading } = useQuery("users", async () => {
        const data = await Request("userList", {});
        return data.data.users
    }, {
        onError: (err) => {
            handleError(Error((err as any).response.data.error))
        }
    })

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
                    {isLoading ? <></> : (data?.map(({ username, _id }: main.users) => (
                        <Item key={_id} onClick={() => receiver(_id)} >{username}</Item>
                    )))}

                </Stack>
            </Container>
        </Container >
    );
};

export default CardList;

export declare namespace main {
    export interface Props {
        receiver: Dispatch<SetStateAction<string>>
    }
    export interface users {
        username: string;
        _id: string
    }
}