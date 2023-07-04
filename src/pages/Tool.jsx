import { useParams } from 'react-router-dom'

import { toolsInfo } from 'src/components/tools/Tools'

import { Section } from 'src/components/shared/Section'
import { Title } from 'src/components/shared/Title'
import { Text } from 'src/components/shared/Text'

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
    liked,
    attached,
    url
  } = toolsInfo.find(({ url }) => url.toLowerCase() === toolName.toLowerCase())

  return (
    <Section className="tool" style={styles}>
      <div className="tool__caption" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Title style={{ margin: 0 }}>{name}</Title>
        <Text>{status}</Text>
      </div>
      <img src={icon} alt={name} />
    </Section>
  )
}

export default ToolPage