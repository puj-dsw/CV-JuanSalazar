import React from 'react'
import { Box, Typography } from '@mui/material'
import ScrollTab from './ScrollTab'

function Education() {
    return (
        <div>
            <Box>
                <Typography sx={{ fontWeight: '700', textAlign: 'left', fontSize: { xs: '5.5vw', md: '3.5vw', xl: '2.5vw' } }} color='secondary' marginTop={'1vh'}>
                    Educación y certificaciones.
                </Typography>
            </Box>
            <ScrollTab />
            <Box>
                <Typography sx={{ fontWeight: '700', textAlign: 'left', fontSize: { xs: '5.5vw', md: '3.5vw', xl: '2.5vw' } }} color='secondary' marginTop={'1vh'}>
                    Habilidades.
                </Typography>
                <Typography>
                    Un resumen de mis habilidades, incluyendo las librerias, frameworks, plataformas y software que manejo.
                </Typography>
            </Box>

        </div>
    )
}

export default Education