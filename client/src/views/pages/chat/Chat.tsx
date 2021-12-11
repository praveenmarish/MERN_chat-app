// material-ui
import { Container, Grid } from '@mui/material';

// components 
import CardList from 'views/components/CardList';
import ChatList from 'views/components/ChatList';
import TopCard from 'views/components/TopCard';

// ================================|| USERS ||================================ //

const Chat = () => {

    return (
        <Container sx={{ backgroundColor: "white", height: "80vh", width: "90vw", position: "relative", top: "15%" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ height: "10vh" }}>
                    <TopCard />
                </Grid>
                <Grid item xs={4} sx={{ height: "65vh", width: "100%" }}>
                    <CardList />
                </Grid>
                <Grid item xs={8} sx={{ height: "65vh", width: "100%" }}>
                    <ChatList />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;