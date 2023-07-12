import { useState, useContext, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from 'src/context/ThemeStore'

import { Text } from './Text'
import { Attach } from './Attach'
import { Like } from './Like'
import { Button } from './Button'

import { Loader } from './Loader'

const LazyImg = lazy(() => import('./LazyImg.jsx'))

const ToolCard = ({ toolData, propHandler }) => {
  const {
    theme: {
      value,
      colors: { action, auxiliary, background, text: textColor }
    }
  } = useContext(ThemeContext)

  const { id, icon, name, status, text, liked, attached, url } = toolData

  const onPropHandle = (event) => {
    propHandler(event.currentTarget.getAttribute('data-prop'), id)
  }

  const [mousePos, setMousePos] = useState({
    posX: 0,
    posY: 0
  })

  const [visible, setVisible] = useState(false)

  const handleMouseMove = e => {
    const cardRect = e.currentTarget.getBoundingClientRect()
    const targetX = Math.floor(e.clientX - cardRect.left)
    const targetY = Math.floor(e.clientY - cardRect.top)

    setMousePos({
      posX: targetX,
      posY: targetY
    })
  }

  return (
    <div
      className="tools__card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(window.matchMedia('(min-width: 768px)').matches)}
      onMouseLeave={() => setVisible(false)}
      style={{
        '--scrollbarThumb': action,
        '--scrollbar': background,
        background: auxiliary
      }}>
      {visible && (
        <b
          className="tools__card-spot"
          style={{
            top: `${mousePos.posY}px`,
            left: `${mousePos.posX}px`,
            background: action
          }}></b>
      )}
      <div className="tools__card-head">
        <div className="tools__card-icon">
          <Suspense fallback={<Loader />}>
            <LazyImg
              className="tools__card-icon-img"
              src={icon}
              alt={name} />
          </Suspense>
        </div>
        <div className="tools__card-caption">
          <h3
            className="tools__card-name"
            style={{
              color: ['default', 'plum'].includes(value) ? '#fff' : textColor
            }}>
            {name}
          </h3>
          <p
            className="tools__card-status"
            style={{
              color: value === 'light' ? `${textColor}cc` : `${action}cc`
            }}>
            {status}
          </p>
        </div>
      </div>
      <Text className="tools__card-description">
        {text}
      </Text>
      <div className="tools__card-actions">
        <Like liked={liked} onChange={onPropHandle} />
        <Attach attached={attached} onChange={onPropHandle} />
        <Link
          to={`/tools/${url}`}>
          <Button>
            Visit
          </Button>
        </Link>
      </div>
    </div>
  )
}

export { ToolCard }