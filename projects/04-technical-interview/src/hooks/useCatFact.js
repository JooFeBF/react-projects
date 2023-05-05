import { useState, useEffect } from 'react'

import getCatFact from '../services/getCatFact'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshCatFact = async () => {
    const newFact = await getCatFact()
    setFact(newFact)
  }

  useEffect(() => {
    refreshCatFact()
  }, [])

  return { fact, refreshCatFact }
}
export default useCatFact
