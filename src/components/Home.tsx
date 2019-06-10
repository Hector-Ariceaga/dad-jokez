import React from 'react';
import Joke from './components/Joke.tsx';
import API from './utils/API'
import styled from 'styled-components';

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
      let jokeData = await API.get('/', {
        params: {
          results: 1,
          inc: 'joke'
          };
        } catch (error) {
          console.log(`Axios request failed: ${error}`);
        }
    });

    jokeData = jokeData.data.results[0].joke;

    this.setState({
      ...this.state, ...{isLoading: false, jokeData}
    });
  }

  async componentDidMount() {
    getJoke();
  }

  handleOnClick = () => {getJoke()};

  render() {
  const { isLoading, currentJoke } = this.state;

    return (
    <div>
      <Joke isLoading={isLoading} currentJoke={currentJoke} />
      <button onClick={this.handleOnClick}>Get a new joke!<button>
    </div>
    );
  }
}
