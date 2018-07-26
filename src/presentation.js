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
    secondary: '#1F1822',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);
const bg = 'statue.jpg';
const styleProps = {
  bgColor: 'black'
};

const BigEmoji = styled('span')`
  font-size: 180px;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['zoom']}
          bgColor="primary"
          bgImage="
          glitch.gif
          "
        >
          <Heading
            size={1}
            fit
            bgColor="black"
            caps
            lineHeight={1}
            textColor="primary"
          >
            O MUNDO DO JAVASCRIPT -
          </Heading>
          <Heading
            size={1}
            fit
            bgColor="black"
            caps
            lineHeight={1}
            textColor="primary"
          >
            APLICAÇÕES MODERNAS DA LÍNGUA FRANCA DA WEB
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" bgImage={bg}>
          <Heading size={4} bgColor="black" textColor="primary" caps>
            Javascript? Pra quê?
          </Heading>
          <BigEmoji aria-label="emoji" role="img" class="emoji">
            🤔
          </BigEmoji>
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
        <Slide
          transition={['zoom', 'slide']}
          textColor="secondary"
          bgImage={bg}
          bgColor="primary"
        >
          <Heading textColor="secondary">Atribuição</Heading>
          <br />
          <CodePane
            textSize={18}
            lang="javascript"
            source={`const person = 'Nick';
person = 'John'; // Erro! person não pode ser reatribuida
let person = 'Nick';
person = 'John';
console.log(person); // "John", reatribuição permitida com let
`}
            theme="dark"
          />
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
          textColor="secondary"
          bgImage={bg}
          bgColor="primary"
        >
          <Heading textColor="secondary">Função</Heading>
          <br />
          <CodePane
            textSize={18}
            lang="javascript"
            source={`function double(x) {
  return x * 2;
} // Jeito tradicional
console.log(double(2)); // 4


const double = x => x * 2; // Mesma função escrita como arrow function com return implícito
console.log(double(2)); // 4
`}
            theme="dark"
          />
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
          textColor="secondary"
          bgImage={bg}
          bgColor="primary"
        >
          <Heading textColor="secondary">Array</Heading>
          <br />
          <CodePane
            textSize={18}
            lang="javascript"
            source={`var meals = ['breakfast', 'lunch', 'dinner'];
meals.push('brunch');

console.log(meals);
//['breakfast', 'lunch', 'dinner', 'brunch'];

meals.splice(1, 1);

console.log(meals);
//['breakfast', 'dinner', 'brunch'];
`}
            theme="dark"
          />
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
          textColor="secondary"
          bgImage={bg}
          bgColor="primary"
        >
          <Heading textColor="secondary">Objeto</Heading>
          <br />
          <CodePane
            textSize={18}
            lang="javascript"
            source={`const objeto = { propriedade: 'lorem', propriedadedois: 'ipsum' };
console.log(objeto);
//{propriedade: "lorem", propriedadedois: "ipsum"}

objeto.maisuma = 'criatividadezero';

