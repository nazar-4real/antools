import { useRef, useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { ThemeContext } from 'src/context/ThemeStore'

import 'src/assets/styles/main.scss'

import Header from 'src/components/header/Header'
import Footer from 'src/components/footer/Footer'

import Modal from 'src/components/shared/Modal'

const AppLayout = () => {
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
    setTimeout(() => {
      window.scroll(0, 0)
    }, 10)
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

export default AppLayout