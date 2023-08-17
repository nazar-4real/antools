import { useEffect, useContext, useRef, forwardRef, useMemo } from 'react'

import emailjs from '@emailjs/browser'
import { useFormik, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import { Button } from './Button'
import { Title } from './Title'
import { Text } from './Text'

export const ModalForm = forwardRef(({ formPlaceholder }, ref) => {
  const { theme: { colors: { action, auxiliary, text } } } = useContext(ThemeContext)

  const { isModalOpen, setVisibleForm } = useContext(ModalContext)

  const { className, title, inputs, submitText = title, footerText } = formPlaceholder

  const { question, formName, formSubmitText } = footerText

  const submitBtnRef = useRef(null)

  const submitForm = () => {
    submitBtnRef.current.textContent = 'Sending...'

    emailjs.sendForm(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      ref.current,
      import.meta.env.VITE_APP_PUBLIC_KEY
    )
      .then(() => {
        alert('Registration is successful. Thank you')
      })
      .catch((error) => {
        alert('An error occurred. Try again')
        console.log(error)
      })
      .finally(() => {
        submitBtnRef.current.textContent = submitText
        formik.resetForm()
      })
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: object({
      name: string().required('Required'),
      email: string().email('Invalid email').required('Required'),
      password: string().min(8, 'Must contain at least 8 characters').required('Required')
    }),
    onSubmit: () => {
      submitForm()
    }
  })

  useEffect(() => {
    !isModalOpen && formik.resetForm()
  }, [isModalOpen])

  const formFields = useMemo(() => inputs.map((item, idx) => {
    const { type, name, placeholder } = item

    return (
      <label
        className={`form-label
         ${(formik.errors[name] && formik.touched[name])
            ? 'with-error'
            : ''}`.trim()
        }
        key={idx}>
        <input
          className="form-input"
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={name}
          onChange={formik.handleChange}
          value={formik.values[name]} />
        {
          formik.errors[name]
          && formik.touched[name]
          && <span
            className="form-input--error"
            style={{ background: auxiliary }}>
            {formik.errors[name]}
          </span>
        }
      </label>
    )
  }), [inputs, formik])

  return (
    <form
      className={`modal__form ${className}`}
      ref={ref}
      onSubmit={formik.handleSubmit}>
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
          onClick={() => setVisibleForm({ formName, transition: 'transition' })}
          style={{ color: action }}>
          {formSubmitText}
        </button>
      </Text>
    </form>
  )
})