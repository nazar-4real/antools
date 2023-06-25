import { useRef, useContext } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ThemeContext } from 'src/context/ThemeStore'

import 'swiper/css'
import './testimonials.scss'

import { Section } from '../shared/Section'
import { Text } from '../shared/Text'

import testimonialWebp from 'src/assets/images/testimonials/testimonial.webp'
import testimonialPng from 'src/assets/images/testimonials/testimonial.png'

const testimonialsSwiperData = [
  {
    id: 1,
    img: {
      webp: testimonialWebp,
      png: testimonialPng
    },
    name: 'Ronald Richards',
    description: 'Product Manager',
    text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.'
  },
  {
    id: 2,
    img: {
      webp: testimonialWebp,
      png: testimonialPng
    },
    name: 'Glory Mattew',
    description: 'CEO',
    text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.'
  },
  {
    id: 3,
    img: {
      webp: testimonialWebp,
      png: testimonialPng
    },
    name: 'Mike Florin',
    description: 'Front-End Developer',
    text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non.'
  },
  {
    id: 4,
    img: {
      webp: testimonialWebp,
      png: testimonialPng
    },
    name: 'Jakob Pervel',
    description: 'Back-End Developer',
    text: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet.'
  },
]

const Testimonials = () => {
  const { theme: { value, colors: { action, auxiliary, background } } } = useContext(ThemeContext)

  const testimonialsSlides = testimonialsSwiperData.map(item => {
    const { id, img: { avif, webp, png }, name, description, text } = item

    return (
      <SwiperSlide className="testimonials__slide" key={id}>
        <figure className="testimonials__slide-figure">
          <picture className="testimonials__slide-img">
            <source srcSet={webp} type="image/webp" />
            <img src={png} alt="Testimonial" />
          </picture>
          <figcaption
            className="testimonials__slide-figcaption"
            style={{
              '--circleCol': action,
              background: value === 'default' ? `${background}33` : `${action}11`
            }}>
            <h3 style={{
              color: value === 'fresh' ? background : value !== 'default' && action
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
      </SwiperSlide >
    )
  })

  const prevRef = useRef()
  const nextRef = useRef()

  return (
    <Section className="testimonials">
      <button
        className="swiper-arrow arrow-prev"
        ref={prevRef}
        aria-label='Prev slide'
        role='button'>
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
      <button
        className="swiper-arrow arrow-next"
        ref={nextRef}
        aria-label='Next slide'
        role='button'>
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 26L14 14L2 2" stroke={`${action}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </Section>
  )
}

export default Testimonials