import { Helmet } from 'react-helmet-async'

import Hero from './components/hero/Hero'
import Tools from 'src/components/tools/Tools'
import Brands from './components/brands/Brands'
import Newcomer from './components/newcomer/Newcomer'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

export const onPropToggle = (prop, id, updateData) => {
  updateData(prevData =>
    prevData.map(dataItem =>
      dataItem.id === id
        ? { ...dataItem, [prop]: !dataItem[prop] }
        : dataItem
    )
  )
}

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Antools SPA</title>
      </Helmet>

      <Hero />
      <Tools />
      <Brands />
      <Newcomer />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Homepage