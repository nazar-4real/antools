import { useContext } from 'react'
import { useRouteError, Link } from 'react-router-dom'

import { ThemeContext } from 'src/context/ThemeStore'

export const ErrorPage = () => {
  const { theme: { value, colors: { action, background, text } } } = useContext(ThemeContext)
  const error = useRouteError();

  return (
    <div
      className="error-page"
      style={{
        background
      }}>
      <h1>
        Oops! An error occured
      </h1>
      <p>
        <i>
          {error.status} {error.statusText}
        </i>
      </p>
      <Link
        className="main-btn"
        to='/'
        style={{
          background: action,
          color: ['brown', 'plum'].includes(value) ? background : text,
        }}>
        Go Home
      </Link>
    </div>
  )
}