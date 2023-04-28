import { useState, useEffect } from 'react'

import './style.css'
import getCatFact from './services/getCatFact'

const CAT_IMAGE_ENDPOINT = 'https://cataas.com/cat/says/'

const useCatImage = ({ fact }) => {
  const [factImage, setFactImage] = useState()

  useEffect(() => {
    if (!fact) return

    fetch(CAT_IMAGE_ENDPOINT.concat(fact.split(' ', 3).join(' ')).concat('?json=true'))
      .then(res => res.json())
      .then(json => setFactImage(json.url))
  }, [fact])

  return { factImage }
}

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshCatFact = async () => {
    const newFact = await getCatFact()
    console.log(newFact)
    setFact(newFact)
  }

  useEffect(() => {
    refreshCatFact()
  }, [])

  return { fact, refreshCatFact }
}

function App () {
  const { fact, refreshCatFact } = useCatFact()
  const { factImage } = useCatImage({ fact })

  const handleClick = () => {
    refreshCatFact()
  }

  return (
    <main style={{ display: 'grid', placeContent: 'center' }}>
      <h1>Cat facts app</h1>
      <section>
        <article>{fact}</article>
        <img style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover' }} src={'https://cataas.com' + factImage} alt='' />
      </section>
      <button onClick={handleClick}>Change fact</button>
    </main>
  )
}

export default App
