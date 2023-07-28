import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from './context/ThemeStore'
import { ModalProvider } from './context/ModalContext'

import AppRouter from './AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>
)
