import React from 'react'

const Book = (props) =>{  
  const {img, title, author } = props;
  //atribute, eventHandler
  //onClick, OnMouseOver
  const clickHandler = (e)=>{
    console.log(e);
    console.log(e.target);
    alert('helloworld');
  };
  const complexExample = (author)=>{
    console.log(author)
  }
  return (    
    <article className='book' onMouseOver={()=>{
      console.log(title)
    }}> 
    <img src={img} alt="" />
    <h1 onClick={()=> console.log(title)}>{title}</h1>
    <h4>{author}</h4>  
    <button type='button' onClick={clickHandler}>example</button> 
    <button type='button' className='btn btn-primary' onClick={()=>complexExample(author)}>more complex example</button> 

    {/* <p>{let x = 6}</p> sitaip negalima priskirti variable*/}
  </article>
  )
};

export default Book