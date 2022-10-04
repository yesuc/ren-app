import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography, Container, Icon } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default class SelectBudget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        // Bind methods here
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event) {
        event.preventDefault();
        let eventValue = event.currentTarget.value;
        this.setState((prevState) => {
            if (prevState.value === eventValue) return { value: '' };
            return {
                value: eventValue,
            }
        });

    }

    render() {
        return (
            <Container maxWidth={false} sx={{ height: '100%' }}>
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
                                value="50 / 30 / 20"
                                onClick={this.handleSelect}
                                color={this.state.value === "50 / 30 / 20" ? "primary" : "secondary"}
                            >
                                <Typography variant="h3">
                                    50 / 30 / 20
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                size="large"
                                value="50 / 20 / 30"
                                onClick={this.handleSelect}
                                color={ this.state.value === "50 / 20 / 30" ? "primary" : "secondary" }
                            >
                                <Typography variant="h3">
                                    50 / 20 / 30
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid>
                            <Button 
                                variant="contained" 
                                size="large"
                                value="40 / 30 / 30"
                                onClick={this.handleSelect}
                                color={ this.state.value === "40 / 30 / 30" ? "primary" : "secondary" }
                            >
                                <Typography variant="h3">
                                    50 / 30 / 20
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                disabled={this.state.value ? false : true }
                                endIcon={<ArrowRightIcon />}
                            >
                                Continue
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}