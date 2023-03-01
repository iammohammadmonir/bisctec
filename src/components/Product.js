import { useState } from 'react';
import data from '../data/productsData';
import FormRow from './FormRow';

const Product = () => {
  const [productPopup, setProductPopup] = useState([]);
  const [productPopupClose, setProductPopupClose] = useState(false);

  const changeContent = (product) => {
    setProductPopup(product);
    setProductPopupClose(!productPopupClose);
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
                  <form className='form'>
                    <h2 className='mb-50'>{productPopup}</h2>
                    <div className='row mb-20'>
                      <div className='col-lg-6'>
                        <FormRow type='text' name='Ihr Name' />
                      </div>
                      <div className='col-lg-6'>
                        <FormRow type='text' name='Ihr Name' />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <FormRow type='text' name='Email' />
                      </div>
                      <div className='col-lg-6'>
                        <FormRow type='text' name='Phone' />
                      </div>
                    </div>
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
