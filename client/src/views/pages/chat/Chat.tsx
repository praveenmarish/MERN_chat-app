// material-ui
import { Container, Grid } from '@mui/material';
import { Request } from 'api/server/main';
import { useState } from 'react';
import { useQuery } from 'react-query';

// components 
import CardList from 'views/components/CardList';
import ChatList from 'views/components/ChatList';
import TopCard from 'views/components/TopCard';

// ================================|| USERS ||================================ //

const Chat = () => {

    const [currentReceiver, setcurrentReceiver] = useState("")

    return (
        <Container sx={{ backgroundColor: "white", height: "80vh", width: "90vw", position: "relative", top: "15%" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ height: "10vh" }}>
                    <TopCard />
                </Grid>
                <Grid item xs={4} sx={{ height: "65vh", width: "100%" }}>
                    <CardList receiver={setcurrentReceiver} />
                </Grid>
                <Grid item xs={8} sx={{ height: "65vh", width: "100%" }}>
                    <ChatList receiverId={currentReceiver} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;