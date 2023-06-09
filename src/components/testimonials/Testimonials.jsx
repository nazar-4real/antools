import { useRef, useContext } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ThemeContext } from 'src/context/ThemeStore'

import 'swiper/css'
import './testimonials.scss'

import { Section } from '../shared/Section'
import { Text } from '../shared/Text'

import testimonial from 'src/assets/images/testimonials/testimonial.png'

const testimonialsSwiperData = [
  {
    id: 1,
    img: testimonial,
    name: 'Ronald Richards',
    description: 'Product Manager',
    text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.'
  },
  {
    id: 2,
    img: testimonial,
    name: 'Glory Mattew',
    description: 'CEO',
    text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.'
  },
  {
    id: 3,
    img: testimonial,
    name: 'Mike Florin',
    description: 'Front-End Developer',
    text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non.'
  },
  {
    id: 4,
    img: testimonial,
    name: 'Jakob Pervel',
    description: 'Back-End Developer',
    text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet.'
  },
]

const Testimonials = () => {
  const { theme: { value, colors: { action, auxiliary } } } = useContext(ThemeContext)

  const testimonialsSlides = testimonialsSwiperData.map(item => {
    const { id, img, name, description, text } = item

    return (
      <SwiperSlide className="testimonials__slide" key={id}>
        <figure className="testimonials__slide-figure">
          <img
            className="testimonials__slide-img"
            src={img}
            alt={name} />
          <figcaption className="testimonials__slide-figcaption">
            <h3 style={{
              color: value !== 'default' && action
            }}>
              {name}
            </h3>
            <p>
              {description}
            </p>
          </figcaption>
        </figure>
        <div className="testimonials__slide-info">
          <Text className="testimonials__slide-text">
            {text}
          </Text>
        </div>
      </SwiperSlide>
    )
  })

  const prevRef = useRef()
  const nextRef = useRef()

  return (
    <Section className="testimonials">
      <button className="swiper-arrow arrow-prev" ref={prevRef}>
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 26L2 14L14 2" stroke={`${action}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <Swiper
        className="testimonials__swiper"
        slidesPerView={1}
        speed={700}
        modules={[Pagination, Navigation]}
        spaceBetween={5}
        style={{
          '--bullet': auxiliary,
          '--bulletActive': action
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        navigation={{
          prevEl: false,
          nextEl: false,
          disabledClass: 'disabled-arrow'
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }}>
        {testimonialsSlides}
        <div className="swiper-pagination"></div>
      </Swiper>
      <button className="swiper-arrow arrow-next" ref={nextRef}>
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 26L14 14L2 2" stroke={`${action}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </Section>
  )
}

export default Testimonials