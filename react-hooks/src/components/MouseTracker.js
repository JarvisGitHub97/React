import React, { useState, useEffect } from 'react'

const MouseTracker = () => {
  const [ positions, setPositions ] = useState({x: 0, y: 0})
  useEffect(() => {
    const updateMouse = (event) => {
      setPositions({x: event.clientX, y: event.clientY})
      console.log('inner')
    }
    console.log('add event')
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
      console.log('remove event')
    }
  })
  return (
    <p>X: {positions.x} Y: {positions.y}</p>
  )
}

export default MouseTracker