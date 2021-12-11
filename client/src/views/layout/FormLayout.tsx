// material-ui
import { Container, Grid, Typography } from '@mui/material';

// ================================|| LOGIN ||================================ //

export const FormLayout = ({ children, value }: Form.Props) => {
    return (
        <Container sx={{ backgroundColor: "white", height: "80vh", width: "80vw", position: "relative", top: "15%" }}>
            <Grid container sx={{ height: "100%", width: "100%", alignContent: "center" }}>
                <Grid item xs={12} sx={{ height: "15%" }}>
                    <Typography sx={{ textAlign: "center", fontSize: "24px", marginTop: "10px", marginBottom: "10px", color: (theme) => theme.palette.primary.main, fontWeight: "bolder" }}>
                        {value}
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ height: "80%" }}>
                    <Container sx={{ backgroundColor: (theme) => theme.palette.secondary.main, height: "100%", width: "100%", borderRadius: "10px", border: "1px solid #000", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
                        <Container sx={{
                            backgroundColor: "white", height: "90%", width: "100%", borderRadius: "10px", overflow: "auto", padding: "10px !important", "&::-webkit-scrollbar": {
                                display: "none",
                            },
                        }}>
                            {children}
                        </Container>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
};

export declare namespace Form {
    export interface Props {
        children: React.ReactNode;
        value: string
    }
}