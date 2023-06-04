import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const ThemeOption = ({ colors }) => {
  const { theme: { value } } = useContext(ThemeContext)

  return (
    <div className={`theme-select-option ${value}`}>
      {colors?.map((col, index) => (
        <span
          key={index}
          style={{
            background: col
          }}></span>
      ))}
    </div>
  )
}