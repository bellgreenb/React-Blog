import React from 'react'
import {Link} from 'react-router-dom'
const Missing = () => {
  return (
    <main className='Missing'>
        <h2>Page not found</h2>
        <p>Sorry, we can't find the page you're looking for.</p>
        <p>
          <Link to='/'>Visit Our Homepage</Link>
        </p>
    </main>
  )
}

export default Missing