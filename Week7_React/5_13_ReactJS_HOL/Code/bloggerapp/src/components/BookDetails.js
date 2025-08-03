import React from 'react'

const BookDetails = () => {
    const bookList = [
        {title:"Master React", price:670},
        {title:"Deep Dive Into Angular", price:800},
        {title:"Mongo Essentials", price:450},
        {title:"Advanced Javascript", price:750},
        {title:"Master RestAPIs", price:560},
    ]
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h1>Book Details</h1>
      {bookList.map(book => (
       <ul style={{border:"1px solid black", width:"30%", padding:"1rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100px" }}>
        <li style={{fontWeight:"bold"}}>{book.title}</li>
        <p>Price: {book.price}</p>
       </ul>
      )
      )
      }
    </div>
  )
}

export default BookDetails
