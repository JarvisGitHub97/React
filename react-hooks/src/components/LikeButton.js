import React, { useState, useEffect } from 'react'

const LikeButton = () => {
  const [ like, setLike ] = useState(0) 
  const [ on, setOn ] = useState(true)
  // const [ obj, setObj ] = useState({ like: 0, on: true })
  useEffect(() => {
    document.title = `点击了${like}次`
  })
  return (
    <>
      <button onClick={()=>{setLike(like + 1)}}>
        {like} 赞
      </button>
      <button onClick={()=>{setOn(!on)}}>
        { on ? 'on' : 'off' }
      </button>
    </>
  )
}

export default LikeButton 