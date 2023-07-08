import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const Title = ({ children, style, ...props }) => {
  const { theme: { value, colors: { action } } } = useContext(ThemeContext)
  return (
    <h2
      className="main-title"
      style={{
        color: value !== 'default' && action,
        ...(value === 'light' && { filter: 'brightness(.9)' }),
        ...style
      }}
      {...props}>
      {children}
    </h2>
  )
}