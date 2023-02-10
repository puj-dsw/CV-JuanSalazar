# Juan Esteban Salazar Villamizar - CV Web App

El sitio web está siendo desarrollado en React, y Hosteado en una Static Web App de Azure, El código está disponible en un repositorio de GitHub y su Main Branch ejecuta un workflow que contiene acciones para el despliegue de la App en Azure. El link de la app es:
--- Azure Static Web APP Permission pending...

# Requerimientos: Portfolio web
## Introducción
Los portafolios, y en específico los portafolios web, brindan una herramienta importante en la ampliación de conexiones, la búsqueda de proyectos y ofertas laborales. Tener esta característica en un perfil profesional impulsa el desarrollo personal y laboral.
### Propósito.
Crear un portafolio web para un Científico de Datos que le permita demostrar sus habilidades y experiencia en una colección con certificaciones de educación y proyectos o trabajos anteriores.
### Alcance.
Este proyecto incluye el diseño, construcción y despliegue de una Aplicación web.
# Requerimientos Funcionales
## Página de inicio:
Página principal que deberá incluir una descripción breve, una detallada y las secciones que la componen.
	### Sección de Educación.
Una galería o colección de todas las certificaciones de educación incluyendo títulos profesionales o certificaciones profesionales. Deberá incluir información detallada de las características de cada certificación: Fechas, Contenido y Habilidades relacionadas. También deberá contener o enlazar las pruebas de la certificación como diplomas o actas.
### Sección de Habilidades.
Con un formato distinto pero similar al de educación, una galería de frameworks, lenguajes de programación y software que el Científico domina. Cada habilidad deberá contener una descripción de las habilidades o especificidades de cada entorno dominado y una visualización sencilla sobre el nivel subjetivo de dominio.	
### Sección de Contacto.
Con botones u otro mecanismo de interacción y llamada a la acción, deberán enlazarse otras redes sociales y de contacto con otra o  mayor información. Deberán ser mínimamente: Github, LinkedIn y el correo eléctronico.
## Página de Portafolio:
Una página web que corra una galería de proyectos visualizados en un grid, donde cada proyecto sea un elemento tipo tarjeta que contiene: Imágen de referencia o previsualización, Título, Descripción corta, Llamado a la acción (Botón, Ver más), y Tags de clasificación que existan en la sección de Habilidades de la Página de Inicio.
	### Funcionalidad de búsqueda:
Elemento de búsqueda por texto o por tag (mediante filtros) que permite explorar más fácilmente los proyectos del portafolio. Los resultados debe actualizar el explorador principal de la galería.
	### Funcionalidad de Menú Desplegable:
Menú lateral que permite explorar los diferentes Tags (Habilidades) con dar click actualizando el filtro de búsqueda y con esto el grid del explorador principal. Los tags son acumulables y los disponibles dependen de la selección actual y de los posibles resultados (los tags, o sus combinaciones, que no generen resultados estarán deshabilitados).
	### Componente de Proyecto:
Los proyectos serán un componente, cada uno con su propia página y ruta que permita la visualización de imágenes, texto y otros componentes de la Aplicación principal como Frames con HTML o componentes enteros. Deberá alimentarse de una o varias fuentes de datos que diseñen el markdown de la página del proyecto.
## Página de curriculum vitae:
En esta página estará disponible la visualización completa del CV del Científico de Datos en su versión más reciente, además de llamados a la acción que lleven a la Sección de Contacto dentro de la Página Principal y otro con un botón para descargar el CV en formato PDF.
# Requerimientos no funcionales
## Usabilidad:
Cada componente, página y funcionalidad deberá ser pensada para un usuario final con mediano conocimiento técnico. Nunca se hará necesario que el usuario ejecute por su cuenta actividades distintas a la navegación y búsqueda de contenido. Todos los elementos de la página deberán ser fácilmente encontrables y visibles. 
Cada componente y página deberá tener un diseño responsive desde los móviles pequeños y hasta las resoluciones de desktop 4k. 
Cada componente y página deberá ser probado en un conjunto suficiente de navegadores.
## Estética:
La estética del sitio debe ser consistente y con un aspecto profesional. Deberá implementarse el uso de paletas de colores, tipografía y logos adecuadamente.
## Rendimiento:
El sitio web deberá correr en dispositivos con conexión 10 Mbps con tiempos de carga aceptables. Nunca deberá correr dentro de la aplicación web ningún proceso de visualización no razonable, ni ejecución de código externo. Deberá preferirse la previsualización y el llamado a la acción a otros servicios web con los ejecutables completos.
## Consideraciones de seguridad
El sitio web deberá tener certificación de seguridad, y deberá cumplir con la normativa del RGPD Colombiano y el GPDR de Europa sobre la protección de Datos.
No se recolectará información más allá de estadísticas de navegación o de rendimiento y las que el servicio de Hosting haga de su parte. 
No se usarán servicios de autenticación ni personalización.
## Consideraciones de rendimiento
La aplicación completa no deberá pesar más de 300mb con todos sus componentes sin contar los datos que los alimenten.
El sitio web deberá tener librerías con versiones específicas que garanticen su estabilidad en el despliegue de una Aplicación Web Estática de Azure (Oryx). 






