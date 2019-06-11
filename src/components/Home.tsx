import * as React from 'react';
import Joke from '../components/Joke';
import API from '../utils/API';
import styled, { keyframes } from 'styled-components';

///animation

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

///

///styling

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: auto;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 1em;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);

  @media only screen and (min-width: 30em) and (max-width: 47.75rem) {
    width: 80%
    margin-top: 1em;
  }

  @media only screen and (min-width: 47.75rem) and (max-width: 64rem) {
    width: 80%
    height: auto;
  }
`;

const NewJokeButton = styled.button`
  text-align: center;
  margin: auto;
  box-shadow: 0px 10px 14px -7px #276873;
  background-color: #599ab3;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  outline: 0;
  &:hover {
    background:linear-gradient(to bottom, #1c6975 5%, #599ab3 100%);
    background-color:#1c6975;
  }
  &:active {
    position: relative;
  }

  @media only screen and (min-width: 30rem) {
    font-size: 1.5em;
    padding: 0.3em;
  }

  @media only screen and (min-width: 64rem) {
    font-size: 2em;
  }
`;

const Greeting = styled.h2`
  text-align: center;
  font-size: 2em;
  animation: ${pulse} 2s 3;

  @media only screen and (min-width: 30rem) {
    margin-top: 0em;
    font-size: 3em;
  }

  @media only screen and (min-width: 64rem) {
    font-size: 4em;
  }
`;

///

class Home extends React.Component<object> {
    state = {
      isLoading: true,
      currentJoke: ''
    }

  async getJoke () {
    try {
      let response = await API.get('/', { headers: { 'Accept': 'application/json'}})
      
      let currentJoke = response.data.joke

      this.setState({
        ...this.state, ...{isLoading: false, currentJoke}
      });
    } catch (error) {
        console.log(`Axios request failed: ${error}`);
      }
    }

  async componentDidMount() {
    this.getJoke() 
  }
    

  handleOnClick = () => {
    this.setState({
      ...this.state, ...{isLoading: true}
    });
    this.getJoke();
  }

  render() {

    const { isLoading, currentJoke } = this.state;

    return (
      <>
        <Greeting>Dad Jokes Generator!</Greeting>
        <CenteredContainer>
          <Joke isLoading={isLoading} currentJoke={currentJoke} />
          <NewJokeButton onClick={this.handleOnClick}>Get a new joke!</NewJokeButton>
        </CenteredContainer>
      </>
    );
  }
}

export default Home;