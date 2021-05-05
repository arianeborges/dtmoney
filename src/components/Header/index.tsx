import React from 'react';
import logo from '../../assets/logo.svg';

export function Header(): JSX.Element {
  return (
    <header>
      <img src={logo} alt="dt money" />
      <button type="button">New transaction</button>
    </header>
  );
}
