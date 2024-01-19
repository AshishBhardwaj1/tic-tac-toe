import React from 'react'

 const Square = ({val,onSquareClick}) => {


  return ( 
   <button  onClick={onSquareClick} className='square'>{val}</button>
  )
}

export default Square;