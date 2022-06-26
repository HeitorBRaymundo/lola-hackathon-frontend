import * as React from 'react';
import styled from 'styled-components';

const ContentBody = styled.div`
  flex: 6;
  min-height: calc(100vh - 100px);
  padding: 24px;
`;

type Props = {
  children: JSX.Element;
}

export const Content: React.FC<Props> = ({
  children
}) => {
  return (
    <ContentBody>
      {children}
    </ContentBody>
  )
};