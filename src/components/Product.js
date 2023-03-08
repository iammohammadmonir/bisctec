import { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../data/productsData';
import Loading from './Loading';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import { BsXCircleFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import InqueryForm from './InqueryForm';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper';

const Product = () => {
  const navigate = useNavigate();
  const { alertType, isLoading } = useAppContext();
  const [productPopup, setProductPopup] = useState([]);
  const [productPopupClose, setProductPopupClose] = useState(false);

  const changeContent = (product) => {
    setProductPopup(product);
    setProductPopupClose(!productPopupClose);
  };

  useEffect(() => {
    if (alertType === 'success') {
      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 4000);
    }
  }, [alertType === 'success', navigate]);
  return (
    <Wrapper className='section-padding bg-dark-v2'>
      <div className='container'>
        <div className='heading text-center mb-30'>
          <h6>Our Best</h6>
          <h2>Produkte</h2>
        </div>
        <div className='row'>
          {data.map((product) => {
            return (
              <div
                onClick={() => changeContent(product)}
                key={product.id}
                className='col-lg-4'
              >
                <div className='product'>
                  <img
                    className='img-fluid'
                    src={product.image}
                    alt={product.title}
                  />
                  <div className='product-info'>
                    <h5 className='mb-0'>{product.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {productPopupClose && (
          <div className='product-popup'>
            <div className='product-popup-body'>
              <div onClick={changeContent} className='close'>
                <BsXCircleFill />
              </div>
              <div className='product-popup-content'>
                <div>
                  <div className='project-header text-center'>
                    <h5>{productPopup.title}</h5>
                  </div>
                  <div>
                    <Swiper
                      autoHeight={true}
                      pagination={true}
                      loop={true}
                      navigation={true}
                      autoplay={{
                        delay: 2500000,
                      }}
                      grabCursor={true}
                      effect={'creative'}
                      creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -300],
                        },
                        next: {
                          translate: ['100%', 0, 0],
                        },
                      }}
                      modules={[
                        Autoplay,
                        EffectCreative,
                        Pagination,
                        Navigation,
                      ]}
                      className='product-slider'
                    >
                      <SwiperSlide>
                        <InqueryForm />
                      </SwiperSlide>

                      {productPopup.slider.map((slide) => {
                        const { image, id, size, name } = slide;
                        return (
                          <SwiperSlide key={id}>
                            <div className='product-slider-img'>
                              <div className='product-size'>
                                <h5 className='mb-0'>{size}</h5>
                              </div>
                              <img className='img-fluid' src={image} alt={id} />
                              <div className='product-name'>
                                <h5 className='mb-0'>{name}</h5>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoading && (
          <div className='isloading'>
            <div className='loading-mid'>
              <div className='text-center'>
                <Loading />
                <h4>Accepting request...</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .inq-form {
    margin-top: 10px;
    @media (min-width: 992px) {
      display: grid;
      gap: 1rem;
      margin-top: 5px;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
  .layout-2 {
    margin-top: 10px;

    @media (min-width: 992px) {
      display: grid;
      gap: 1rem;
      margin-top: 5px;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
  .inq-input.desire {
    @media (min-width: 992px) {
      display: grid;
      gap: 50px;
      grid-template-columns: 7fr 5fr;
    }
  }

  .input-row.one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    @media (min-width: 992px) {
      margin-bottom: 0;
    }
    .width {
      width: 80px;
      @media (min-width: 992px) {
        width: 90px;
      }
    }
    .height {
      width: 80px;
      @media (min-width: 992px) {
        width: 90px;
      }
    }
    .form-sign {
      width: 30px;
      text-align: center;
      @media (min-width: 992px) {
        width: 50px;
      }
    }
  }
  .input-row.two {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .side-input {
      input {
        width: 60px;
        margin-right: 5px;
      }
    }
  }
  .contact {
    a {
      text-decoration: none;
      color: #fff;
      &:hover {
        text-decoration: underline;
        color: var(--blue) !important;
      }
    }
  }

  .inq-label {
    font-size: 14px;
  }

  .isloading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999999999;
    .loading-mid {
      max-width: 800px;
      height: auto;
      background-color: var(--color-dark-v1);
      padding: 20px;
      overflow: auto;
      border-radius: 6px;
    }
  }
  .thanks {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--color-red) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999999999;
  }
  .product-popup-content {
    max-width: 800px;
  }
  .product-slider-img {
    position: relative;
    .product-size {
      text-align: center;
      position: absolute;
      padding: 10px;
      margin: auto;
      top: 5px;
      width: 100%;
      h5 {
        color: var(--color-blue);
        background-color: rgba(255, 255, 255, 0.5);
        display: inline-block;
        padding: 2px 15px;
        border: 1px solid var(--color-blue);
        border-radius: 4px;
      }
    }
    .product-name {
      text-align: center;
      position: absolute;
      padding: 10px;
      margin: auto;
      width: 100%;
      bottom: 20px;
      h5 {
        color: var(--color-red);
        background-color: rgba(255, 255, 255, 0.5);
        display: inline-block;
        padding: 2px 15px;
        border: 1px solid var(--color-red);
        border-radius: 4px;
      }
    }
  }
`;

export default Product;
