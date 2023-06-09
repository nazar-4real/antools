import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const Button = ({ className = '', onClick = null, children, ...attrs }) => {
  const { theme: { value, colors: { action, text, background } } } = useContext(ThemeContext)

  return (
    <button
      className={`main-btn ${className}`.trim()}
      onClick={onClick}
      style={{
        background: value !== 'default' && action,
        color: value === 'brown' ? background : value !== 'default' && text,
        ...(className.split(' ').includes('outlined') && {
          '--outlineCol': `${action}99`,
          background: 'transparent',
          color: value === 'plum' ? action : text
        })
      }}
      {...attrs}>
      {children}
    </button>
  )
}