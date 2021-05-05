import React from 'react';
import logo from '../../assets/logo.svg';
import { Container, Content } from './style';

export function Header(): JSX.Element {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button">New transaction</button>
      </Content>
    </Container>
  );
}
