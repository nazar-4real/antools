import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeStore'

export const Section = ({ className, isContainer = true, children, ...attrs }) => {

  const { theme: { colors: { auxiliary } } } = useContext(ThemeContext)

  return (
    <section className={className} {...attrs}>
      {isContainer ? (
        <div className="container">
          <div className={`${className}__body`} style={{
            background: className.trim() === 'brands' && auxiliary
          }}>
            {children}
          </div>
        </div>
      ) : (
        <div className={`${className}__body`}>
          {children}
        </div>
      )}
    </section>
  )
}