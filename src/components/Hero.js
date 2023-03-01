import React from 'react';
import styled from 'styled-components';
import videoBg from '../assets/img/main.mp4';
const Hero = () => {
  return (
    <Wrapper className='hero'>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='content'>
        <h1>Welcome</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export default Hero;
