import React from 'react';
import styled from 'styled-components';
import videoBg from '../assets/img/main.mp4';
const Hero = () => {
  return (
    <Wrapper id='home' className='hero'>
      <video src={videoBg} autoPlay loop muted />
      <div className='content'>
        <h1>
          <span className='text-red'>bi</span>g{' '}
          <span className='text-green'>sc</span>reen{' '}
          <span className='text-blue'>te</span>chnology GmbH
        </h1>
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
    bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    color: white;
    h1 {
      background-color: rgba(0, 0, 0, 0.2);
      margin-bottom: 0 !important;
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 24px;
      @media (min-width: 992px) {
        font-size: 48px;
      }
    }
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
