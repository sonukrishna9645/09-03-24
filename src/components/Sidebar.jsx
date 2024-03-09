import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
        <a href='/Admindash'><li>DASHBOARD</li></a>
       </ul>
        Registrations
       <ul>
        <a href='/Coursemanage'><li>ADD COURSE</li></a>
        
       </ul>
       VIEW
       <ul>
       <a href="/Courseview"><li>COURSE VIEW</li></a>
       
      
      </ul>
    </div>
  )
}

export default Sidebar