import { useParams, useNavigate } from 'react-router-dom'

import { useLocalStorage } from 'src/hooks/useLocalStorage'

import { toolsDataArr } from 'src/components/tools/Tools'

import 'src/assets/styles/pages/_toolpage.scss'

import { Section } from 'src/components/shared/Section'
import { Title } from 'src/components/shared/Title'
import { Text } from 'src/components/shared/Text'
import { Button } from 'src/components/shared/Button'

import { Like } from 'src/components/shared/Like'
import { Attach } from 'src/components/shared/Attach'

import { onPropToggle } from './Homepage'

const ToolPage = () => {
  const { toolName } = useParams()

  const {
    id,
    icon,
    name,
    status,
    text,
    url
  } = toolsDataArr.find(({ url }) => url.toLowerCase() === toolName.toLowerCase())

  const navigate = useNavigate()

  const [storageTools, setStorageTools] = useLocalStorage('toolsData')
  const { attached, liked } = storageTools.find(({ url }) => url === toolName)

  const switchProp = ({ target }) => {
    const targetProp = target.getAttribute('data-prop')
    onPropToggle(targetProp, id, setStorageTools)
  }

  return (
    <Section className="tool">
      <div className="tool__picture">
        <figure className="tool__figure">
          <img
            className="tool__figure-img"
            src={icon}
            alt={name} />
        </figure>
        <div className="tool__actions">
          <Like liked={liked} onChange={switchProp} />
          <Attach attached={attached} onChange={switchProp} />
        </div>
      </div>
      <div className="tool__info">
        <div className="tool__info-caption">
          <Title style={{ margin: 0 }}>{name}</Title>
          <Text>{status}</Text>
        </div>
        <Text>{text}</Text>
        <Button
          onClick={() => navigate(-1)}
          style={{ marginTop: '40px' }}>
          Go back
        </Button>
      </div>
    </Section>
  )
}

export default ToolPage