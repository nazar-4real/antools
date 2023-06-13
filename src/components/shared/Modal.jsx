import { useEffect, useRef, useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import { ModalForm } from './ModalForm'

const formPlaceholder = {
  signinPlaceholder: {
    className: "signin",
    title: "Sign In",
    inputs: [
      {
        type: 'email',
        name: 'name',
        placeholder: 'Your email or username'
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your password'
      }
    ],
    footerText: {
      question: 'Don\'t have an account yet?',
      formName: 'signup',
      formSubmitText: 'Sign Up'
    }
  },
  signupPlaceholer: {
    className: "signup",
    title: "Sign Up",
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name'
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email'
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Your password'
      }
    ],
    footerText: {
      question: 'Already have an account?',
      formName: 'signin',
      formSubmitText: 'Sign In'
    }
  }
}

const Modal = () => {
  const { theme: { value, colors: { action, background, text, auxiliary } } } = useContext(ThemeContext)

  const { isModalOpen, closeModal, visibleForm } = useContext(ModalContext)

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

  return (
    <div
      className={`modal ${isModalOpen ? 'show' : ''}`.trim()}
      onClick={closeModalDialog}
      style={{
        background: background,
        boxShadow: `inset 0 0 25px -15px ${action}`
      }}>
      <div
        className="modal-dialog"
        style={{
          background: auxiliary,
          color: action,
          border: `1px solid ${action}55`
        }}>
        <button
          className="modal-close"
          onClick={closeModal}>
          {Array.from({ length: 2 }, (_, idx) => (
            <span
              key={idx}
              style={{
                background: action
              }}></span>
          ))}
        </button>
        <div className="modal__content">
          <div
            className={`modal__forms ${visibleForm}`.trim()}
            style={{
              '--labelBg': value === 'default' ? auxiliary : background,
              '--inputCol': value === 'plum' ? `${action}aa` : `${text}aa`,
              height: `${Math.max(signinScrollHeight, signupScrollHeight)}px`
            }}>
            <ModalForm
              formPlaceholder={formPlaceholder.signinPlaceholder}
              ref={sigininRef} />
            <ModalForm
              formPlaceholder={formPlaceholder.signupPlaceholer}
              ref={siginupRef} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal