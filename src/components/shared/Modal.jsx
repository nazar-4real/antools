import { useEffect, useRef, useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

const Modal = () => {
  const { themeOptions, theme: { value, colors: { action, background, text, auxiliary } } } = useContext(ThemeContext)

  const { isModalOpen, closeModal } = useContext(ModalContext)

  const htmlRef = useRef(document.documentElement)
  const bodyRef = useRef(document.body)

  const closeModalDialog = e => {
    (e.key === 'Escape'
      || e.target.matches('.modal')
      || e.target.closest('.modal-close'))
      && closeModal()
  }

  useEffect(() => {
    window.addEventListener('keydown', closeModalDialog)

    const desktopOpenModal = !!(window.matchMedia('(min-width: 1024px)').matches && isModalOpen)

    htmlRef.current.style.marginRight = desktopOpenModal ? '5px' : ''
    bodyRef.current.style.overflow = desktopOpenModal ? 'hidden' : ''

    const headerEl = document.querySelector('.header')
    headerEl.classList.contains('fixed') && (
      headerEl.style.paddingRight = desktopOpenModal ? '5px' : ''
    )

    return () => {
      window.removeEventListener('keydown', closeModalDialog)
    }
  }, [isModalOpen])

  return (
    <div
      className={`modal ${isModalOpen ? 'show' : ''}`}
      onClick={closeModalDialog}
      style={{
        background: background,
        boxShadow: `inset 0 0 25px -15px ${action}`
      }}>
      <div className="modal-dialog"
        style={{
          background: value === 'light' ? `${text}ee` : auxiliary,
          color: action
        }}>
        <button className="modal-close" onClick={closeModal}>
          {Array.from({ length: 2 }, (_, idx) => (
            <span
              key={idx}
              style={{
                background: action
              }}></span>
          ))}
        </button>
        <div className="modal__content">
          Hello from modal
        </div>
      </div>
    </div >
  )
}

export default Modal