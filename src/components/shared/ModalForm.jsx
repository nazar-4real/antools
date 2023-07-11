import { useContext, forwardRef, useMemo } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import { Button } from './Button'
import { Title } from './Title'
import { Text } from './Text'

export const ModalForm = forwardRef(({ formPlaceholder }, ref) => {
  const { theme: { colors: { action, text } } } = useContext(ThemeContext)

  const { setVisibleForm } = useContext(ModalContext)

  const { className, title, inputs, submitText = title, footerText } = formPlaceholder

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
          placeholder={placeholder}
          autoComplete={name} />
      </label>
    )
  }), [inputs])

  const { question, formName, formSubmitText } = footerText

  return (
    <form
      className={`modal__form ${className}`}
      ref={ref} >
      <Title>
        {title}
      </Title>
      {formFields}
      <Button type="submit">
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
          onClick={() => setVisibleForm(`${formName} transition`)}
          style={{ color: action }}>
          {formSubmitText}
        </button>
      </Text>
    </form>
  )
})