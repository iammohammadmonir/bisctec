import React, { useState } from 'react';
import data from '../data/servicesData';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const Services = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='heading  mt-30 mb-50'>
              <h6>Our Awesome</h6>
              <h2>Services</h2>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className=''>
              {data.map((question, i) => {
                return (
                  <div className='faqs' key={question.id}>
                    <button
                      className={selected === i ? 'header active' : 'header'}
                      onClick={() => toggle(i)}
                    >
                      <div className='header-title'> {question.title}</div>
                      <div className='header-icon'>
                        {selected === i ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </button>
                    <div
                      className={selected === i ? 'content show' : 'content'}
                    >
                      {question.content}

                      {question.list ? (
                        <div className='faq-list'>
                          <ul>
                            {question.list.map((item) => {
                              return <li key={item.id}>{item.listItem}</li>;
                            })}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
