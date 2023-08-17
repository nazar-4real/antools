import { useContext, useRef, forwardRef, useMemo } from 'react'
import emailjs from '@emailjs/browser'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import { Button } from './Button'
import { Title } from './Title'
import { Text } from './Text'

export const ModalForm = forwardRef(({ formPlaceholder }, ref) => {
  const { theme: { colors: { action, text } } } = useContext(ThemeContext)

  const { setVisibleForm } = useContext(ModalContext)

  const { className, title, inputs, submitText = title, footerText } = formPlaceholder

  const { question, formName, formSubmitText } = footerText

  const submitBtnRef = useRef(null)

  const submitForm = (e) => {
    e.preventDefault()

    submitBtnRef.current.textContent = 'Sending...'

    emailjs.sendForm(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      ref.current,
      import.meta.env.VITE_APP_PUBLIC_KEY
    )
      .then(() => {
        alert('Registration is successful. Thank you')

        ref.current.querySelectorAll('input').forEach(input => {
          input.value = ''
        })
      })
      .catch((error) => {
        alert('An error occurred. Try again')
        console.log(error)
      })
      .finally(() => {
        submitBtnRef.current.textContent = submitText
      })
  }

  const formFields = useMemo(() => inputs.map((item, idx) => {
    const { type, name, placeholder } = item

    return (
      <label
        className="form-label"
        key={idx}>
        <input
          className="form-input"
          type={type}
          name={name}
          required
          placeholder={placeholder}
          autoComplete={name} />
      </label>
    )
  }), [inputs])

  return (
    <form
      className={`modal__form ${className}`}
      ref={ref}
      onSubmit={submitForm}>
      <Title>
        {title}
      </Title>
      {formFields}
      <Button type="submit" ref={submitBtnRef}>
        {submitText}
      </Button>
      <Text
        className="modal__form-footer"
        style={{
          color: text
        }}>
        {question}
        <button
          className="switch-form"
          type="button"
          onClick={() => setVisibleForm({ formName: formName, transition: 'transition' })}
          style={{ color: action }}>
          {formSubmitText}
        </button>
      </Text>
    </form>
  )
})