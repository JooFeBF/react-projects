
function Square ({ children, index, updateBoard, player }) {
  return (
    <div className='square' onClick={() => updateBoard(index, player)}>{children}</div>
  )
}

export default Square
