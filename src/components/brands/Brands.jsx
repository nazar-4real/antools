import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

import './brands.scss'

import { Section } from '../shared/Section'
import { Title } from '../shared/Title'

import microsoft from 'src/assets/images/brands/microsoft.svg'
import google from 'src/assets/images/brands/google.svg'
import slack from 'src/assets/images/brands/slack.svg'
import wordpress from 'src/assets/images/brands/wordpress.svg'

const brandsData = [
  {
    id: 1,
    icon: microsoft,
    name: 'Microsoft'
  },
  {
    id: 2,
    icon: google,
    name: 'Google'
  },
  {
    id: 3,
    icon: slack,
    name: 'Slack'
  },
  {
    id: 4,
    icon: wordpress,
    name: 'WordPress'
  },
]

const Brands = () => {
  const { theme: { value, colors: { action, text } } } = useContext(ThemeContext)

  const brands = brandsData.map(({ id, icon, name }) => (
    <div
      className="brands__item"
      key={id}>
      <img
        className="brands__item-img"
        src={icon}
        alt={name}
        style={{
          filter: value === 'light' && 'brightness(0)'
        }} />
    </div>
  ))

  return (
    <Section
      className="brands"
      style={{
        '--spotCol': `${action}88`
      }}>
      <Title style={{
        color: value === 'light' ? text : action
      }}>
        Trusted more than 150+ brand
      </Title>
      <div className="brands__items">
        {brands}
      </div>
    </Section>
  )
}

export default Brands