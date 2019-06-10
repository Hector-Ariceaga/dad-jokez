import React from 'react';
import styled from 'styled-components';

export default class Joke extends React.Component<Props, object> {
  render() {
    const { isLoading, currentJoke } = this.props;

    if ( isLoading === true) {
      console.log(loading);
    }

    return (
      <div>
        <div>
          {currentJoke}
        </div>
      </div>
    );
  }
}
