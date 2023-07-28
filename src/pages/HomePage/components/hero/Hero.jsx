import { useContext, useMemo } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

import './hero.scss'

import { Button } from '../../../../components/shared/Button'
import { Form } from '../../../../components/shared/Form'
import { Section } from '../../../../components/shared/Section'
import { Title } from '../../../../components/shared/Title'
import { Text } from '../../../../components/shared/Text'

import { ReactComponent as Facebook } from 'src/assets/images/social/facebook.svg'
import { ReactComponent as Instagram } from 'src/assets/images/social/instagram.svg'
import { ReactComponent as Twitter } from 'src/assets/images/social/twitter.svg'

const socialData = [
  {
    id: 1,
    url: 'https://facebook.com/',
    name: 'Facebook',
    icon: <Facebook />
  },
  {
    id: 2,
    url: 'https://www.instagram.com/',
    name: 'Instagram',
    icon: <Instagram />
  },
  {
    id: 3,
    url: 'https://twitter.com/',
    name: 'Twitter',
    icon: <Twitter />
  }
]

const Hero = () => {
  const { theme: { value, colors: { action, text } } } = useContext(ThemeContext)

  const renderSocial = useMemo(() => socialData.map(item => {
    const { id, url, icon } = item

    return (
      <a
        className="social__link"
        href={url}
        key={id}
        target="_blank"
        style={{
          color: value === 'default' ? text : action
        }}>
        {icon}
      </a>
    )
  }), [socialData, value])

  return (
    <Section className="hero">
      <div className="hero__info">
        <Title size="50px">
          Awesome tools for Designer & Developer<span style={{
            color: value === 'default' ? action : text
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