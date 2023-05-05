import useCatFact from './hooks/useCatFact'
import useCatImage from './hooks/useCatImage'
import './style.css'

function App () {
  const { fact, refreshCatFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshCatFact()
  }

  return (
    <main style={{ display: 'grid', placeContent: 'center' }}>
      <h1>Cat facts app</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img style={{ width: '100%', maxHeight: '60vh', objectFit: 'contain' }} src={imageUrl} alt={`image obtained by a service searching for the three first words of the sentence ${fact}`} />}
      </section>
      <button onClick={handleClick}>Change fact</button>
    </main>
  )
}

export default App
