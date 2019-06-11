import * as React from 'react';
import styled from 'styled-components';

///styling

const Banner = styled.div`
    display: flex;
    flex-direction: row;
    background:#a73f2d;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3em;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;

    @media only screen and (min-width: 30em) and (max-width: 47.75rem) {
      font-size: 1em; 
    }
    
    @media only screen and (min-width: 47.75rem) and (max-width: 64rem) {
      font-size: 1.5em;
    }

    @media only screen and (min-width: 64rem) {
        font-size: 1.5em;
    }
`;

///

class Footer extends React.Component<object> {

    render() {
        
        return(
            <Banner>Made courtesy of Hector Ariceaga</Banner>
        );
    }
}

export default Footer;