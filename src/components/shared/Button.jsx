import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const Button = ({ className = '', children, style, ...attrs }) => {
  const { theme: { value, colors: { action, text, background } } } = useContext(ThemeContext)

  return (
    <button
      className={`main-btn ${className}`.trim()}
      style={{
        background: action,
        color: ['brown', 'plum'].includes(value) ? background : text,
        ...(className.split(' ').includes('outlined') && {
          '--outlineCol': `${action}99`,
          background: 'transparent',
          color: value === 'plum' ? action : text
        }),
        ...style
      }}
      {...attrs}>
      {children}
    </button>
  )
}