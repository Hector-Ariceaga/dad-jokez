import React from 'react';
import Joke from './components/Joke.tsx';
import API from './utils/API'
import styled from 'styled-components';

///styling
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const NewJokeButton = styled.button`
  align-self: center;
`
///

interface State {
  isLoading: boolean;
  currentJoke: string;
}

export default class Home extends React.Component<Props, object> {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      currentJoke: ''
    }
  }

  getJoke = () => {
    try {
      let response = await API.get('/', {
        params: {
          results: 1,
          inc: 'joke'
          }
      })
      .then(response => {
        let joke = response.data.results[0].joke;

        this.setState({
          ...this.state, ...{isLoading: false, joke}
        });
      });
      } catch (error) {
        console.log(`Axios request failed: ${error}`);
      }
    }
  }

  async componentDidMount() {
    getJoke();
  }

  handleOnClick = () => {
    this.setState({
      ...this.state, ...{isLoading: true}
    });
    getJoke();
  }

  render() {
  const { isLoading, currentJoke } = this.state;

    return (
    <CenteredContainer>
      <Joke isLoading={isLoading} currentJoke={currentJoke} />
      <NewJokeButton onClick={this.handleOnClick}>Get a new joke!</NewJokeButton>
    </CenteredContainer>
    );
  }
}
