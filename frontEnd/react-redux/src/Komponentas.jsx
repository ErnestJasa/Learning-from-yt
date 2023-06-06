import React from 'react'
import { useSelector } from 'react-redux'

const Komponentas = () => {
    const posts = useSelector((state => state.post.value))
  return (
    <div>{posts.map((item, id)=>{
        return <h2 key={id}>{item.title}</h2>
    })}</div>
  )
}

export default Komponentas