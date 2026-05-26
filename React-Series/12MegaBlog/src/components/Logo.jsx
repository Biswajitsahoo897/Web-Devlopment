import React from 'react'

function Logo({ width = "150px" }) {
  return (
    <div>
      <img 
        src="https://www.svgrepo.com/show/156931/blogger.svg" 
        alt="Logo" 
        style={{ width }} 
      />
    </div>
  )
}

export default Logo

// Logos
// https://www.svgrepo.com/download/299505/blogger-blog.svg