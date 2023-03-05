import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className='page-hero'>
        <h2>{title}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark-v2);

  h2 {
    margin-bottom: 0 !important;
    font-size: 60px;
  }
`;

export default PageHero;
