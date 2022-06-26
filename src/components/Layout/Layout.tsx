import * as React from 'react';
import styled from 'styled-components';

import { HeaderComponent } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Content } from '../../components/Content/Content';

const Layout = styled.section`
 display: flex;
`;

type Props = {
  children: JSX.Element;
}

export const LayoutContent: React.FC<Props> = ({
  children
}) => {
  return (
    <>
      <HeaderComponent />
      <Layout>
        <Sidebar />
        <Content>
          {children}
        </Content>
      </Layout>
    </>
  );
};