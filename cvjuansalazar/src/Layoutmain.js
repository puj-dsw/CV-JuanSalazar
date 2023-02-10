import React from 'react'
import Navbar1 from './components/navbar1'
import './Layoutmain.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ScrollTop from './components/ScrollTop';

const theme = createTheme({
    palette: {
        primary: {
            main: '#121212'
        },
        secondary: {
            main: '#5c5c5c'
        }
    },
    typography: {
        fontFamily: 'Inter',
    }
})

function Layoutmain({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <div className='main-layout'>
                <Navbar1 />
                <div>{children}</div>
                <ScrollTop />
            </div>
        </ThemeProvider>
    )
}

export default Layoutmain