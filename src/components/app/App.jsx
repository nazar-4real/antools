import { useRef, useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { ThemeContext } from 'src/context/ThemeStore'

import 'src/assets/styles/main.scss'

import Header from '../header/Header'
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

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location])

  return (
    <>
      <Header />

      <main className="main" id="homepage">
        <Outlet />
      </main>

      <Footer />
      <Modal />
    </>
  )
}

export default App