import { createContext, useState } from 'react'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [visibleForm, setVisibleForm] = useState({
    formName: '',
    transition: ''
  })

  const openModal = (form) => {
    setIsOpen(true)
    setVisibleForm(prevState => ({
      ...prevState,
      formName: form
    }))
  }

  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: isOpen,
        openModal: openModal,
        closeModal: closeModal,
        visibleForm: visibleForm,
        setVisibleForm: setVisibleForm
      }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }