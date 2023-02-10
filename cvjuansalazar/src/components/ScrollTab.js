import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import javerianaland from '../media/personal-kit/imgs/javeriana.png'
import MSland from '../media/personal-kit/imgs/MsLogo.png'
import AWSland from '../media/personal-kit/imgs/AWS.png'
import { Button } from '@mui/material';
import '../pages/Buttons.css'
import { Link as Rlink } from 'react-router-dom';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};






export default function ScrollTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box sx={{ maxWidth: { xs: 'auto', sm: 'auto', md: '100%' }, bgcolor: 'rgba(255,255,255,0.6)' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                centered
                textColor='inherit'
                indicatorColor='primary'
            >
                <Tab label="Título Profesional" />
                <Tab label="Azure DP-100" />
                <Tab label="Azure Dp-203" />
                <Tab label="AWS Machine Learning Specialist" />

            </Tabs>
            <TabPanel value={value} index={0}>
            <Grid container>
                    <Grid item xs={'auto'}>
                        <img src={javerianaland} width='80hv' alt='LogoAWS'></img>
                    </Grid>
                    <Grid item xs marginX={'10hv'}>
                        <Typography sx={{ fontWeight: '700', textAlign: 'left', fontSize: { xs: '4.9vw', md: '2.9vw', xl: '1.9vw' } }} color='secondary'>
                        BASc, Data Science: Pontificia Universidad Javeriana.
                        </Typography>
                    </Grid>
                </Grid>
                <Typography>
                    <p><b>Título:</b> Científico de Datos.</p>
                    <p><b>Duración:</b> 4 años.</p>
                    <p><b>Estado:</b> Último año (110/134 créditos cursados y aprobados).</p>
                    <p>Estudiar Ciencia de Datos en la Pontificia Universidad Javeriana me ha brindado una solida formación en el campo del Análisis de Datos y el Aprendizaje Automático. A través de las enseñanzas teóricas y prácticas, he adquirido habilidades para el manejo de grandes volúmenes de datos, la aplicación de algoritmos de aprendizaje automático y la implementación de modelos de análisis predictivo. Además, la universidad cuenta con una amplia oferta de cursos tanto en la facultad de Ingeniería como en la de Ciencias, lo que me ha permitido tener contacto con proyectos actuales en el campo y poner en práctica los conocimientos adquiridos.</p>
                    <p>El programa se divide en 4 grandes núcleos:</p>
                    <ul>
                        <li>Formación en Computación (28cr): Estructuras de Datos, Bases de Datos, Procesamiento de Datos a Gran escala, Técnicas de Aprendizaje Automático, Programación Avanzada, entre otros.</li>
                        <li>Formación en Ciencias Económicas (15cr): Microeconomía, Teoría Administrativa, Gestión de Proyectos, entre otros.</li>
                        <li>Formación en Matemáticas (27cr): Optimización, Inferencia, Análisis multivariado, Análisis de Regresión, entre otros.</li>
                        <li>Formación en Comunicación (10cr): Visualización de Datos, Narrativa de Datos, entre otros.</li>
                    </ul>
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container>
                    <Grid item xs={'auto'}>
                        <img src={MSland} width='80hv' alt='LogoMicrosoft'></img>
                    </Grid>
                    <Grid item xs marginX={'10hv'}>
                        <Typography sx={{ fontWeight: '700', textAlign: 'left', fontSize: { xs: '4.9vw', md: '2.9vw', xl: '1.9vw' } }} color='secondary'>
                            Azure Data Scientist Associate DP-100.
                        </Typography>
                    </Grid>
                </Grid>
                <Typography>
                    <p><b>Título:</b> Científico de Datos asociado de Azure.</p>
                    La certificación Azure DP-100 es una certificación de nivel especialista de Microsoft Azure que se centra en los datos y en cómo utilizar Azure Data Factory, Azure Stream Analytics y Azure Databricks para crear soluciones de análisis de datos en la nube. Los candidatos que obtienen esta certificación demuestran que tienen habilidades para crear soluciones de análisis de datos avanzadas en Azure, lo que les permite procesar, almacenar y analizar grandes volúmenes de datos en tiempo real, con el objetivo de obtener información valiosa para la toma de decisiones.

                    <p> Me gustaría aplicar estas habilidades en su empresa para ayudar a obtener información valiosa a través del análisis de sus datos y contribuir a la toma de decisiones informadas.</p>
                </Typography>
                <Grid container justifyContent={'left'} spacing={2} marginY={'2vh'}>
                    <Grid item>
                    <Button component={Rlink} to={'/examples/medi'} className='button-28' variant='contained'>
                            Más información
                        </Button>
                    </Grid>
                    <Grid item>
                    <Button className='button-28' variant='contained'>
                            Certificación
                        </Button>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container>
                    <Grid item xs={'auto'}>
                        <img src={MSland} width='80hv' alt='LogoMicrosoft'></img>
                    </Grid>
                    <Grid item xs marginX={'10hv'}>
                        <Typography sx={{ fontWeight: '700', textAlign: 'left', fontSize: { xs: '4.9vw', md: '2.9vw', xl: '1.9vw' } }} color='secondary'>
                            Azure Data Engineer Associate DP-203.
                        </Typography>
                    </Grid>
                </Grid>
                <Typography>
                <p><b>Título:</b> Ingeniero de Datos asociado de Azure.</p>
                    <p>Mi certificación Azure DP-203 como ingeniero de datos asociado me ha brindado habilidades valiosas en la integración, transformación y consolidación de datos de varios sistemas estructurados y no estructurados en estructuras adecuadas para la creación de soluciones de análisis. Me ha permitido ayudar a las partes interesadas a comprender los datos mediante la exploración, creación y mantenimiento de canalizaciones de procesamiento de datos seguras y conformes, utilizando diferentes herramientas y técnicas en Azure.</p>

                    <p>Mi experiencia en el uso de varios lenguajes y servicios de datos de Azure me permite almacenar y generar conjuntos de datos limpios y mejorados para su análisis. También me especializo en garantizar que las canalizaciones de datos y los almacenes de datos son de alto rendimiento, eficientes, organizados y confiables, dado un conjunto específico de requisitos y restricciones empresariales. Mi capacidad para manejar rápidamente imprevistos y minimizar la pérdida de datos me permite diseñar, implementar, supervisar y optimizar plataformas de datos para satisfacer las necesidades de la canalización de datos.</p>

                    <p>Con un conocimiento sólido de lenguajes de procesamiento de datos como SQL, Python o Scala, y comprensión de patrones de arquitectura de datos y procesamiento paralelo, estoy preparado para enfrentar los desafíos de la industria y ayudar a las empresas a obtener información valiosa a partir del análisis de sus datos. Mi certificación Azure DP-203 es una prueba de mi capacidad para desempeñar el rol de un ingeniero de datos asociado de manera eficiente y efectiva.</p>
                </Typography>
                <Grid container justifyContent={'left'} spacing={2} marginY={'2vh'}>
                    <Grid item>
                    <Button className='button-28' variant='contained'>
                            Más información
                        </Button>
                    </Grid>
                    <Grid item>
                    <Button className='button-28' variant='contained'>
                            Certificación
                        </Button>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <Grid container>
                    <Grid item xs={'auto'}>
                        <img src={AWSland} width='80hv' alt='LogoAWS'></img>
                    </Grid>
                    <Grid item xs marginX={'10hv'}>
                        <Typography sx={{ fontWeight: '700', textAlign: 'left', fontSize: { xs: '4.9vw', md: '2.9vw', xl: '1.9vw' } }} color='secondary'>
                            AWS Certified Machine Learning - Specialty.
                        </Typography>
                    </Grid>
                </Grid>
                <Typography>
                <p><b>Título:</b> Especialista en Machine Learning en AWS.</p>
                La Especialidad en Machine Learning de AWS, llamada AWS Certified Machine Learning - Specialty, está dirigida a profesionales con experiencia en desarrollo, arquitectura y ejecución de cargas de trabajo de Machine Learning o Aprendizaje Profundo en la nube de AWS. Se requiere al menos dos años de experiencia práctica en estas áreas y se recomienda tener habilidades en expresar la intuición detrás de algoritmos básicos de ML, optimizar hiperparámetros, trabajar con marcos de aprendizaje profundo y seguir las mejores prácticas operativas, de despliegue y de entrenamiento de modelos. El examen está diseñado para evaluar estas habilidades y certificar a los candidatos en su conocimiento y habilidades en el campo de Machine Learning en AWS.
                </Typography>
                <Grid container justifyContent={'left'} spacing={2} marginY={'2vh'}>
                    <Grid item>
                    <Button className='button-28' variant='contained'>
                            Más información
                        </Button>
                    </Grid>
                    <Grid item>
                    <Button className='button-28' variant='contained'>
                            Certificación
                        </Button>
                    </Grid>
                </Grid>
            </TabPanel>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                centered
                textColor='inherit'
                indicatorColor='primary'

            >
                <Tab label="Título Profesional" />
                <Tab label="Azure DP-100" />
                <Tab label="Azure DP-203" />
                <Tab label="AWS: Machine Learning Specialist" />
            </Tabs>
        </Box>
    );
}