import React from 'react'

const OfficeList = () => {
    const officeSpaces = [
        {
            officeName: 'DBS',
            rent: 50000,
            location: "Chennai",
            image: '/office_image-1.jpeg'
        },
        {
            officeName: 'Cognizant',
            rent: 65000,
            location: "Kolkata",
            image: '/office_image-1.jpeg'
        },
        {
            officeName: 'XYZ',
            rent: 55000,
            location: "Kolkata",
            image: '/office_image-1.jpeg'
        },
        {
            officeName: 'ABC',
            rent: 70000,
            location: "Hyderabad",
            image: '/office_image-1.jpeg'
        },

    ];

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <h1 style={{textAlign: 'center'}}>Office Space, at Affordable Range</h1>
      {officeSpaces.map((office, index) => (
        <div key={index} style={{textAlign: 'center', border: "1px solid black", margin:"40px", width:"100vh"}}>
          <img src={office.image} alt={office.officeName} width="25%" height="25%" />
          <h3>Name: {office.officeName}</h3>
          <h3 style={{color: office.rent < 60000 ? 'red' : 'green'}}>
            Rent: ₹{office.rent}
          </h3>
          <h3>Address: {office.location}</h3>
        </div>
      ))}
    </div>
  )
}

export default OfficeList
