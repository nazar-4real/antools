import { useContext } from 'react'

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
    link: '/',
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
    name: 'My Collections',
    link: '/'
  },
  {
    id: 4,
    name: 'Blog',
    link: '/'
  }
]

const Navbar = () => {
  const { theme: { value, colors: { action, auxiliary, text } } } = useContext(ThemeContext)

  const { openModal } = useContext(ModalContext)

  const renderMenu = navData.map(item => {
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
          color: value === 'default' ? 'rgba(255, 255, 255, 0.55)' : action
        }}>
        <a
          className="menu__item-link"
          href={link}
          style={{
            color: value === 'plum' ? action : value !== 'default' && text
          }}>
          {name}
        </a>
        {
          submenuArr && (
            <ul className="menu__item-submenu">
              {submenu}
            </ul>
          )
        }
      </li >
    )
  })

  const mediaComponents = window.matchMedia('(max-width: 630px)').matches && (
    <li className="menu__item--actions">
      <button
        className="main-btn header__action login"
        onClick={openModal}
        style={{
          color: value === 'default' ? '' : action
        }}>
        Login
      </button>
      <Button
        className="header__action signup"
        onClick={openModal}>
        Sign Up
      </Button>
    </li>
  )

  return (
    <ul className="menu__list"
      style={window.matchMedia('(max-width: 991px)').matches
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