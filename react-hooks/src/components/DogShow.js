import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DogShow = () => {
  const [ url, setUrl ] = useState('')
  const [ loading, setLoading ] = useState(true)
  const style = {
    width: 200
  }
  const [ fetch, setFetch ] = useState(false)

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then((result) => {
      setUrl(result.data.message)
      setLoading(false)
    })
  }, [fetch])
  return (
    <>
      { loading ? <p>读取中...</p> : <img src={url} alt="dog" style={style}/> }
      <button onClick={()=>{setFetch(!fetch)}}>再看一张图片</button>
    </>
  )
}

export default DogShow