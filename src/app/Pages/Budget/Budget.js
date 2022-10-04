import React from 'react';
import SelectBudget from '../../Components/SelectBudget/SelectBudget';
import { Container, Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';


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
                <Container maxWidth={false} disableGutters className="page">
                    <Box sx={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'primary.dark'
                    }}>
                        <SelectBudget />
                    </Box>
                </Container>
            </ThemeProvider>
        );
    };
};

export default Budget;