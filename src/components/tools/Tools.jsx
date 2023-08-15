import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

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
  const [storageToolsData, setStorageToolsData] = useLocalStorage('toolsData', toolsDataArr.slice(0, 6))

  const { pathname } = useLocation()

  useEffect(() => {
    setStorageToolsData(storageToolsData)
  }, [storageToolsData])

  const propHandler = (prop, id) => {
    onPropToggle(prop, id, setStorageToolsData)
  }

  const loadMoreTools = () => {
    const nextTools = toolsDataArr.slice(storageToolsData.length, storageToolsData.length + 3)
    setStorageToolsData(prevTools => [...prevTools, ...nextTools])
  }

  const dataInstance = new DataService()

  useEffect(() => {
    dataInstance.getPosts(storageToolsData.length)
      .then(posts => {
        setStorageToolsData(prevToolsData => {
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

  const rollUpCards = () => setStorageToolsData(prevData => prevData.slice(0, 6))

  const toolsCards = useMemo(() => storageToolsData.map((dataItem) => (
    <ToolCard
      key={dataItem.id}
      toolData={dataItem}
      propHandler={propHandler} />
  )), [storageToolsData, propHandler])

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
      {storageToolsData.length < toolsDataArr.length ? (
        <Button
          className="outlined"
          href="/"
          onClick={loadMoreTools}>
          Load More
        </Button>
      ) : !pathname.includes('tools')
        ? (
          <Button
            className="outlined"
            href="/"
            onClick={rollUpCards}>
            Roll Up
          </Button>
        )
        : null}
    </Section>
  )
}

export default Tools