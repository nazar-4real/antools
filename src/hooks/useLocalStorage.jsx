import { useState, useEffect } from 'react'

export const useLocalStorage = (dataName, defaultData) => {
  const [storageData, setStorageData] = useState(
    JSON.parse(localStorage.getItem(dataName)) ?? defaultData
  )

  useEffect(() => {
    !localStorage.getItem(dataName) && localStorage.setItem(dataName, JSON.stringify(defaultData))
  }, [defaultData])

  const setNewData = newData => {
    setStorageData(newData)
    localStorage.setItem(dataName, JSON.stringify(newData))
  }

  return [storageData, setNewData]
}