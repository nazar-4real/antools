import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const Button = ({ className = '', onClick = null, children }) => {
  const { theme: { value, colors: { action, text, background } } } = useContext(ThemeContext)

  return (
    <button
      className={`main-btn ${className}`.trim()}
      onClick={onClick}
      style={{
        background: value !== 'default' && action,
        color: value === 'brown' ? background : value !== 'default' && text
      }}>
      {children}
    </button>
  )
}