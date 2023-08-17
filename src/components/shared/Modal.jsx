import { useState, useEffect, useRef, useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import { ModalForm } from './ModalForm'

const formPlaceholder = {
  signinPlaceholder: {
    className: "signin-form",
    title: "Sign In",
    inputs: [
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
      question: 'Don\'t have an account yet?',
      formName: 'signup-form',
      formSubmitText: 'Sign Up'
    }
  },
  signupPlaceholer: {
    className: "signup-form",
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
      formName: 'signin-form',
      formSubmitText: 'Sign In'
    }
  }
}

const Modal = () => {
  const {
    theme: {
      value,
      colors: { action, background, text, auxiliary }
    }
  } = useContext(ThemeContext)

  const { isModalOpen, closeModal, visibleForm: { formName, transition }, setVisibleForm } = useContext(ModalContext)

  const htmlRef = useRef(document.documentElement)

  const closeModalDialog = e => {
    (e.key === 'Escape'
      || e.target.matches('.modal')
      || e.target.closest('.modal-close'))
      && (
        closeModal(),
        setTimeout(() => setVisibleForm({
          formName: '',
          transition: ''
        }), 500)
      )
  }

  useEffect(() => {
    window.addEventListener('keydown', closeModalDialog)

    htmlRef.current.style.marginRight = isModalOpen ? '5px' : ''

    const headerEl = document.querySelector('.header')
    headerEl.classList.contains('fixed') && (
      headerEl.style.paddingRight = isModalOpen ? '5px' : ''
    )

    return () => {
      window.removeEventListener('keydown', closeModalDialog)
    }
  }, [isModalOpen])

  const sigininRef = useRef(null)
  const siginupRef = useRef(null)

  const [modalDialogHeight, setModalDialogHeight] = useState(null)

  useEffect(() => {
    const signinScrollHeight = sigininRef.current?.scrollHeight
    const signupScrollHeight = siginupRef.current?.scrollHeight

    setModalDialogHeight(Math.max(signinScrollHeight, signupScrollHeight))
  }, [])

  return (
    <div
      className={`modal ${isModalOpen ? 'show' : ''}`.trim()}
      onClick={closeModalDialog}
      style={{
        background: background,
        boxShadow: `inset 0 0 25px -15px ${action}`
      }}>
      <div className="modal-dialog">
        <button
          className="modal-close"
          onClick={closeModal}
          style={{
            ...(window.matchMedia('(max-width: 768px)').matches && { border: `1px solid ${action}` })
          }}>
          {Array.from({ length: 2 }, (_, idx) => (
            <span
              key={idx}
              style={{
                background: action
              }}></span>
          ))}
        </button>
        <div
          className="modal__content"
          style={{
            background: auxiliary,
            color: action
          }}>
          <div
            className={`modal__forms ${transition}`.trim()}
            data-form={formName}
            style={{
              '--labelBg': value === 'default' ? auxiliary : background,
              '--inputCol': value === 'plum' ? `${action}aa` : `${text}aa`,
              height: `${modalDialogHeight}px`
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