import { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from 'src/context/ThemeStore'
import { ModalContext } from 'src/context/ModalContext'

import { Button } from './Button'

const navData = [
  {
    id: 1,
    name: 'Home',
    link: '/'
  },
  {
    id: 2,
    name: 'Categories',
    submenu: [
      {
        id: 1,
        subItem: 'Gallery',
        subLink: '/'
      },
      {
        id: 2,
        subItem: 'Portfolio',
        subLink: '/'
      },
      {
        id: 3,
        subItem: 'Features',
        subLink: '/'
      },
      {
        id: 4,
        subItem: 'Services',
        subLink: '/'
      },
    ]
  },
  {
    id: 3,
    name: 'Popular Tools',
    link: 'tools'
  },
  {
    id: 4,
    name: 'Blog',
    link: '/'
  }
]

const Navbar = () => {
  const {
    theme: {
      value,
      colors: { action, auxiliary, background, text }
    }
  } = useContext(ThemeContext)

  const { openModal } = useContext(ModalContext)

  const renderMenu = useMemo(() => navData.map(item => {
    const { id, name, link, submenu: submenuArr } = item

    const submenu = submenuArr?.map(item => {
      const { id, subItem, subLink } = item

      return (
        <li
          className="menu-item__submenu-item"
          key={id}
          style={{
            background: auxiliary
          }}>
          <a
            className="menu-item__submenu-link"
            href={subLink}
            style={{
              color: value === 'light' ? text : action
            }}>
            {subItem}
          </a>
        </li>
      )
    })

    return (
      <li
        className={`menu__item ${submenuArr ? 'with-submenu' : ''}`}
        key={id}
        style={{
          ...(submenuArr && { '--arrowColor': action }),
        }}>
        <Link
          className="menu__item-link"
          to={link}
          style={{
            color: value === 'plum' ? action : `${text}99`
          }}>
          {name}
        </Link>
        {
          submenuArr && (
            <ul
              className="menu__item-submenu"
              style={{
                '--borderCol': `${text}88`,
                background: background
              }}>
              {submenu}
            </ul>
          )
        }
      </li>
    )
  }), [navData, value])

  const mediaComponents = window.matchMedia('(max-width: 630px)').matches && (
    <li className="menu__item--actions">
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
    </li>
  )

  return (
    <ul className="menu__list"
      style={
        window.matchMedia('(max-width: 991px)').matches
          ? {
            '--gradient-col-1': `${action}55`,
            '--gradient-col-2': value !== 'default' ? `${auxiliary}55` : auxiliary
          }
          : {}}>
      {renderMenu}
      {mediaComponents}
    </ul>
  )
}

export { Navbar }