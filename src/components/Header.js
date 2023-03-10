import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import LogoImg from '../assets/img/logo.svg';
import {
  BsFacebook,
  BsLinkedin,
  BsThreeDotsVertical,
  BsXCircleFill,
  BsYoutube,
} from 'react-icons/bs';

const Header = () => {
  const [productPopupClose, setProductPopupClose] = useState(false);

  const changeContent = () => {
    setProductPopupClose(!productPopupClose);
  };
  return (
    <Wrapper>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={LogoImg} alt='Logo' />
            </Link>
          </div>
          <div onClick={() => changeContent()} className='menu-toggle'>
            <BsThreeDotsVertical />
          </div>
          <div className='menu'>
            <ul>
              <li>
                <Link
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='produkte'
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  Produkte
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='projekt'
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  Projekt
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='technologie'
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  Technologie
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='testimonials'
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='kontakt'
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {productPopupClose && (
          <div className='menu-popup'>
            <div className='container'>
              <div className='row'>
                <div className='col-8 mx-auto'>
                  <div onClick={changeContent} className='close-btn'>
                    <BsXCircleFill />
                  </div>

                  <div className='logo'>
                    <Link to='/'>
                      <img src={LogoImg} alt='Logo' />
                    </Link>
                  </div>
                  <div className='sm-menu'>
                    <ul>
                      <li>
                        <Link
                          onClick={changeContent}
                          className='active-link'
                          to='/'
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={changeContent}
                          className='active-link'
                          to='/impressum'
                        >
                          Impressum
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={changeContent}
                          className='active-link'
                          to='/kontakt'
                        >
                          Kontakt
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='social'>
                    <ul>
                      <li>
                        <a href='https://facebook.com/bisctec'>
                          <BsFacebook />
                        </a>
                      </li>
                      <li>
                        <a href='https://facebook.com/bisctec'>
                          <BsLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href='https://facebook.com/bisctec'>
                          <BsYoutube />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
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
        z-index: 999;
      }
    }
    .menu {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          display: inline-block;

          a {
            color: #fff;
            text-decoration: none;
            padding: 10px 0;
            margin-left: 30px;
            display: block;
            cursor: pointer;

            &.active,
            &:hover {
              color: var(--color-red);
            }
          }
        }
      }
      @media (max-width: 992px) {
        display: none;
      }
    }
    .menu-toggle {
      font-size: 30px;
      display: flex;
      padding: 10px;
      @media (min-width: 992px) {
        display: none;
      }
    }
  }
  .menu-popup {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-dark-v1);

    .logo {
      width: 150px;
      margin: 0 auto;
    }
    .sm-menu {
      margin: 30px 0;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
        li {
          a {
            color: #fff;
            text-decoration: none;
            display: block;
            padding: 8px 0;
            border-top: 1px solid #777;
            border-bottom: 1px solid #777;
            margin: 10px 0;

            &.active,
            &:hover {
              color: var(--color-red);
              background: var(--color-dark-v2);
              border-top: 1px solid var(--color-red);
              border-bottom: 1px solid var(--color-red);
            }
          }
        }
      }
    }
    .social {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
        li {
          display: inline-block;
          a {
            color: #fff;
            display: block;
            font-size: 24px;
            padding: 10px;
            cursor: pointer;
            &:hover {
              color: var(--color-red);
            }
          }
        }
      }
    }
    .close-btn {
      position: absolute;
      top: 10%;
      right: 10%;
      cursor: pointer;
      svg {
        font-size: 30px;
        color: #fff;
        &:hover {
          color: var(--color-red);
        }
      }
    }
  }
`;

export default Header;
