import { createContext, useState } from 'react'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: isOpen,
        openModal: openModal,
        closeModal: closeModal
      }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }