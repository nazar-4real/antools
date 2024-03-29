import { useContext, useMemo } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

import './brands.scss'

import { Section } from 'src/components/shared/Section'
import { Title } from 'src/components/shared/Title'

import { brandsData } from 'src/data/brandsData'

const Brands = () => {
  const { theme: { value, colors: { action, text } } } = useContext(ThemeContext)

  const brands = useMemo(() => brandsData.map(({ id, icon, name }) => (
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
  )), [brandsData, value])

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