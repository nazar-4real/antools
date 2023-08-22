import { useContext, lazy, Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { ThemeContext } from 'src/context/ThemeStore'

import { useLocalStorage } from 'src/hooks/useLocalStorage'

import 'src/assets/styles/pages/_toolpage.scss'

import { Section } from 'src/components/shared/Section'
import { Title } from 'src/components/shared/Title'
import { Text } from 'src/components/shared/Text'
import { Button } from 'src/components/shared/Button'

import { Like } from 'src/components/shared/Like'
import { Attach } from 'src/components/shared/Attach'
import { Loader } from 'src/components/shared/Loader'

import { onPropToggle } from '../HomePage/Homepage'

const LazyImg = lazy(() => import('../../components/shared/LazyImg'))

const ToolPage = () => {
  const { toolName } = useParams()

  const navigate = useNavigate()

  const [storageTools, setStorageTools] = useLocalStorage('toolsData')
  const { id, icon, name, text, status } = storageTools.find(({ url }) => url === toolName)

  const { attached, liked } = storageTools.find(({ url }) => url === toolName)

  const switchProp = ({ target }) => {
    const targetProp = target.getAttribute('data-prop')
    onPropToggle(targetProp, id, setStorageTools)
  }

  const { theme: { colors: { action } } } = useContext(ThemeContext)

  const capitalizePageTitle = name.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase())

  return (
    <>
      <Helmet>
        <title>{capitalizePageTitle}</title>
      </Helmet>

      <Section className="tool">
        <div className="tool__picture">
          <figure className="tool__figure">
            <Suspense fallback={<Loader />}>
              <LazyImg
                className="tool__figure-img"
                src={icon}
                alt={name} />
            </Suspense>
            <figcaption className="tool__figcaption">
              <Text style={{ color: action }}>{status}</Text>
            </figcaption>
          </figure>
          <div className="tool__actions">
            <Like liked={liked} onChange={switchProp} />
            <Attach attached={attached} onChange={switchProp} />
          </div>
        </div>
        <div className="tool__info">
          <Title style={{ margin: 0 }}>{name}</Title>
          <Text>{text}</Text>
          <Button
            onClick={() => navigate(-1)}
            style={{ marginTop: '40px' }}>
            Go back
          </Button>
        </div>
      </Section>
    </>
  )
}

export default ToolPage