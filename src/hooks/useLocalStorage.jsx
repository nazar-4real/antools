import { useState, useEffect } from 'react'

export const useLocalStorage = (dataName, defaultData) => {
  const [storageData, setStorageData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(dataName)) ?? defaultData
    } catch (error) {
      return defaultData
    }
  })

  useEffect(() => {
    localStorage.setItem(dataName, JSON.stringify(storageData))
  }, [storageData])

  return [storageData, setStorageData]
}