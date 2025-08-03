import React from 'react'

const BlogDetails = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"2rem"}}>
    <h1>Blog Details</h1>
      <div style={{border:"1px solid black", width:"250px", padding:"0.5rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"200px"}}>
        <h2>React Learning</h2>
        <h4>Stephen Biz</h4>
        <p>Welcome to learning React!</p>
      </div>

      <div style={{border:"1px solid black", width:"235px", padding:"1rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"200px"}}>
        <h2>Installation</h2>
        <h4>Schewzdenier</h4>
        <p>You can install React from npm.</p>
      </div>
    </div>
  )
}

export default BlogDetails
