import { useState, useEffect, useMemo } from 'react'

import { useLocalStorage } from 'src/hooks/useLocalStorage'

import { DataService } from 'src/services/DataService'

import './tools.scss'

import { Section } from '../shared/Section'
import { Title } from '../shared/Title'
import { Text } from '../shared/Text'
import { Button } from '../shared/Button'
import { ToolCard } from '../shared/ToolCard'

import codepen from 'src/assets/images/tools/codepen.svg'
import docker from 'src/assets/images/tools/docker.svg'
import figma from 'src/assets/images/tools/figma.svg'
import git from 'src/assets/images/tools/git.svg'
import github from 'src/assets/images/tools/github.svg'
import gitlab from 'src/assets/images/tools/gitlab.svg'
import invision from 'src/assets/images/tools/invision.svg'
import kubernetes from 'src/assets/images/tools/kubernetes.svg'
import nextjs from 'src/assets/images/tools/nextjs.svg'
import nodejs from 'src/assets/images/tools/nodejs.svg'
import notion from 'src/assets/images/tools/notion.svg'
import npm from 'src/assets/images/tools/npm.svg'
import react from 'src/assets/images/tools/react.svg'
import sass from 'src/assets/images/tools/sass.svg'
import sketch from 'src/assets/images/tools/sketch.svg'
import slack from 'src/assets/images/tools/slack.svg'
import terminal from 'src/assets/images/tools/terminal.svg'
import vsCode from 'src/assets/images/tools/vs-code.svg'
import vercel from 'src/assets/images/tools/vercel.svg'

import { onPropToggle } from 'src/pages/Homepage'

export const toolsDataArr = [
  {
    id: 1,
    icon: figma,
    name: 'FIGMA',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    liked: false,
    attached: false,
    url: 'figma'
  },
  {
    id: 2,
    icon: sketch,
    name: 'Sketch',
    status: 'Trial & Paid',
    text: 'Consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    liked: false,
    attached: false,
    url: 'sketch'
  },
  {
    id: 3,
    icon: vsCode,
    name: 'Visual Studio Code',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.',
    liked: false,
    attached: false,
    url: 'visualstudio'
  },
  {
    id: 4,
    icon: notion,
    name: 'Notion',
    status: 'Free & Paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    liked: false,
    attached: false,
    url: 'notion'
  },
  {
    id: 5,
    icon: slack,
    name: 'Slack',
    status: 'Free & Paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    liked: false,
    attached: false,
    url: 'slack'
  },
  {
    id: 6,
    icon: invision,
    name: 'Invision',
    status: 'Free & Paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
    liked: false,
    attached: false,
    url: 'invisionapp'
  },
  {
    id: 7,
    icon: git,
    name: 'Git',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.',
    liked: false,
    attached: false,
    url: 'git'
  },
  {
    id: 8,
    icon: github,
    name: 'GitHub',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    liked: false,
    attached: false,
    url: 'github'
  },
  {
    id: 9,
    icon: gitlab,
    name: 'GitLab',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    liked: false,
    attached: false,
    url: 'gitlab'
  },
  {
    id: 10,
    icon: nodejs,
    name: 'NodeJS',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
    liked: false,
    attached: false,
    url: 'nodejs'
  },
  {
    id: 11,
    icon: npm,
    name: 'NPM',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.',
    liked: false,
    attached: false,
    url: 'npm'
  },
  {
    id: 12,
    icon: react,
    name: 'React Js',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    liked: false,
    attached: false,
    url: 'react'
  },
  {
    id: 13,
    icon: sass,
    name: 'SASS/SCSS',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    liked: false,
    attached: false,
    url: 'sass'
  },
  {
    id: 14,
    icon: terminal,
    name: 'Terminal(zsh)',
    status: 'Free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
    liked: false,
    attached: false,
    url: 'zsh-terminal'
  },
  {
    id: 15,
    icon: codepen,
    name: 'Codepen',
    status: 'Free & Paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
    liked: false,
    attached: false,
    url: 'codepen'
  },
  {
    id: 16,
    icon: docker,
    name: 'Docker',
    status: 'Free & Paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
    liked: false,
    attached: false,
    url: 'docker'
  },
  {
    id: 17,
    icon: kubernetes,
    name: 'Kubernetes',
    status: 'Free & Paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
    liked: false,
    attached: false,
    url: 'kubernetes'
  },
  {
    id: 18,
    icon: nextjs,
    name: 'Next JS',
    status: 'Free & Paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
    liked: false,
    attached: false,
    url: 'nextjs'
  },
  {
    id: 19,
    icon: vercel,
    name: 'Vercel',
    status: 'Free & Paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
    liked: false,
    attached: false,
    url: 'vercel'
  }
]

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