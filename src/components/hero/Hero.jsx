import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

import './hero.scss'

import { Button } from '../shared/Button'
import { Form } from '../shared/Form'
import { Section } from '../shared/Section'
import { Title } from '../shared/Title'
import { Text } from '../shared/Text'

import facebook from 'src/assets/images/social/facebook.svg'
import instagram from 'src/assets/images/social/instagram.svg'
import twitter from 'src/assets/images/social/twitter.svg'

const socialData = [
  {
    id: 1,
    url: 'https://facebook.com/',
    name: 'Facebook',
    icon: facebook
  },
  {
    id: 2,
    url: 'https://www.instagram.com/',
    name: 'Instagram',
    icon: instagram
  },
  {
    id: 3,
    url: 'https://twitter.com/',
    name: 'Twitter',
    icon: twitter
  }
]

const Hero = () => {
  const { theme: { value } } = useContext(ThemeContext)

  const renderSocial = socialData.map(item => {
    const { id, url, name, icon } = item

    return (
      <a
        className="social__link"
        href={url}
        key={id}
        target="_blank">
        <img
          className="social__link-icon"
          src={icon}
          alt={name} />
      </a>
    )
  })

  return (
    <Section className="hero">
      <div className="hero__info">
        <Title size="50px">
          Awesome tools for Designer & Developer<span style={{
            color: value !== 'default' && '#fff'
          }}>.</span>
        </Title>
        <Text>
          Antool is a web collection of information on paid or free Design and Development tools
        </Text>
        <Form
          className="hero__form"
          placeholder="find more than 430+ tools...">
          <Button className="hero__form-submit">
            Search
          </Button>
        </Form>
      </div>
      <div className="social">
        {renderSocial}
      </div>
    </Section>
  )
}

export default Hero