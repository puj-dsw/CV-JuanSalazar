import { Typography, Grid } from '@mui/material';
import React from 'react'
import Layoutmain from '../Layoutmain';


function Medi() {
  return (
    <Layoutmain>
      <div style={{
        width: "90%",
        margin: "0 auto"
      }}>
        <Grid container>
          <Grid item xs>
            <Typography>
              <h1>Visualización de Fuerza Interactiva en D3.js</h1>
              <p>Esta visualización utiliza D3.js para representar datos en forma de una red, donde los nodos están conectados por líneas. La interacción del usuario con la visualización permite explorar la estructura de la red y ver cómo están relacionados los nodos entre sí.</p>
              <p>La visualización de Fuerza en D3.js es un algoritmo que simula las fuerzas físicas en un sistema para determinar la posición de los nodos en la pantalla. Esto hace que los nodos más cercanos se atraigan y los más alejados se repelan, creando una representación visual clara de las relaciones entre los datos.</p>
              <p>La interacción con la visualización permite al usuario hacer clic y arrastrar los nodos para explorar la estructura de la red. También puede acercar y alejar la visualización para tener una mejor comprensión de los detalles de la red y de cómo están conectados los nodos entre sí.</p>
              <p>En resumen, esta visualización de Fuerza en D3.js es una herramienta poderosa para explorar y entender los datos en forma de red, y su interacción hace que la experiencia sea más intuitiva y enriquecedora.</p>
            </Typography>
          </Grid>
          <Grid item xs={12} padding={3}>
            <iframe src="../docplex.html" width="100%" height={500} title='Docplex'></iframe>
          </Grid>

        </Grid>


      </div>
    </Layoutmain>
  )
}

export default Medi