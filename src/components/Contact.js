import {
  BsFillEnvelopeOpenFill,
  BsFillMapFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import styled from 'styled-components';
import FormRow from './FormRow';

const Contact = () => {
  return (
    <Wrapper>
      <div id='kontakt' className='padding-80'>
        <div className='container'>
          <div className='heading text-center mb-50'>
            <h2>Kontakt</h2>
          </div>

          <div className='row justify-content-between'>
            <div className='col-lg-7'>
              <form>
                <div className='mb-20'>
                  <FormRow type='text' name='number' labelText='Your Name' />
                </div>
                <div className='mb-20'>
                  <FormRow type='text' name='number' labelText='Email' />
                </div>
                <div className='row mb-20'>
                  <div className='col-lg-6'>
                    <FormRow
                      type='text'
                      name='number'
                      labelText='Phone Number'
                    />
                  </div>
                  <div className='col-lg-6'>
                    <FormRow type='text' name='number' labelText='Company' />
                  </div>
                </div>
                <div>
                  <label className='form-label'>Message</label>
                </div>

                <textarea
                  className='form-textarea mb-20'
                  type='address'
                  cols='30'
                  rows='5'
                ></textarea>
                <div className='d-grid'>
                  <button className='btn submit' type='submit'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className='col-lg-4'>
              <div className='contact-info mb-50'>
                <div className='icon'>
                  <BsFillEnvelopeOpenFill />
                </div>
                <div className='text'>
                  <h4>Email</h4>
                  <p className='mb-0'>info@bisctec.com</p>
                  <p>supplier@bisctec.com</p>
                </div>
              </div>

              <div className='contact-info mb-50'>
                <div className='icon'>
                  <BsFillTelephoneFill />
                </div>
                <div className='text'>
                  <h4>Phone</h4>
                  <p className='mb-0'>
                    <a href='tel:+4917657745001'>+49 (176) 577 45 001</a>
                  </p>
                  <p>
                    <a href='tel:+4369910100136'>+43 (699) 10 100 136</a>
                  </p>
                </div>
              </div>

              <div className='contact-info'>
                <div className='icon'>
                  <BsFillMapFill />
                </div>
                <div className='text'>
                  <h4>Address</h4>
                  <p className='mb-0'>big screen technology GmbH</p>
                  <p className='mb-0'>Zeppelinstr. 73</p>
                  <p>81669 München, Germany</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contact-info {
    display: flex;
    gap: 16px;
    .icon {
      width: 60px;
      height: 60px;
      background-color: var(--color-red);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
    }

    h4 {
      margin-bottom: 10px;
    }

    svg {
      font-size: 30px;
    }
    a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: var(--color-red);
      }
    }
  }
`;

export default Contact;
