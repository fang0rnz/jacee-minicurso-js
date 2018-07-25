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
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

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
          https://static.tumblr.com/f39d9cf23b76436897bf8f30c5907149/g1wmm1e/njqog600a/tumblr_static_tumblr_static_8zvmg4u2ymg40w88444s88kkk_640.gif
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
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          bgImage="https://thumbs.gfycat.com/DefiniteFixedKestrel-max-1mb.gif"
        >
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
