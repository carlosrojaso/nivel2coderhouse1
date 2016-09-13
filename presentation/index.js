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
            <Text textSize="40px" margin="0px">Lenguaje Interpretado.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Javascript No es Java.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              ¿Como incluir JavaScript en nuestro archivo?
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Interno.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Externo.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Inline.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Sintaxis
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">No se tienen en cuenta los espacios en blanco y las nuevas líneas.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Se distinguen las mayúsculas y minúsculas.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Se pueden incluir comentarios.</Text>
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
            <Text textSize="40px" margin="0px">break.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">case.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">catch.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">continue.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">default.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">delete.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">do.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">else.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">finally.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">for.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">function.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">if.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">in.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">instance of.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">new.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">return.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">switch.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">this.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">throw.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">try.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">typeof.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">var.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">void.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">while.</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">with.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Variables
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">var soyvariable = 1;</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Tipos de variables
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Nombres correctos e incorrectos.
            </Heading>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">Sólo puede estar formado por letras, números y los símbolos $ (dólar) y _ (guión bajo)..</Text>
          </Slide>
          <Slide>
            <Text textSize="40px" margin="0px">El primer carácter no puede ser un número.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
             Numéricas
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
             Cadenas de texto
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
             Arrays
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
             Booleanos
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="gray">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
             Nulos e indefinidos
            </Heading>
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
