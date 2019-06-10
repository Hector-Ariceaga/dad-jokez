import React from 'react';
import styled from 'styled-components';

///styling
const JokeText = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
`

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1)
  }

  50% {
    transform: scale3d(1.1, 1.1, 1.1)
  }

  to{
    transform: scale3d(1, 1, 1)
  }
`;

const Loading = styled.div`
  display: inline-block;
  animation: ${pulse} 2s infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

///

export default class Joke extends React.Component<Props, object> {
  render() {
    const { isLoading, currentJoke } = this.props;

    if ( isLoading === true) {
      return ;
    }

    return (
      <JokeText>
        {currentJoke}
      </JokeText>
    );
  }
}
