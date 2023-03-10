import { useState } from 'react';
import styled from 'styled-components';
import FormRow2 from './FormRow2';
import { useAppContext } from '../context/appContext';
import Alert from './Alert';
import { BsTelephoneOutboundFill } from 'react-icons/bs';

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
  image: '',
};

const InqueryForm = () => {
  const { showAlert, displayAlert, createOrder, isLoading } = useAppContext();
  const [productPopup] = useState([]);

  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      projectTitle,
      name,
      email,
      phone,
      width,
      height,
      map,
      side,
      pnote,
      snote,
      company,
      street,
      zip,
      city,
      country,
      image,
    } = values;
    if (
      !projectTitle ||
      !name ||
      !email ||
      !phone ||
      !width ||
      !height ||
      !map ||
      !side ||
      !company ||
      !street ||
      !zip ||
      !city ||
      !country
    ) {
      displayAlert();
      return;
    }
    const data = {
      projectTitle,
      name,
      email,
      phone,
      width,
      height,
      map,
      side,
      pnote,
      snote,
      company,
      street,
      zip,
      city,
      country,
      image,
    };
    createOrder(data);
  };
  return (
    <Wrapper className='from-container'>
      {showAlert && <Alert />}
      <form className='form' onSubmit={onSubmit}>
        <h4 className='mb-30 text-center'>{productPopup}</h4>

        <div className='inq-form'>
          <div className='inq-label'>Projekt-Titel</div>
          <div className='inq-input'>
            <FormRow2
              type='text'
              name='projectTitle'
              value={values.projectTitle}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className='inq-form'>
          <div className='inq-label'>Größe </div>
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
                  &Sigma; {values.height * values.width * values.side} m
                  <sup>2</sup>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='inq-form'>
          <div className='inq-label'>Aufstell-Ort</div>
          <div className='inq-input'>
            <FormRow2
              type='text'
              name='map'
              value={values.map}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className='inq-form file'>
          <div className='inq-label'>Image</div>
          <div className='inq-input'>
            <FormRow2
              type='file'
              name='image'
              value={values.image}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className='inq-form'>
          <div className='inq-label'>Besondere Hinweise</div>
          <div className='inq-input'>
            <FormRow2
              type='text'
              name='pnote'
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
                  name='name'
                  value={values.name}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className='col-lg-6 layout-2'>
              <div className='inq-label'>Firma</div>
              <div className='inq-input'>
                <FormRow2
                  type='text'
                  name='company'
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
                  name='email'
                  value={values.email}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className='col-lg-6 layout-2'>
              <div className='inq-label'>Handy-Nr.</div>
              <div className='inq-input'>
                <FormRow2
                  type='text'
                  name='phone'
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
              <div className='inq-label'>Straße</div>
              <div className='inq-input'>
                <FormRow2
                  type='text'
                  name='street'
                  value={values.street}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className='col-lg-2 layout-2'>
              <div className='inq-label'>PLZ</div>
              <div className='inq-input'>
                <FormRow2
                  type='text'
                  name='zip'
                  value={values.zip}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className='col-lg-3 layout-2'>
              <div className='inq-label'>Ort</div>
              <div className='inq-input'>
                <FormRow2
                  type='text'
                  name='city'
                  value={values.city}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className='col-lg-3 layout-2'>
              <div className='inq-label'>Land</div>
              <div className='inq-input'>
                <FormRow2
                  type='text'
                  name='country'
                  value={values.country}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='inq-form'>
          <div className='inq-label'>Freitext</div>
          <div className='inq-input'>
            <FormRow2
              type='text'
              name='snote'
              value={values.snote}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className='mt-20'>
          <div className='form-footer'>
            <button className='btn submit' type='submit'>
              {isLoading ? 'Loading...' : ' Submit'}
            </button>
            <div className='contact'>
              <div className='d-flex align-center g-1'>
                <div className='tel-icon'>
                  <BsTelephoneOutboundFill />
                </div>
                <div>
                  <div>
                    <a href='tel:+4917657745001'>+49 (176) 577 45 001</a>
                  </div>
                  <div>
                    <a href='tel:+4369910100136'>+43 (699) 10 100 136</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
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
  .inq-form.file input {
    display: flex;
    padding: 2px 3px;
  }
`;

export default InqueryForm;
