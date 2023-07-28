import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from './layouts/AppLayout'

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
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter