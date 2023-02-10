import React from 'react';
import Layoutmain from '../Layoutmain';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';
import './Buttons.css'
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import '../Layoutmain.css';






import CarouselSkills from '../components/Carusel';
import InfoCards from '../components/InfoCards.json';
import Education from '../components/Education';



function Home() {

  return (
    <Layoutmain>
      <Container>
        <Box marginY={3}>
          <Typography sx={{ fontWeight: '500', textAlign: 'center', fontSize: { xs: '9vw', md: '10vw', xl: '7vw' } }}>
            ¡Bienvenido!
          </Typography>
          <Typography sx={{ fontWeight: '300', textAlign: 'center', fontSize: { xs: '5vw', md: '3vw', xl: '2vw' } }} color='secondary' marginTop={'1vh'}>
            Soy un Científico de Datos en mi último año de la carrera de Ciencia de Datos en la Pontificia Universidad Javeriana de Bogotá. Espero compartir con ustedes mi experiencia y proyectos en el campo.
          </Typography>
          <Typography sx={{ fontWeight: '500', textAlign: 'center', fontSize: { xs: '4.6vw', md: '2.6vw', xl: '1.6vw' } }} color='secondary' marginTop={'3vh'}>
            Si está buscando un Científico de Datos para su proyecto, no dude de contactarme en:
          </Typography>
          <Grid container justifyContent={'space-evenly'} alignItems={'center'} justifyItems={'center'} marginTop={'3vh'} padding={'1vmin'} spacing={3}>
            <Grid item>
              <Button className='button-28' variant='contained' startIcon={<GitHub fontSize='inherit' />} size='large' href="https://github.com/DrThorium" target={'blank'}>
                <Typography sx={{ fontWeight: '400', textAlign: 'center', textTransform: 'initial' }} paddingX='1vw'>
                  GitHub
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button className='button-28' variant='contained' startIcon={<LinkedIn fontSize='inherit' />} size='large' href="https://www.linkedin.com/in/juan-esteban-salazar-villamizar-2802421a5/" target={'blank'}>
                <Typography sx={{ fontWeight: '400', textAlign: 'center', textTransform: 'initial' }} paddingX='1vw'>
                  LinkedIn
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button className='button-28' variant='contained' startIcon={<Mail fontSize='inherit' />} size='large' href="mailto:jestebansalazarv@javeriana.edu.co" target={'blank'}>
                <Typography sx={{ fontWeight: '400', textAlign: 'center', fontSize: 'inherit', textTransform: 'initial' }} paddingX='1vw'>
                  Correo Electrónico
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <div className='alternative-background'>
        <Container>
          <Box marginY={5}>
            <Education />
          </Box>
          <Grid container justifyContent={'center'} spacing={5}>
            <Grid item>
              <CarouselSkills images={InfoCards.frameworks} />
            </Grid>
            <Grid item>
              <CarouselSkills images={InfoCards.cloud} />
            </Grid>
            <Grid item>
              <CarouselSkills images={InfoCards.lenguajes} />
            </Grid>
          </Grid>
        </Container>
        <Container>

        </Container>
        


      </div>
    </Layoutmain>
  )
}

export default Home