console.log(objeto);
//{ propriedade: "lorem", propriedadedois: "ipsum", maisuma: "criatividadezero" }
`}
            theme="dark"
          />
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
          textColor="secondary"
          bgImage={bg}
          bgColor="primary"
        >
          <Heading textColor="secondary">Classe</Heading>
          <br />
          <CodePane
            textSize={18}
            lang="javascript"
            source={`class Geladeira {
  constructor() {
    this.items = ['ovo', 'peixe', 'arroz'];
  }

  printItems() {
    console.log(this.items);
  }

  addItems(item) {
    this.items.push(item);
    console.log(\`\${item} adicionado com sucesso!\`);
  }
}
`}
            theme="dark"
          />
        </Slide>
        <Slide
          transition={['fade']}
          textColor="secondary"
          bgImage="mac.png"
          bgColor="primary"
        >
          <Heading bgColor="black" textColor="primary">
            Hands on!
          </Heading>
          <BigEmoji aria-label="emoji" role="img">
            🎊
          </BigEmoji>
        </Slide>

        <Slide
          transition={['fade']}
          textColor="secondary"
          bgImage="mac.png"
          bgColor="primary"
        >
          <Heading size={2} bgColor="black" textColor="primary">
            Assincronicidade
          </Heading>
          <Image src="js.png" />
        </Slide>
        <Slide
          transition={['slide']}
          textColor="secondary"
          bgImage="mac.png"
          bgColor="primary"
        >
          <Appear>
            <List bold textColor="primary">
              <Appear>
                <ListItem>Callbacks</ListItem>
              </Appear>
              <Appear>
                <ListItem>Promises</ListItem>
              </Appear>
              <Appear>
                <ListItem>Async/await</ListItem>
              </Appear>
              <Appear>
                <ListItem>Generators</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>
        <Slide
          bgImage="http://www.grup-pumsa.cat/uploadwallimgs/b/74/742864_vaporwave-wallpaper-hd.jpg"
          transition={['slide']}
          textColor="primary"
          bgColor="primary"
        >
          <Appear>
            <Heading size={3} textColor="secondary">
              Qual usar?<BigEmoji aria-label="emoji" role="img">
                🤔
              </BigEmoji>
            </Heading>
          </Appear>
        </Slide>

        <Slide
          bgImage="http://www.grup-pumsa.cat/uploadwallimgs/b/74/742864_vaporwave-wallpaper-hd.jpg"
          transition={['slide']}
          textColor="primary"
          bgColor="primary"
        >
          <Heading size={3} textColor="secondary">
            Callbacks
          </Heading>
          <CodePane
            textSize={18}
            lang="javascript"
            source={`func1(function(value1) {
  func2(value1, function(value2) {
    func3(value2, function(value3) {
      func4(value3, function(value4) {
        func5(value4, function(value5) {
          // Do something with value 5
        });
      });
    });
  });
});
`}
            theme="dark"
          />
          <Appear>
            <BigEmoji aria-label="emoji" role="img">
              🤢
            </BigEmoji>
          </Appear>
        </Slide>
        <Slide
          bgImage="http://www.grup-pumsa.cat/uploadwallimgs/b/74/742864_vaporwave-wallpaper-hd.jpg"
          transition={['slide']}
          textColor="primary"
          bgColor="primary"
        >
          <Heading size={3} textColor="secondary">
            Promises!
          </Heading>
          <CodePane
            textSize={18}
            lang="javascript"
            source={`func1(value1)
  .then(func2)
  .then(func3)
  .then(func4)
  .then(func5, value5 => {
    // Do something with value 5
  });


  new Promise((resolve, reject) =>
    reject(new Error('Failed to fulfill Promise')))
        .catch(reason => console.log(reason));
`}
            theme="dark"
          />
          <Appear>
            <BigEmoji aria-label="emoji" role="img">
              👍
            </BigEmoji>
          </Appear>
        </Slide>
        <Slide
          bgImage="http://www.grup-pumsa.cat/uploadwallimgs/b/74/742864_vaporwave-wallpaper-hd.jpg"
          transition={['slide']}
          textColor="primary"
          bgColor="primary"
        >
          <Heading size={3} textColor="secondary">
            Async/await
          </Heading>
          <CodePane
            textSize={18}
            lang="javascript"
            source={`var request = require('request');

function getJSON(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      resolve(body);
    });
  });
}

async function main() {
  var data = await getJSON();
  console.log(data); // NOT undefined!
}

main();
`}
            theme="dark"
          />
          <Appear>
            <BigEmoji aria-label="emoji" role="img">
              👌👌👌
            </BigEmoji>
          </Appear>
        </Slide>
        <Slide
          transition={['fade']}
          textColor="secondary"
          bgImage={'windows.jpg'}
          bgColor="primary"
        >
          <Heading bgColor="black" textColor="primary">
            Demo time!
          </Heading>
          <BigEmoji aria-label="emoji" role="img">
            😉
          </BigEmoji>
          <Slide
            transition={['fade']}
            textColor="secondary"
            bgImage={'windows.jpg'}
            bgColor="primary"
          >
            <Heading bgColor="black" textColor="primary">
              twitter / telegram: @fang0rnz
            </Heading>
            <BigEmoji aria-label="emoji" role="img">
              Demo time! 😉
            </BigEmoji>
          </Slide>
        </Slide>
      </Deck>
    );
  }
}
