import { useState, useMemo } from 'react'

import './newcomer.scss'

import { Section } from 'src/components/shared/Section'
import { Title } from 'src/components/shared/Title'
import { Text } from 'src/components/shared/Text'
import { Button } from 'src/components/shared/Button'

import { ToolCard } from 'src/components/shared/ToolCard'

import { onPropToggle } from 'src/pages/HomePage/Homepage'

import { newcomerToolsArr } from 'src/data/newcomerData'

const Newcomer = () => {
  const [newcomerData, setNewcomerData] = useState(newcomerToolsArr)

  const propHandler = (prop, id) => {
    onPropToggle(prop, id, setNewcomerData)
  }

  const newcomerCards = useMemo(() => newcomerData.map(dataItem => (
    <ToolCard
      key={dataItem.id}
      toolData={dataItem}
      propHandler={propHandler} />
  )), [newcomerData])

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
        {newcomerCards}
      </div>
    </Section>
  )
}

export default Newcomer