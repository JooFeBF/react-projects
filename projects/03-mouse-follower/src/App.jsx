import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseFollowing, setMouseFollowing] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
    }

    if (mouseFollowing) {
      window.addEventListener('mousemove', handleMove)
    }

    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseFollowing])

  return (
    <main>
      <div className='mouse-follower' style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
      <button onClick={() => setMouseFollowing(!mouseFollowing)}>{`${mouseFollowing ? 'Disable' : 'Enable'} mouse following`}</button>
    </main>
  )
}

export default App
