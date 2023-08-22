import { Helmet } from 'react-helmet-async'

import Tools from 'src/components/tools/Tools'

const ToolsPage = () => {

  return (
    <>
      <Helmet>
        <title>Tools</title>
      </Helmet>

      <Tools />
    </>
  )
}

export default ToolsPage