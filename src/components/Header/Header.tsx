import * as React from 'react';
import styled from 'styled-components';

import logo from './logo.png';

const Header = styled.header`
  background-color: #00c692;
  height: 100px;
`;

const Img = styled.img`
  max-height: 100px;
`;

export const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <Img src={logo} alt='Lola' />
    </Header>
  )
};