import { useState, useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

import { Text } from './Text'
import { AttachIcon } from './AttachIcon'
import { LikeIcon } from './LikeIcon'
import { Button } from './Button'

const   ToolCard = ({ toolData, propHandler }) => {
  const { theme: { value, colors: { action, auxiliary, background, text: textColor } } } = useContext(ThemeContext)

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
        <b className="tools__card-spot"
          style={{
            top: `${mousePos.posY}px`,
            left: `${mousePos.posX}px`,
            background: action
          }}></b>
      )}
      <div className="tools__card-head">
        <div className="tools__card-icon">
          <img
            className="tools__card-icon-img"
            src={icon}
            alt={name} />
        </div>
        <div className="tools__card-caption">
          <h5 className="tools__card-name"
            style={{
              color: value === 'plum' || value === 'default' ? '#fff' : textColor
            }}>
            {name}
          </h5>
          <p className="tools__card-status"
            style={{
              color: value === 'light' ? `${textColor}cc` : `${action}cc`
            }}>
            {status}
          </p>
        </div>
      </div>
      <Text
        className="tools__card-description">
        {text}
      </Text>
      <div className="tools__card-actions">
        <label
          className="tools__card-action like"
          style={{ background: auxiliary }}>
          <input
            className={liked ? 'liked' : ''}
            type="checkbox"
            data-prop="liked"
            onChange={onPropHandle} />
          <LikeIcon />
        </label>
        <label
          className="tools__card-action share"
          style={{ background: auxiliary }}>
          <input
            className={attached ? 'attached' : ''}
            type="checkbox"
            data-prop="attached"
            onChange={onPropHandle} />
          <AttachIcon />
        </label>
        <Button onClick={() => window.location.href = url}>
          Visit
        </Button>
      </div>
    </div>
  )
}

export { ToolCard }