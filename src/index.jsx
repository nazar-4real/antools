import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { ThemeProvider } from './context/ThemeStore'
import { ModalProvider } from './context/ModalContext'

import AppRouter from './AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>
)
