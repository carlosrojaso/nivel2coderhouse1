// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  nisum: require("../assets/nisum.png"),
  proinchile: require("../assets/proinchile.png"),
  logo: require("../assets/logo.jpg"),
  coderhouse: require("../assets/coderhouse.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Clase 01: Programador WEB
            </Heading>            
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              ¿ Qué es JavaScript?
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Proporcione alternativas equivalentes para el contenido visual y auditivo.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">No se base sólo en el color.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              ¿Como incluir JavaScript en nuestro archivo?
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea títulos de página únicos y precisos.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utiliza la metaetiqueta description.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">URL sencillas sugieren el contenido de la página.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Las URL se muestran en los resultados de búsqueda.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Sintaxis
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea títulos de página únicos y precisos.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utiliza la metaetiqueta description.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">URL sencillas sugieren el contenido de la página.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Las URL se muestran en los resultados de búsqueda.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Palabras reservadas
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea títulos de página únicos y precisos.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utiliza la metaetiqueta description.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">URL sencillas sugieren el contenido de la página.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Las URL se muestran en los resultados de búsqueda.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Variables
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea títulos de página únicos y precisos.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utiliza la metaetiqueta description.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">URL sencillas sugieren el contenido de la página.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Las URL se muestran en los resultados de búsqueda.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Tipos de variables
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea títulos de página únicos y precisos.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utiliza la metaetiqueta description.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">URL sencillas sugieren el contenido de la página.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Las URL se muestran en los resultados de búsqueda.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Operadores
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Crea títulos de página únicos y precisos.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Utiliza la metaetiqueta description.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">URL sencillas sugieren el contenido de la página.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Las URL se muestran en los resultados de búsqueda.</Text>
          </Slide>
          
        </Deck>
      </Spectacle>
    );
  }
}
