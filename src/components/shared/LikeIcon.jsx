import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const LikeIcon = ({ ...styles }) => {
  const { theme: { value } } = useContext(ThemeContext)
  const themedIcon = value === 'light' ? '#555' : '#fff'

  return (
    <svg className="like-icon" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8333 0.25C16.3833 0.25 14.225 1.475 13 3.4C11.775 1.475 9.61667 0.25 7.16667 0.25C3.31667 0.25 0.166672 3.4 0.166672 7.25C0.166672 14.1917 13 21.25 13 21.25C13 21.25 25.8333 14.25 25.8333 7.25C25.8333 3.4 22.6833 0.25 18.8333 0.25Z" fill={themedIcon} fillOpacity="0.38" {...styles} />
    </svg>
  )
}