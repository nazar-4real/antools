import { createContext, useState } from 'react'

import { useLocalStorage } from 'src/hooks/useLocalStorage'

import { ThemeOption } from 'src/components/shared/ThemeOption'

const ThemeContext = createContext()

const themeColors = {
  default: {
    background: '#1e252b',
    text: '#ffffff',
    action: '#ff6e30',
    auxiliary: 'rgba(40, 48, 54, 0.6)'
  },
  brown: {
    background: '#342825',
    text: '#fff3ec',
    action: '#ffc0ad',
    auxiliary: '#5f4b4b'
  },
  light: {
    background: '#fffffe',
    text: '#272343',
    action: '#ffd803',
    auxiliary: '#e3f6f5'
  },
  plum: {
    background: '#232946',
    text: '#dac5cb',
    action: '#eebbc3',
    auxiliary: '#121629'
  },
  violet: {
    background: '#16161a',
    text: '#fffffe',
    action: '#7f5af0',
    auxiliary: '#010101'
  },
  fresh: {
    background: '#4bb87d',
    text: '#edf5e1',
    action: '#05386b',
    auxiliary: '#379683'
  },
  mint: {
    background: '#1f2833',
    text: '#dedede',
    action: '#1b9d93',
    auxiliary: '#0b0c10'
  },
  lime: {
    background: '#222629',
    text: '#ffffff',
    action: '#79aa3b',
    auxiliary: '#474b4f'
  }
}

const themeOptions = Object.entries(themeColors).map(([theme, colors]) => ({
  value: theme,
  label: <ThemeOption colors={Object.values(colors)} />,
  colors: colors
}))

const ThemeProvider = ({ children }) => {
  const [storedTheme, setStoredTheme] = useLocalStorage('currentTheme', 'default')

  const [theme, setTheme] = useState(
    themeOptions.find(({ value }) => value === storedTheme)
    ?? themeOptions[0]
  )

  const switchTheme = (theme) => {
    setTheme(theme)
    setStoredTheme(theme.value)
  }

  console.log(`%cCurrent theme: ${theme.value[0].toUpperCase()}${theme.value.substring(1)}`, `color: ${theme.colors.action}; font-size: 13px; font-weight: 700; -webkit-text-stroke: .1px ${theme.colors.text}`)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
        themeOptions
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }