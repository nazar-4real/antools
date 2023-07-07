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
      <div className="tool__product" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
        <img src={icon} alt={name} style={{ width: '100px', height: '80px', objectFit: 'contain' }} />
        <Title style={{ margin: 0 }}>{name}</Title>
        <Text>{status}</Text>
        <Text>{text}</Text>
        <div className="tool__product-actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <LikeIcon style={{ ...(liked && { fill: '#dc143c', fillOpacity: 1 }) }} />
          <AttachIcon style={{ ...(attached && { fill: '#0091ff', fillOpacity: 1 }) }} />
        </div>
      </div>
      <Button onClick={() => navigate(-1)} style={{ marginTop: '40px' }}>Go back</Button>
    </Section>
  )
}

export default ToolPage