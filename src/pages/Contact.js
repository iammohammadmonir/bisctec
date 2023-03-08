import {
  BsFillEnvelopeOpenFill,
  BsFillMapFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import styled from 'styled-components';
import FormRow from '../components/FormRow';
import PageHero from '../components/PageHero';

const Contact = () => {
  return (
    <Wrapper>
      <PageHero title='Kontakt' />
      <div className='padding-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <h5 className='text-center'>
                Let us know what are you working on. Wir freuen uns auf Ihre
                Nachricht! Informell per E-Mail, bequem über unser Formular oder
                rufen Sie uns einfach an.
              </h5>
            </div>
          </div>
          <div className='mb-50'></div>
          <div className='col-lg-10 mx-auto'>
            <div className='row'>
              <div className='col-lg-4'>
                <h2 className='mb-50'>Contact Info</h2>
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
              <div className='col-lg-8'>
                <h2 className='mb-50'>Get in Touch</h2>
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
