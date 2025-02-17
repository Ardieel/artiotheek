import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";

export default function App() {
    return (
        <Container maxWidth="sm">
            <div>
                <HeaderMain />
            </div>

            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create React App v4-beta example
                </Typography>
                <Footer />
            </Box>
        </Container>
    );
}
