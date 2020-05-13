import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

const Button = styled.button`
background: ${props => props.primary ? "#536ece" : "white"};
color: ${props => props.primary ? "white" : "#536ece"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #536ece;
border-radius: 3px;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: #51493b;
`;

const Wrapper = styled.section`
  background: #eceae6;
  text-align: right;
`;

const Thing = styled.div.attrs((/*props*/) => ({ tabIndex: 0}))`
&:hover {
  color: black; // <Thing> when hovered
}
`;

const linkStyle = {
  marginRight: 15
};

export const Header = () => {
    return(
        <div>
           <Wrapper>
    <Title>
      מקוב-נוף-הוברמן
    </Title>
              <Link href="/dataForm">
                <Button>
                  <Thing>פרטי דירה</Thing>
                </Button>
              </Link>
              <Link href="/about">
                <Button>
                  <Thing>עלינו</Thing>
                </Button>
              </Link>
              <Link href="/">
                <Button primary>
                  <Thing>דף הבית</Thing>
                </Button>
              </Link>
              </Wrapper>
        </div>
    );
  }

export default Header;

{/* <Navbar expand="lg" bg="dark" variant="dark">
              <Link href="/">
                <a style={linkStyle}>Home</a>
              </Link>
              <Link href="/about">
                <a style={linkStyle}>About</a>
              </Link>
              </Navbar> */}