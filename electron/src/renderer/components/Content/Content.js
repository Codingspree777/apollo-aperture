import React from 'react';
import StyledContentDiv from './Content.styled';
import Sidebar from '../Sidebar';
import Visualization from '../Visualization';

const Content = () => {
  return (
    <StyledContentDiv>
      <Sidebar />
      <Visualization />
    </StyledContentDiv>
  );
};

export default Content;
