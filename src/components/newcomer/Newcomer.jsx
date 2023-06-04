import { useState } from 'react'

import './newcomer.scss'

import { Section } from '../shared/Section'
import { Title } from '../shared/Title'
import { Text } from '../shared/Text'
import { Button } from '../shared/Button'

import { ToolCards } from '../shared/ToolCards'

import zeplin from '../../assets/images/newcomer/zeplin.svg'
import phpstorm from '../../assets/images/newcomer/phpstorm.svg'
import toolbox from '../../assets/images/newcomer/toolbox.svg'
import procreate from '../../assets/images/newcomer/procreate.svg'

const Newcomer = ({ onPropToggle }) => {

  const [newcomerData, setNewcomerData] = useState([
    {
      id: 1,
      icon: zeplin,
      name: 'Zeplin',
      status: 'Free & Paid',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
      attached: false,
      url: '#'
    },
    {
      id: 2,
      icon: phpstorm,
      name: 'PHPStorm',
      status: 'Free',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
      attached: false,
      url: '#'
    },
    {
      id: 3,
      icon: toolbox,
      name: 'Toolbox',
      status: 'Free',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
      attached: false,
      url: '#'
    },
    {
      id: 4,
      icon: procreate,
      name: 'Procreate',
      status: 'Paid',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
      attached: false,
      url: '#'
    }
  ])

  const propHandler = (prop, id) => {
    onPropToggle(prop, id, setNewcomerData, newcomerData)
  }

  return (
    <Section className="newcomer">
      <div className="newcomer__info">
        <Title>
          Newcomer Tools
        </Title>
        <Text>
          Wow! see the latest update of the most recommended tools from reliable designers and developers
        </Text>
        <Button>
          Explore more
        </Button>
      </div>
      <div className="newcomer__cards">
        <ToolCards
          data={newcomerData}
          propHandler={propHandler} />
      </div>
    </Section>
  )
}

export default Newcomer