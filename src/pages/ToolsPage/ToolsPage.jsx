import { useLocalStorage } from 'src/hooks/useLocalStorage'

import Tools from 'src/components/tools/Tools'

import { toolsDataArr } from 'src/data/toolsData'

const ToolsPage = () => {
  const [toolsPageData, setToolsPageData] = useLocalStorage('toolsData', toolsDataArr)

  return (
    <Tools
      data={toolsPageData}
      setData={setToolsPageData} />
  )
}

export default ToolsPage