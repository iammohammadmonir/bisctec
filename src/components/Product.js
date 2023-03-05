import { useState } from 'react';
import styled from 'styled-components';
import data from '../data/productsData';
import FormRow2 from './FormRow2';

const initialState = {
  projectTitle: '',
  name: '',
  email: '',
  phone: '',
  width: '',
  height: '',
  map: '',
  side: '',
  pnote: '',
  snote: '',
  company: '',
  street: '',
  zip: '',
  city: '',
  country: '',
};

const Product = () => {
  const [productPopup, setProductPopup] = useState([]);
  const [productPopupClose, setProductPopupClose] = useState(false);

  const changeContent = (product) => {
    setProductPopup(product);
    setProductPopupClose(!productPopupClose);
  };

  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { projectTitle } = values;
    console.log(projectTitle);
  };

  return (
    <Wrapper className='section-padding bg-dark-v2'>
      <div className='container'>
        <div className='heading text-center mb-30'>
          <h6>Our Best</h6>
          <h2>Produkte</h2>
        </div>
        <div className='row'>
          {data.map((product) => {
            const { title, id, image, info } = product;
            return (
              <div
                onClick={() => changeContent(info)}
                key={id}
                className='col-lg-4'
              >
                <div className='product'>
                  <img className='img-fluid' src={image} alt={title} />
                  <div className='product-info'>
                    <h5 className='mb-0'>{title}</h5>
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
                Close
              </div>
              <div className='product-popup-content'>
                <div>
                  <form className='form' onSubmit={onSubmit}>
                    <h2 className='mb-50'>{productPopup}</h2>

                    <div className='inq-form'>
                      <div className='inq-label'>Project Title</div>
                      <div className='inq-input'>
                        <FormRow2
                          type='text'
                          name='projectTitle'
                          value={productPopup}
                          handleChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='inq-form'>
                      <div className='inq-label'>Grobe</div>
                      <div className='inq-input desire'>
                        <div>
                          <div className='input-row one'>
                            <div className='width'>
                              <FormRow2
                                type='text'
                                name='width'
                                value={values.width}
                                handleChange={handleChange}
                              />
                            </div>
                            <div className='form-sign'>x</div>
                            <div className='height'>
                              <FormRow2
                                type='text'
                                name='height'
                                value={values.height}
                                handleChange={handleChange}
                              />
                            </div>
                            <div className='form-sign'>=</div>
                            <div className='result1'>
                              {values.height * values.width} m <sup>2</sup>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='input-row two'>
                            <div className='side-input d-flex align-center'>
                              <div>
                                <FormRow2
                                  type='text'
                                  name='side'
                                  value={values.side}
                                  handleChange={handleChange}
                                />
                              </div>
                              <div>Side</div>
                            </div>
                            <div className=''>
                              &Sigma;{' '}
                              {values.height * values.width * values.side} m
                              <sup>2</sup>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='inq-form'>
                      <div className='inq-label'>Map Location</div>
                      <div className='inq-input'>
                        <FormRow2
                          type='text'
                          name='projectTitle'
                          value={values.map}
                          handleChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='inq-form'>
                      <div className='inq-label'>Project Note</div>
                      <div className='inq-input'>
                        <FormRow2
                          type='text'
                          name='projectTitle'
                          value={values.pnote}
                          handleChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='mb-10'>
                      <div className='row'>
                        <div className='col-lg-6 layout-2'>
                          <div className='inq-label'>Name</div>
                          <div className='inq-input'>
                            <FormRow2
                              type='text'
                              name='projectTitle'
                              value={values.name}
                              handleChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='col-lg-6 layout-2'>
                          <div className='inq-label'>Company</div>
                          <div className='inq-input'>
                            <FormRow2
                              type='text'
                              name='projectTitle'
                              value={values.company}
                              handleChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mb-10'>
                      <div className='row'>
                        <div className='col-lg-6 layout-2'>
                          <div className='inq-label'>Email</div>
                          <div className='inq-input'>
                            <FormRow2
                              type='text'
                              name='projectTitle'
                              value={values.email}
                              handleChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='col-lg-6 layout-2'>
                          <div className='inq-label'>Phone</div>
                          <div className='inq-input'>
                            <FormRow2
                              type='text'
                              name='projectTitle'
                              value={values.phone}
                              handleChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mb-10'>
                      <div className='row'>
                        <div className='col-lg-4 layout-2'>
                          <div className='inq-label'>Street</div>
                          <div className='inq-input'>
                            <FormRow2
                              type='text'
                              name='projectTitle'
                              value={values.street}
                              handleChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='col-lg-2 layout-2'>
                          <div className='inq-label'>Zip</div>
                          <div className='inq-input'>
                            <FormRow2
                              type='text'
                              name='projectTitle'
                              value={values.zip}
                              handleChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 layout-2'>
                          <div className='inq-label'>city</div>
                          <div className='inq-input'>
                            <FormRow2
                              type='text'
                              name='projectTitle'
                              value={values.city}
                              handleChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 layout-2'>
                          <div className='inq-label'>country</div>
                          <div className='inq-input'>
                            <FormRow2
                              type='text'
                              name='projectTitle'
                              value={values.country}
                              handleChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='inq-form'>
                      <div className='inq-label'>Special Note</div>
                      <div className='inq-input'>
                        <FormRow2
                          type='text'
                          name='projectTitle'
                          value={values.snote}
                          handleChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='mt-20'>
                      <div className='form-footer'>
                        <button className='btn submit' type='submit'>
                          Submit
                        </button>
                        <div className='contact'>
                          <div>
                            <a href='tel:+4917657745001'>
                              +49 (176) 577 45 001
                            </a>
                          </div>
                          <div>
                            <a href='tel:+4369910100136'>
                              +43 (699) 10 100 136
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
      gap: 10px;
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
        width: 120px;
      }
    }
    .height {
      width: 80px;
      @media (min-width: 992px) {
        width: 120px;
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
`;

export default Product;
