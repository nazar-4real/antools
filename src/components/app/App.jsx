import { useRef, useContext, useEffect } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

import 'src/assets/styles/main.scss'

import Header from '../header/Header'
import Hero from '../hero/Hero'
import Tools from '../tools/Tools'
import Brands from '../brands/Brands'
import Newcomer from '../newcomer/Newcomer'
import Testimonials from '../testimonials/Testimonials'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

import Modal from '../shared/Modal'

const App = () => {
  const { theme: { colors: { action, auxiliary, background } } } = useContext(ThemeContext)

  const bodyRef = useRef(document.body)

  useEffect(() => {
    bodyRef.current.style.cssText += `
      --scrollbarBg: ${auxiliary};
      --scrollbarThumb: ${action};
      background: ${background};
    `
  }, [background])

  const onPropToggle = (prop, id, updateData, data) => {
    updateData(data.map(dataItem => {
      return dataItem.id === id
        ? { ...dataItem, [prop]: !dataItem[prop] }
        : dataItem
    }))
  }

  return (
    <>
      <Header />

      <main className="main" id="homepage">
        <Hero />
        <Tools onPropToggle={onPropToggle} />
        <Brands />
        <Newcomer onPropToggle={onPropToggle} />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Modal />
    </>
  )
}

export default App