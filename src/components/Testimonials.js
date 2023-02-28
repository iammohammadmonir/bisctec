import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

import data from '../data/testimonialsData';

const Testimonials = () => {
  return (
    <section className='section-padding bg-dark-v2'>
      <div className='container'>
        <div className='heading text-center mb-50'>
          <h6>our clients</h6>
          <h2>Kunden-Stimmen</h2>
        </div>
        <div className='row'>
          <div className='col'>
            <Swiper
              autoHeight={true}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 2500,
              }}
              grabCursor={true}
              modules={[Autoplay, Pagination, Navigation]}
              className='testimonials'
            >
              {data.map((item) => {
                const { title, id, image, review, name } = item;
                return (
                  <SwiperSlide key={id}>
                    <div className='testimonial'>
                      <p>{review}</p>
                      <div className='testimonial-auth'>
                        <img className='img-fluid' src={image} alt={id} />
                        <h5 className='mb-0'>{name}</h5>
                        <p>{title}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
