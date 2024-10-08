import React from 'react' 
import './Header.css'

const Header = () => {
  return (
    <div className='header'> 
        <div className="header-contents">
            <h2>Order your favourite food here</h2> 
            <p>Choose from a diverse menu featuring hand crafted dishesh with the freshest ingredients to satisify your cravings and elevate your dining experience, one delicious meal at a time.</p> 
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header