import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const Text = ({ className = '', children, ...props }) => {
  const { theme: { value, colors: { text } } } = useContext(ThemeContext)

  return (
    <p className={`main-text ${className.trim()}`}
      style={{
        color: value === 'plum' || value === 'default' ? 'rgba(255, 255, 255, 0.5)' : text
      }}
      {...props}>
      {children}
    </p>
  )
}