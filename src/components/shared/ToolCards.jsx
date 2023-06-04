import { ToolCard } from './ToolCard'

const ToolCards = ({ data, propHandler }) => (
  <>
    {data.map(itemData => (
      <ToolCard
        key={itemData.id}
        toolData={itemData}
        propHandler={propHandler} />
    ))}
  </>
)

export { ToolCards }