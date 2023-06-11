import { useContext, forwardRef } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import { Button } from './Button'

export const ModalForm = forwardRef(({ formData }, ref) => {
  const { theme: { colors: { action, text } } } = useContext(ThemeContext)

  const { setVisibleForm } = useContext(ModalContext)

  const { className, title, inputs, submitText = title, footerText } = formData

  const formFields = inputs.map((item, idx) => {
    const { type, name, placeholder } = item

    return (
      <label className="form-label" key={idx}>
        <input
          className="form-input"
          type={type}
          name={name}
          placeholder={placeholder} />
      </label>
    )
  })

  const { question, formName, formSubmitText } = footerText

  return (
    <form className={`modal__form ${className}`} ref={ref} >
      <h2 className="main-title">
        {title}
      </h2>
      {formFields}
      <Button type="submit">
        {submitText}
      </Button>
      <p className="form__footer main-text" style={{ color: `${text}aa` }}>
        {question} <button className="switch-form" type="button" onClick={() => setVisibleForm(`${formName} transition`)} style={{ color: action, borderBottom: '1px solid currentColor', marginLeft: '3px' }}>{formSubmitText}</button>
      </p>
    </form>
  )
})