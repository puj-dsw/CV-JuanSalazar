import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from 'react';

function ScrollTop() {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrollTop(true)
            }
            else {
                setScrollTop(false)
            }
        })
    })
    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return <div>
        {scrollTop && (
            <Box

                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                <Fab size="small" aria-label="scroll back to top" onClick={ScrollUp}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        )}
    </div>
}

export default ScrollTop