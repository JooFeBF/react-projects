import { useState } from 'react'
import './App.css'
import Square from './components/Square'

import checkWin from './utils/checkWin'
import PLAYERS from './constants/game.js'
import confetti from 'canvas-confetti'

function App () {
  const [board, setBoard] = useState(() => {
    return window.localStorage.getItem('board') ? JSON.parse(window.localStorage.getItem('board')) : Array(9).fill(null)
  })
  const [player, setPlayer] = useState(() => {
    return window.localStorage.getItem('player') ? JSON.parse(window.localStorage.getItem('player')) : PLAYERS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (i, player) => {
    if (board[i] || winner) return board

    const newPlayer = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X
    window.localStorage.setItem('player', JSON.stringify(newPlayer))

    const newBoard = [...board]
    newBoard[i] = player
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    if (checkWin(newBoard)) {
      setWinner(player)
      window.localStorage.removeItem('board')
      window.localStorage.removeItem('player')
      confetti()
    } else if (newBoard.every(field => field !== null)) {
      setWinner(false)
      window.localStorage.removeItem('board')
      window.localStorage.removeItem('player')
    }

    setPlayer(newPlayer)
    setBoard(newBoard)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setPlayer(PLAYERS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('player')
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => <Square key={index} index={index} updateBoard={updateBoard} player={player}>{square}</Square>)
        }
      </section>
      <section className='turn'>
        <div className={`square ${player === PLAYERS.X ? 'is-selected' : null}`}>{PLAYERS.X}</div>
        <div className={`square ${player === PLAYERS.O ? 'is-selected' : null}`}>{PLAYERS.O}</div>
      </section>
      {
        winner !== null
          ? <section className='winner'>
            <div className='text'>
              {
                      winner === false
                        ? <h2>Tie</h2>
                        : <>
                          <h2>The winner is:</h2>
                          <div className='square'>{winner}</div>
                        </>
                    }
              <button onClick={resetGame}>Play again</button>
            </div>
          </section>
          : null
      }
    </main>
  )
}

export default App
