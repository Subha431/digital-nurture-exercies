import React from 'react'

const CourseDetails = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"2rem"}}>
      <h1>Course Details</h1>
      <div style={{border:"1px solid black", width:"200px", padding:"1rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <h2>Angular</h2>
      <p>04/05/2021</p>
      </div>

      <div style={{border:"1px solid black", width:"200px", padding:"1rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <h2>React</h2>
      <p>06/03/2021</p>
      </div>
    </div>
  )
}

export default CourseDetails
