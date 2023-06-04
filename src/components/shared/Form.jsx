import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

import { SearchIcon } from './SearchIcon'

export const Form = ({ className, placeholder, children }) => {

  const { theme: { value, colors: { auxiliary, action } } } = useContext(ThemeContext)

  return (
    <form className={`form ${className}`}>
      <label
        className="form-label"
        style={{
          background: value !== 'default' && auxiliary,
        }}>
        <SearchIcon />
        <input
          className="form-input"
          type="text"
          placeholder={placeholder}
          style={{
            color: value !== 'default' && action
          }}
        />
        {children}
      </label>
    </form>
  )
}