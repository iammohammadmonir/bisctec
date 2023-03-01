import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper className='hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            optio ut nostrum impedit eius asperiores quidem quo iure expedita
            eum mollitia, autem quibusdam accusamus consequatur id corrupti!
            Iusto, placeat explicabo!
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Hero;
