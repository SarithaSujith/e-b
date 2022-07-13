import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import backgroundImage from '../images/background_image.jpg'

function HomePage() {
  return (
    <div className='homepage'>
      
       <img src={backgroundImage} />
			<div className='header'>
       
				<h2>
Make your shop construction materials Supermarket</h2>
				<p>Enable your Retail Outlets with technology.

Start Selling.</p>
				<Link to='/register'>
					<button>Register Now</button>
				</Link>
			</div>
		</div>
  )
}

export default HomePage