import { useState } from 'react'

import Hero from './components/hero/Hero'
import Tools from 'src/components/tools/Tools'
import Brands from './components/brands/Brands'
import Newcomer from './components/newcomer/Newcomer'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

import { toolsDataArr } from 'src/data/toolsData'

export const onPropToggle = (prop, id, updateData) => {
  updateData(prevData =>
    prevData.map(dataItem =>
      dataItem.id === id
        ? { ...dataItem, [prop]: !dataItem[prop] }
        : dataItem
    )
  )
}

const Homepage = () => {
  const [visibleToolsData, setVisibleToolsData] = useState(toolsDataArr.slice(0, 6))

  const loadMoreTools = () => {
    const nextTools = toolsDataArr.slice(visibleToolsData.length, visibleToolsData.length + 3)
    setVisibleToolsData(prevTools => [...prevTools, ...nextTools])
  }

  return (
    <>
      <Hero />
      <Tools
        data={visibleToolsData}
        setData={setVisibleToolsData}
        loadMoreTools={loadMoreTools} />
      <Brands />
      <Newcomer />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Homepage