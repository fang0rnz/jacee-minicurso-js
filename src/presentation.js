// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Fill,
  CodePane,
  Image
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import styled from 'react-emotion';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);
const bg =
  'https://wallpapertag.com/wallpaper/full/e/c/2/20516-vaporwave-wallpaper-1920x1080-for-full-hd.jpg';
const styleProps = {
  bgColor: 'black'
};

const BigEmoji = styled('span')`
  font-size: 200px;
`;
export default class Presentation extends React.Component {
  render() {
    return <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary" bgImage="
          https://static.tumblr.com/f39d9cf23b76436897bf8f30c5907149/g1wmm1e/njqog600a/tumblr_static_tumblr_static_8zvmg4u2ymg40w88444s88kkk_640.gif
          ">
          <Heading size={1} fit bgColor="black" caps lineHeight={1} textColor="primary">
            O MUNDO DO JAVASCRIPT -
          </Heading>
          <Heading size={1} fit bgColor="black" caps lineHeight={1} textColor="primary">
            APLICAÇÕES MODERNAS DA LÍNGUA FRANCA DA WEB
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" bgImage="https://wallpapertag.com/wallpaper/full/e/c/2/20516-vaporwave-wallpaper-1920x1080-for-full-hd.jpg">
          <Heading size={4} bgColor="black" textColor="primary" caps>
            Javascript? Pra quê?
          </Heading>
          <BigEmoji class="emoji">🤔</BigEmoji>
          <List>
            <Appear>
              <ListItem>Microcontroladores</ListItem>
            </Appear>
            <Appear>
              <ListItem>Servidores</ListItem>
            </Appear>
            <Appear>
              <ListItem>Bancos de dados</ListItem>
            </Appear>
            <Appear>
              <ListItem>Aplicações mobile</ListItem>
            </Appear>
            <Appear>
              <ListItem>Aplicações desktop</ListItem>
            </Appear>
            <Appear>
              <ListItem>Single page applications</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} textColor="primary" bgColor="secondary">
          <BlockQuote>
            <Quote>
              "Any application that can be written in JavaScript, will
              eventually be written in JavaScript"
            </Quote>
            <Cite>Jeff Atwood</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['zoom', 'slide']} textColor="secondary" bgImage={bg} bgColor="primary">
          <Heading textColor="secondary">Atribuição</Heading>
          <br />
          <CodePane lang="javascript" source={`const person = 'Nick';
person = 'John'; // Erro! person não pode ser reatribuida
let person = 'Nick';
person = 'John';
console.log(person); // "John", reatribuição permitida com let
`} theme="dark" />
        </Slide>
        <Slide transition={['zoom', 'slide']} textColor="secondary" bgImage={bg} bgColor="primary">
          <Heading textColor="secondary">Função</Heading>
          <br />
          <CodePane lang="javascript" source={`function double(x) {
  return x * 2;
} // Jeito tradicional
console.log(double(2)); // 4


const double = x => x * 2; // Mesma função escrita como arrow function com return implícito
console.log(double(2)); // 4
`} theme="dark" />
        </Slide>
        <Slide transition={['zoom', 'slide']} textColor="secondary" bgImage={bg} bgColor="primary">
          <Heading textColor="secondary">Array</Heading>
          <br />
          <CodePane lang="javascript" source={`var meals = ['breakfast', 'lunch', 'dinner'];
meals.push('brunch');

console.log(meals);
//['breakfast', 'lunch', 'dinner', 'brunch'];

meals.splice(1, 1);

console.log(meals);
//['breakfast', 'dinner', 'brunch'];
`} theme="dark" />
        </Slide>
        <Slide transition={['zoom', 'slide']} textColor="secondary" bgImage={bg} bgColor="primary">
          <Heading textColor="secondary">Objeto</Heading>
          <br />
          <CodePane lang="javascript" source={`const objeto = { propriedade: 'lorem', propriedadedois: 'ipsum' };
console.log(objeto);
//{propriedade: "lorem", propriedadedois: "ipsum"}

objeto.maisuma = 'criatividadezero';

console.log(objeto);
//{ propriedade: "lorem", propriedadedois: "ipsum", maisuma: "criatividadezero" }
`} theme="dark" />
        </Slide>
        <Slide transition={['fade']} textColor="secondary" bgImage={'http://wallpaperheart.com/wp-content/uploads/2018/05/vaporwave-wallpapers-1.jpg'} bgColor="primary">
          <Heading bgColor="black" textColor="primary">
            Hands on!
          </Heading>
          <BigEmoji>🎊</BigEmoji>
        </Slide>

        <Slide transition={['fade']} textColor="secondary" bgImage={'http://wallpaperheart.com/wp-content/uploads/2018/05/vaporwave-wallpapers-1.jpg'} bgColor="primary">
          <Heading size={2} bgColor="black" textColor="primary">
            Assincronicidade
          </Heading>
          <Image src="https://image.slidesharecdn.com/javascriptlevelup-150929100238-lva1-app6892/95/javascript-levelup-by-lee-brandt-14-638.jpg?cb=1443521069" />
        </Slide>
      </Deck>;
  }
}
