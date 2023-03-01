import styled from 'styled-components';
import LogoImg from '../assets/img/logo.svg';
const Header = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <img src={LogoImg} alt='Logo' />
          </div>
          <div className='menu'>Home</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
  .navbar {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      img {
        width: 150px;
        height: auto;
        display: flex;
      }
    }
  }
`;

export default Header;
