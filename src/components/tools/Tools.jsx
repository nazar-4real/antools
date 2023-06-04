import { useState, useEffect } from 'react'

import './tools.scss'

import { Section } from '../shared/Section'
import { Title } from '../shared/Title'
import { Text } from '../shared/Text'
import { Button } from '../shared/Button'
import { ToolCards } from '../shared/ToolCards'

import codepen from 'src/assets/images/tools/codepen.svg'
import docker from 'src/assets/images/tools/docker.svg'
import figma from 'src/assets/images/tools/figma.svg'
import git from 'src/assets/images/tools/git.svg'
import github from 'src/assets/images/tools/github.svg'
import gitlab from 'src/assets/images/tools/gitlab.svg'
import invision from 'src/assets/images/tools/invision.svg'
import kubernetes from 'src/assets/images/tools/kubernetes.svg'
import nodejs from 'src/assets/images/tools/nodejs.svg'
import notion from 'src/assets/images/tools/notion.svg'
import npm from 'src/assets/images/tools/npm.svg'
import react from 'src/assets/images/tools/react.svg'
import sass from 'src/assets/images/tools/sass.svg'
import sketch from 'src/assets/images/tools/sketch.svg'
import slack from 'src/assets/images/tools/slack.svg'
import terminal from 'src/assets/images/tools/terminal.svg'
import vsCode from 'src/assets/images/tools/vs-code.svg'

import { DataService } from 'src/services/DataService'

const Tools = ({ onPropToggle }) => {
  const [toolsData, setToolsData] = useState(
    [
      {
        id: 1,
        icon: figma,
        name: 'FIGMA',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 2,
        icon: sketch,
        name: 'Sketch',
        status: 'Trial & Paid',
        text: 'Consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 3,
        icon: vsCode,
        name: 'Visual Studio Code',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 4,
        icon: notion,
        name: 'Notion',
        status: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 5,
        icon: slack,
        name: 'Slack',
        status: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 6,
        icon: invision,
        name: 'Invision',
        status: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 7,
        icon: git,
        name: 'Git',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 8,
        icon: github,
        name: 'GitHub',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 9,
        icon: gitlab,
        name: 'GitLab',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 10,
        icon: nodejs,
        name: 'NodeJS',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 11,
        icon: npm,
        name: 'NPM',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 12,
        icon: react,
        name: 'React Js',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 13,
        icon: sass,
        name: 'SASS/SCSS',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 14,
        icon: terminal,
        name: 'Terminal',
        status: 'Free',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 15,
        icon: codepen,
        name: 'Codepen',
        status: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 16,
        icon: docker,
        name: 'Docker',
        status: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      },
      {
        id: 17,
        icon: kubernetes,
        name: 'Kubernetes',
        status: 'Free & Paid',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit.',
        liked: false,
        attached: false,
        url: '#'
      }
    ]
  )

  const [visibleTools, setVisibleTools] = useState(6)

  const handleLoadMore = () => {
    setVisibleTools(prevTools => prevTools + 3)
  };

  const toolsToShow = toolsData.slice(0, visibleTools)

  const propHandler = (prop, id) => {
    onPropToggle(prop, id, setToolsData, toolsData)
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
        <ToolCards
          data={toolsToShow}
          propHandler={propHandler} />
      </div>
      {toolsToShow.length < toolsData.length && (
        <Button
          className="outlined"
          href="/"
          onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </Section>
  )
}

export default Tools