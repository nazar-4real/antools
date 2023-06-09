import { useEffect, useRef, useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import { Button } from './Button'

const Modal = () => {
  const { theme: { value, colors: { action, background, text, auxiliary } } } = useContext(ThemeContext)

  const { isModalOpen, closeModal, visibleForm, setVisibleForm } = useContext(ModalContext)

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

    const desktopOpenModal = window.matchMedia('(min-width: 1024px)').matches && isModalOpen

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

  const sigininRef = useRef(null)
  const siginupRef = useRef(null)

  const signinScrollHeight = sigininRef.current?.scrollHeight
  const signupScrollHeight = siginupRef.current?.scrollHeight

  console.log(signinScrollHeight, signupScrollHeight)

  return (
    <div
      className={`modal ${isModalOpen ? 'show' : ''}`.trim()}
      onClick={closeModalDialog}
      style={{
        background: background,
        boxShadow: `inset 0 0 25px -15px ${action}`
      }}>
      <div className="modal-dialog"
        style={{
          background: value === 'light' ? `${text}ee` : auxiliary,
          color: action,
          border: `1px solid ${action}55`
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
          <div className={`modal__forms ${visibleForm}`.trim()} style={{
            '--labelBg': value === 'default' ? auxiliary : background,
            '--inputCol': value === 'plum' ? `${action}aa` : `${text}aa`,
            height: `${Math.max(signinScrollHeight, signupScrollHeight)}px`
          }}>
            <form className="modal__form signin" ref={sigininRef}>
              <h2 className="main-title">
                Sign In
              </h2>
              <label className="form-label">
                <input className="form-input" type="email" name="email" placeholder="Your email or username" />
              </label>
              <label className="form-label">
                <input className="form-input" type="password" name="password" placeholder="Your password" />
              </label>
              <Button type="submit">
                Sign In
              </Button>
              <p className="form__footer main-text">
                Don't have an account yet? <button className="switch-form" type="button" onClick={() => setVisibleForm('signup transition')} style={{ color: action }}>Sign Up</button>
              </p>
            </form>
            <form className="modal__form signup" ref={siginupRef}>
              <h2 className="main-title">
                Sign Up
              </h2>
              <label className="form-label">
                <input className="form-input" type="text" name="name" placeholder="Your name" />
              </label>
              <label className="form-label">
                <input className="form-input" type="email" name="email" placeholder="Your email" />
              </label>
              <label className="form-label">
                <input className="form-input" type="password" name="password" placeholder="Your password" />
              </label>
              <Button type="submit">
                Sign Up
              </Button>
              <p className="form__footer main-text">
                Already have an account? <button className="switch-form" type="button" onClick={() => setVisibleForm('signin transition')} style={{ color: action }}>Sign In</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal