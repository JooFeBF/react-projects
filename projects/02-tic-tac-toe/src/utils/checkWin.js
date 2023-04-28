const checkWin = (board) => {
  let win = false

  for (let i = 0; i < 7; i += 3) {
    if (board[i] !== null) {
      if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) win = true
    } else continue
  }

  if (win) return win

  for (let i = 0; i < 3; i++) {
    if (board[i] !== null) {
      if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) win = true
    } else continue
  }

  if (win) return win

  if (board[0] !== null) {
    if (board[0] === board[4] && board[4] === board[8]) return true
  }
  if (board[2] !== null) {
    if (board[2] === board[4] && board[4] === board[6]) return true
  }

  return win
}

export default checkWin
