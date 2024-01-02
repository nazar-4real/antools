import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from './layouts/AppLayout'

import { ThemeContext } from './context/ThemeStore'

import Homepage from 'src/pages/HomePage/Homepage'
import ToolsPage from './pages/ToolsPage/ToolsPage'
import ToolPage from './pages/ToolPage/ToolPage'

import { ErrorPage } from './components/shared/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: 'tools',
        element: <ToolsPage />
      },
      {
        path: 'tools/:toolName',
        element: <ToolPage />
      }
    ]
  }
])

const AppRouter = () => {
  const { theme: { colors: { background } } } = useContext(ThemeContext)

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={background} />
      </Helmet>

      <RouterProvider router={router} />
    </>
  )
}

export default AppRouter