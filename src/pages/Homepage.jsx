import Hero from 'src/components/hero/Hero'
import Tools from 'src/components/tools/Tools'
import Brands from 'src/components/brands/Brands'
import Newcomer from 'src/components/newcomer/Newcomer'
import Testimonials from 'src/components/testimonials/Testimonials'
import Contact from 'src/components/contact/Contact'

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