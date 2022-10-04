import React from 'react';
import SelectBudget from '../../Components/SelectBudget/SelectBudget';
import { Container, Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

class Budget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'SELECT',
        }
    };

    render() {
        return (
            <ThemeProvider theme={darkTheme}>
                <CssBaseline></CssBaseline>
                <Container
                    maxWidth={false}
                    disableGutters
                    className="page"
                    sx={{
                        backgroundColor: 'palette.background.default'
                    }}
                >
                    <Grid
                        container
                        sx={{height: '100%', width: '100%'}}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box
                            sx={{
                                width: '100%',
                                backgroundColor: 'primary.dark',
                                m: 3,
                                p: 2,
                                borderRadius: 4,
                            }}
                        >
                            <SelectBudget />
                        </Box>
                    </Grid>
                </Container>
            </ThemeProvider>
        );
    };
};

export default Budget;