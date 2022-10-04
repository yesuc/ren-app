import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography, Container } from "@mui/material";

export default class SelectBudget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container maxWidth={false} sx={{ py: 3, height: '100%' }}>
                <Grid 
                    container
                    sx={{ height: '100%' }}
                >
                    <Grid
                        xs={5}
                        direction="column"
                        container
                        display="flex"
                        alignItems="center"
                    >
                        <Grid sx={{ mt: 3 }}>
                            <Typography variant="h1">
                                Select a budget strategy
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        xs={6}
                        direction="column"
                        container
                        sx={{ height: '100%' }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        spacing={10}
                    >
                        <Grid>
                            <Typography variant="p">
                                Select your preferred Budget Strategy.
                                Each strategy splits your income in the order of 
                                <strong> Needs / Wants / Savings</strong>
                            </Typography>
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                size="large"
                            >
                                <Typography variant="h3">
                                    50 / 30 / 20
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid >
                            <Button
                                variant="contained"
                                size="large"
                            >
                                <Typography variant="h3">
                                    50 / 20 / 30
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large">
                                <Typography variant="h3">
                                    50 / 30 / 20
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}