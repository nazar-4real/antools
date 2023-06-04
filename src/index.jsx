import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from './context/ThemeStore'
import { ModalProvider } from './context/ModalContext'

import App from './components/app/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
