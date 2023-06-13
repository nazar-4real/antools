import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const Text = ({ className = '', children, ...props }) => {
  const { theme: { value, colors: { text } } } = useContext(ThemeContext)

  return (
    <p className={`main-text ${className}`.trim()}
      style={{
        color: value === 'default' ? '#ffffff88' : text
      }}
      {...props}>
      {children}
    </p>
  )
}