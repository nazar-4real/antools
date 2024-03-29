import { useContext, useMemo } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

import './footer.scss'

import { Logo } from '../shared/Logo'
import { Text } from '../shared/Text'

const footerColsData = [
  {
    id: 1,
    title: 'Contact Us',
    nav: [
      {
        id: 1,
        url: 'tel:+621987463',
        name: '+621987463'
      },
      {
        id: 2,
        url: 'https://goo.gl/maps/xuQS42fvno8EFoMu7',
        name: 'M Building, No.10 A'
      },
      {
        id: 3,
        url: 'mailto:antools@awesome.com',
        name: 'antools@awesome.com'
      }
    ]
  },
  {
    id: 2,
    title: 'Categories',
    nav: [
      {
        id: 1,
        url: '/',
        name: 'Design'
      },
      {
        id: 2,
        url: '/',
        name: 'Development'
      },
    ]
  },
  {
    id: 3,
    title: 'Company Info',
    nav: [
      {
        id: 1,
        url: '/',
        name: 'About Us'
      },
      {
        id: 2,
        url: '/',
        name: 'Our Partners'
      },
      {
        id: 3,
        url: '/',
        name: 'Blog'
      }
    ]
  },
]

const Footer = () => {
  const { theme: { value, colors: { action, text } } } = useContext(ThemeContext)

  const footerNavCols = useMemo(() => footerColsData.map(({ id: colId, title, nav }) => {
    const colNavLink = nav?.map(({ id: linkId, url, name }) => (
      <li
        className="footer__column-nav-item"
        key={linkId}>
        <a
          className="footer__column-nav-link"
          href={url}
          style={{
            color: value === 'plum' ? action : `${text}99`
          }}>
          {name}
        </a>
      </li>
    ))

    return nav && (
      <div
        className="footer__column"
        key={colId}>
        <p
          className="footer__column-title"
          style={{ color: action }}>
          {title}
        </p>
        <ul className="footer__column-nav">
          {colNavLink}
        </ul>
      </div>
    )
  }), [footerColsData, value])

  return (
    <footer
      className="footer"
      style={{
        '--borderCol': value === 'default' ? `${text}33` : `${action}33`
      }}>
      <div className="container">
        <div className="footer__body">
          <div className="footer__columns">
            <div className="footer__column">
              <Logo />
              <p
                className="footer__copy"
                style={{
                  color: value === 'light' && text
                }}>
                Copyright 2021. Antools
              </p>
              <Text>
                Antool is a web collection of information on paid or free Design and Development tools
              </Text>
            </div>
            {footerNavCols}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer