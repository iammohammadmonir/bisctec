import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            &copy; Copyright 2023 | big screen technology GmbH | Alle Rechte
            vorbehalten | <Link to='/impressum'>Impressum</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px 0;
  background-color: var(--color-dark-v2);
  text-align: center;
  a {
    color: var(--color-red);
  }
`;

export default Footer;
