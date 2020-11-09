import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        color: ${props => props.colored ? 'tomato' : 'black'};
        font-size: 26px;
        :hover {
            color: green;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = () => {
    return (
        <Header colored as='a'>
            <h1>Povolocico Dmitrii</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}

export default AppHeader;