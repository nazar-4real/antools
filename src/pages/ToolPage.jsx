import { useParams, useNavigate } from 'react-router-dom'

import { useLocalStorage } from 'src/hooks/useLocalStorage'

import { toolsDataArr } from 'src/components/tools/Tools'

import { Section } from 'src/components/shared/Section'
import { Title } from 'src/components/shared/Title'
import { Text } from 'src/components/shared/Text'
import { Button } from 'src/components/shared/Button'

import { LikeIcon } from 'src/components/shared/LikeIcon'
import { AttachIcon } from 'src/components/shared/AttachIcon'

const styles = {
  paddingTop: '30px',
  textAlign: 'center',
}

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

  const navigate = useNavigate();

  const [storageTools] = useLocalStorage('toolsData');
  const { attached, liked } = storageTools.find(({ url }) => url === toolName)

  return (
    <Section className="tool" style={styles}>
      <div
        className="tool__product"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px' }}>
        <div className="tool__product-img" style={{ flex: '0 1 200px' }}>
          <figure className="tool__figure">
            <img src={icon} alt={name} style={{ width: '100px', height: '80px', objectFit: 'contain' }} />
          </figure>
          <div className="tool__product-actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
            <LikeIcon style={{ ...(liked && { fill: '#dc143c', fillOpacity: 1 }) }} />
            <AttachIcon style={{ ...(attached && { fill: '#0091ff', fillOpacity: 1 }) }} />
          </div>
        </div>
        <div className="tool__product-info" style={{ textAlign: 'left' }}>
          <div className="tool__product-caption" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
            <Title style={{ margin: 0 }}>{name}</Title>
            <Text>{status}</Text>
          </div>
          <Text>{text}</Text>
          <Button onClick={() => navigate(-1)} style={{ marginTop: '40px' }}>Go back</Button>
        </div>
      </div>
    </Section>
  )
}

export default ToolPage