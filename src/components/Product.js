import { useState } from 'react';
import data from '../data/productsData';
import FormRow from './FormRow';

const initialState = {
  projectTitle: '',
  name: '',
  email: '',
  phone: '',
  width: '',
  height: '',
  map: '',
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
    const { projectTitle, width, height, name, email, phone } = values;
    console.log(projectTitle);
  };

  return (
    <div className='section-padding bg-dark-v2'>
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

                    <FormRow
                      type='text'
                      name='projectTitle'
                      labelText='Project Title'
                      value={productPopup}
                      handleChange={handleChange}
                    />

                    <div className='row'>
                      <div className='col-4'>
                        <FormRow
                          type='text'
                          name='width'
                          labelText='Width'
                          value={values.width}
                          handleChange={handleChange}
                        />
                      </div>
                      <div className='col-4'>
                        <FormRow
                          type='text'
                          name='height'
                          labelText='height'
                          value={values.height}
                          handleChange={handleChange}
                        />
                      </div>
                      <div className='col-4'>
                        <div>
                          <label className='form-label'>Width x Height</label>
                        </div>
                        <div className='form-input'>
                          {values.height * values.width} m <sup>2</sup>
                        </div>
                      </div>
                    </div>
                    <FormRow
                      type='text'
                      name='name'
                      labelText='Name'
                      value={values.name}
                      handleChange={handleChange}
                    />
                    <div className='row'>
                      <div className='col-lg-6'>
                        <FormRow
                          type='email'
                          name='email'
                          labelText='Email'
                          value={values.email}
                          handleChange={handleChange}
                        />
                      </div>
                      <div className='col-lg-6'>
                        <FormRow
                          type='text'
                          name='phone'
                          labelText='Phone'
                          value={values.phone}
                          handleChange={handleChange}
                        />
                      </div>
                    </div>
                    <FormRow
                      type='text'
                      name='map'
                      labelText='Google map location link'
                      value={values.map}
                      handleChange={handleChange}
                    />
                    <div className=''>
                      <button className='btn submit' type='submit'>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
