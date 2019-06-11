import * as React from 'react';
import styled, { keyframes } from 'styled-components';

///animation

const fadeIn = keyframes`
 from {
   opacity: 0;
 }

 to {
   opacity: 1;
 }
`;

///

///styling

const JokeText = styled.div`
  text-align: center;
  font-size: 1.2em;
  padding: 1em;

  @media only screen and (min-width: 30rem) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 64rem) {
    font-size: 2em;
  }
`;

const TextFadeIn = styled.span`
  animation: ${fadeIn} 2s 1;
`;

///

export interface Props {
  isLoading: boolean;
  currentJoke: string;
}

class Joke extends React.Component<Props, object> {

  render() {

    let display = null;

    const { isLoading, currentJoke } = this.props;

    if ( isLoading === true) {
      //depending on load time could place loading text or image
      display = ''
    } else {
      display = <TextFadeIn>{currentJoke}</TextFadeIn>
    }

    return (
      <JokeText>
        {display}
      </JokeText>
    );
  }
}

export default Joke;
