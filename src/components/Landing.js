import React from 'react'
import '../css/Nav.css';
import Nav from "./Nav"

const Landing = () => {
  return (
    <div className='Landing'>
        <Nav/>
        <div class="description">
  <h1>Beautiful <br></br><span className='span2'>homes made</span><br></br><span className='span1'>for You</span></h1>
</div>
<div className='info'>
<p>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
</div>
<div className='block'>
    <p>See all listings <img src="path1.png"/></p>

</div>

    </div>
  )
}

export default Landing