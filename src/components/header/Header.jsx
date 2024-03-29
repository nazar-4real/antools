import { useState, useEffect, useContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Select from 'react-select'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import './header.scss'

import { Button } from '../shared/Button'
import { Navbar } from '../shared/Navbar'
import { Logo } from '../shared/Logo'

const selectStyles = {
  control: () => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: 0
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    margin: 0
  }),
  indicatorsContainer: (_, { selectProps: { menuIsOpen, value: { colors: { action } } } }) => {
    return {
      '[class$="Container"]': {
        padding: 0,
        marginLeft: '8px',
        color: action,
        transition: '.3s',
        transform: menuIsOpen && 'rotate(-90deg)'
      }
    }
  },
  menu: (baseStyles, { selectProps: { styles, value: { colors: { text } } } }) => ({
    ...baseStyles,
    '--optionBg': styles['--optionBg'],
    top: '115%',
    boxShadow: 'none',
    borderRadius: '10px',
    border: `1px solid ${text}`,
    overflow: 'hidden',
    margin: '0 0 0 -21px',
    width: 'auto'
  }),
  menuList: () => ({
    padding: 0,
    height: '199px',
    overflowY: 'auto',
    overscrollBehavior: 'contain',
    '&::-webkit-scrollbar': {
      width: '3px'
    }
  }),
  option: (_, { isSelected, selectProps: { value: { value, colors: { auxiliary, background, text } } } }) => ({
    padding: '12px 20px',
    cursor: 'pointer',
    transition: 'all .3s',
    background: isSelected ? 'var(--optionBg)' : value === 'default' ? background : auxiliary,
    '&:hover': {
      background: 'var(--optionBg)'
    },
    '&:not(:first-of-type)': {
      borderTop: `1px solid ${text}`
    },
  })
}

const Header = () => {
  const {
    switchTheme,
    themeOptions,
    theme,
    theme: {
      value,
      colors: { action, auxiliary, background, text }
    }
  } = useContext(ThemeContext)

  const { isModalOpen, openModal } = useContext(ModalContext)

  const selectTheme = (themeOption) => {
    switchTheme(themeOption)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const bodyRef = useRef(document.body)

  const handleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    isModalOpen && setIsMenuOpen(false)
    bodyRef.current.classList.toggle('no-scroll', isMenuOpen || isModalOpen)
  }, [isModalOpen, isMenuOpen])

  const headerRef = useRef();
  const [fixedHeader, setFixedHeader] = useState(false)

  useEffect(() => {
    const setFixedValue = () => setFixedHeader(window.scrollY >= headerRef.current.offsetHeight)

    window.addEventListener('scroll', setFixedValue)

    return () => {
      window.removeEventListener('scroll', setFixedValue)
    }
  }, [])

  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navClass = `menu ${isMenuOpen ? 'open' : ''}${isModalOpen && window.matchMedia('(max-width: 630px)').matches ? 'menu-fade' : ''}`

  return (
    <header
      className={`header ${fixedHeader ? 'fixed' : ''} `}
      ref={headerRef}
      style={{
        background,
        boxShadow: fixedHeader && `0 5px 15px 0px ${auxiliary}`
      }}>
      <div className="container">
        <div className="header__body">
          <Logo />
          <nav
            className={navClass}>
            <Navbar />
            <button
              className="menu-burger"
              aria-label="Menu burger"
              onClick={handleMenu}>
              {Array.from({ length: 3 }, (_, i) => (
                <span key={i}
                  style={{
                    background: value === 'light' ? text : action
                  }}></span>
              ))}
            </button>
          </nav>
          <div className="header__actions">
            <Select
              className="theme-select"
              options={themeOptions}
              onChange={selectTheme}
              defaultValue={theme}
              isSearchable={false}
              captureMenuScroll={false}
              aria-label="Theme switcher"
              styles={{
                '--optionBg': action,
                ...selectStyles
              }} />
            <Button
              className="header__action login"
              onClick={() => openModal('signin-form')}
              style={{
                background: 'transparent',
                color: (value === 'default' || value === 'light') ? text : action
              }}>
              Login
            </Button>
            <Button
              className="header__action signup"
              onClick={() => openModal('signup-form')}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header