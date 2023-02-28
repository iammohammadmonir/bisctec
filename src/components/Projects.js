import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  EffectCreative,
  Navigation,
  Pagination,
} from 'swiper';

import data from '../data/projectsData';
import { useState } from 'react';

const Projects = () => {
  const [popup, setPopup] = useState([]);
  const [popupClose, setPopupClose] = useState(false);

  const changeContent = (project) => {
    setPopup(project);
    setPopupClose(!popupClose);
  };

  return (
    <div className='section-padding bg-dark-v2'>
      <div className='container'>
        <div className='heading text-center mb-30'>
          <h6>Our Recent</h6>
          <h2>Projekt</h2>
        </div>
        <div className='row'>
          <div className='col'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
              }}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className='mySwiper'
            >
              {data.map((project) => {
                const { title, image, id, gallery } = project;

                return (
                  <SwiperSlide key={id}>
                    <div onClick={() => changeContent(gallery)}>
                      <img className='img-fluid' src={image} alt='' />
                      <div className='project-info'>
                        <h4 className='mb-0'>{title}</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        {popupClose && (
          <div className='project-popup'>
            <div className='popup-body'>
              <div onClick={changeContent} className='close'>
                Close
              </div>
              <div className='content'>
                <Swiper
                  pagination={{
                    type: 'fraction',
                  }}
                  loop={true}
                  navigation={true}
                  autoplay={{
                    delay: 2500,
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
                  modules={[Autoplay, EffectCreative, Pagination, Navigation]}
                  className='galleryImg'
                >
                  {popup.map((galleryImg) => {
                    const { galleryImage, id } = galleryImg;
                    return (
                      <SwiperSlide key={id}>
                        <img
                          className='img-fluid'
                          src={galleryImage}
                          alt={id}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
