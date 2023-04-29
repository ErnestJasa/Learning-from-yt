import React from 'react';
import ReactDom from 'react-dom';
import * as ReactDOMClient from 'react-dom/client'
import './index.css';

import {books} from './books'
import Book from './book'

const root = ReactDOMClient.createRoot(document.querySelector('#root'));


// function Greeting(){
//   return (
//   <div>
//     <First/>
//     <Message/>
//   </div>
//   );
// }

// const First = () =>   <h2>First component</h2>;

// const Message = () =>{
  //   return <p>This is a message</p>
  // }
  
  // const Greeting = () =>{
    //   return React.createElement('div',{},React.createElement('h1',{},'hello world'))
    // }
    
    
    // function BookList(){
      //  return (
        //  <section className='booklist'>
        //     <Book/>    
        //   </section>
        //   )
        // };
        
        // const Book = () =>{
          //   return (
            //   <article className='book'> 
            //     <Image></Image>
            //     <Title/>
            //     <Author/>
            
//   </article>
//   )
// };

// const Title = () =>{
  //   return (
    //     <h1>Diper Överlöde (Diary of a Wimpy)</h1>
    //   )
    // };
    
    // const Author = () => {
      //   return <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25'}}>Jeff Kinney</h4>
      // };
      
      // const Image = () => <img src="https://images-na.ssl-imag
      // es-amazon.com/images/I/61ZvgQihlkL._AC_UL600_SR600,400_.jpg" alt="" />
   


const names = ['john', 'peter', 'susan']


const newNames = names.map((name)=>{
  return <h1>{name}</h1>  
})
      
function BookList(){
  return (
     <section className='booklist'>
      {books.map((book)=>{               
        return (
          <Book key={book.id} {...book}></Book>
          )
      })}

    {/* 
      sita versija kai objektai ne masyve

    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>    
    <Book 
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author} 
    > */}
      {/* <p>
        Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Placeat alias atque expedita 
        quasi earum quis quos perferendis voluptatibus unde tenetur.
      </p> sita dalis vainasi children 
    </Book>    */}        
  </section>
  )
};





root.render(<BookList/>)

//ReactDom.render(<Greeting/>,document.getElementById('root'))   senesne versija, kaip importuot cia aprasyta html i pagrindini html faila