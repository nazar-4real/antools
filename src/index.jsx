import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from './context/ThemeStore'
import { ModalProvider } from './context/ModalContext'

import Root from './components/Root'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <Root />
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>
)
