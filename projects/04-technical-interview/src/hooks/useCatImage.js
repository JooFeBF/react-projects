import { useState, useEffect } from 'react'

const CAT_IMAGE_ENDPOINT = 'https://cataas.com/cat/says/'
const CAT_IMAGE_PREFIX = 'https://cataas.com'

const useCatImage = ({ fact }) => {
  const [factImage, setFactImage] = useState()

  useEffect(() => {
    if (!fact) return

    fetch(CAT_IMAGE_ENDPOINT.concat(fact.split(' ', 3).join(' ')).concat('?json=true'))
      .then(res => res.json())
      .then(json => setFactImage(json.url))
  }, [fact])

  const imageUrl = factImage ? `${CAT_IMAGE_PREFIX}${factImage}` : null

  return { imageUrl }
}

export default useCatImage
