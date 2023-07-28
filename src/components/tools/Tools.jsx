import { useState, useEffect, useMemo } from 'react'

import { useLocalStorage } from 'src/hooks/useLocalStorage'

import { DataService } from 'src/services/DataService'

import './tools.scss'

import { Section } from '../shared/Section'
import { Title } from '../shared/Title'
import { Text } from '../shared/Text'
import { Button } from '../shared/Button'
import { ToolCard } from '../shared/ToolCard'

import { onPropToggle } from 'src/pages/HomePage/Homepage'

import { toolsDataArr } from 'src/data/toolsData'

const Tools = () => {
  const [toolsData, setToolsData] = useState(() =>
    JSON.parse(localStorage.getItem('toolsData')) ?? toolsDataArr.slice(0, 6)
  )

  const [storageTools, setStorageTools] = useLocalStorage('toolsData', toolsData)

  useEffect(() => {
    setStorageTools(toolsData)
  }, [toolsData])

  const propHandler = (prop, id) => {
    onPropToggle(prop, id, setToolsData)
  }

  const handleLoadMore = () => {
    const nextTools = toolsDataArr.slice(toolsData.length, toolsData.length + 3)
    setToolsData(prevTools => [...prevTools, ...nextTools])
  }

  const dataInstance = new DataService()

  useEffect(() => {
    dataInstance.getPosts(toolsData.length)
      .then(posts => {
        setToolsData(prevToolsData => {
          return prevToolsData.map((dataItem, idx) => {
            const modifiedText = (wordCount) => {
              const capitalizedString = `${posts[idx].body[0].toUpperCase()}${posts[idx].body.substring(1)}`

              return capitalizedString
                .split(/[\s/]+/)
                .slice(0, wordCount)
                .reduce((string, word) => `${string} ${word}`, '')
            }

            return {
              ...dataItem,
              text: modifiedText(16)
            }
          })
        })
      })
  }, [])

  const rollUpCards = () => setToolsData(prevData => prevData.slice(0, 6))

  const toolsCards = useMemo(() => storageTools.map((dataItem) => (
    <ToolCard
      key={dataItem.id}
      toolData={dataItem}
      propHandler={propHandler} />
  )), [storageTools, propHandler])

  return (
    <Section className="tools">
      <div className="tools__info">
        <Title>
          Most Popular Tools
        </Title>
        <Text>
          Tools for the best Designers and Developers
          most popularly used in the world
        </Text>
      </div>
      <div className="tools__cards">
        {toolsCards}
      </div>
      {toolsData.length < toolsDataArr.length ? (
        <Button
          className="outlined"
          href="/"
          onClick={handleLoadMore}>
          Load More
        </Button>
      ) : (
        <Button
          className="outlined"
          href="/"
          onClick={rollUpCards}>
          Roll Up
        </Button>
      )}
    </Section>
  )
}

export default Tools