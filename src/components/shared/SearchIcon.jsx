import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const SearchIcon = () => {
  const { theme: { colors: { action } } } = useContext(ThemeContext)

  return (
    <svg
      className="search-icon"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: action }}>
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 20.9999L16.65 16.6499" stroke="currentColor" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}