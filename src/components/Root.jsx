import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './app/App'
import Homepage from 'src/pages/Homepage'
import { ErrorPage } from './shared/ErrorPage'

import Hero from './hero/Hero'
import Tools from './tools/Tools'
import ToolPage from 'src/pages/Tool'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: 'home',
        element: <Hero />
      },
      {
        path: 'tools',
        element: <Tools />
      },
      {
        path: 'tools/:toolName',
        element: <ToolPage />
      }
    ]
  }
])

const Root = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Root