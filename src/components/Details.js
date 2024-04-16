import React from 'react'
import "../css/property.css"
import ReactImageMagnify from 'react-image-magnify';
import{ useState } from 'react';
import Carousel from './Carousel';
const Details = () => {
  const [enlargedImage, setEnlargedImage] = useState('property.png');
  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };
  return (
   <>  
   <div className='display'>
   <div className="parent">
    <div className='col-1'>
          <ul>
            <li><img src="Rectangle1.png" alt="Ball" onClick={() => handleImageClick('Rectangle1.png')} /></li>
            <li><img src="Rectangle2.png" alt="Ball" onClick={() => handleImageClick('Rectangle2.png')} /></li>
            <li><img src="Rectangle3.png" alt="Vector" onClick={() => handleImageClick('Rectangle3.png')} /></li>
            <li><img src="Rectangle4.png" alt="Vector" onClick={() => handleImageClick('Rectangle4.png')} /></li>
            <li><img src="Rectangle5.png" alt="Vector" onClick={() => handleImageClick('Rectangle5.png')} /></li>
            <li><img src="Rectangle6.png" alt="Vector" onClick={() => handleImageClick('Rectangle6.png')} /></li>
            <li><img src="Rectangle7.png" alt="Vector" onClick={() => handleImageClick('Rectangle7.png')} /></li>
          </ul>
        </div>
        <div className="col-2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Enlarged image',
                src: enlargedImage,
                isFluidWidth: true
              },
              largeImage: {
                src: enlargedImage,
                width: 1000,
                height: 1500
              },
              enlargedImageContainerClassName: 'enlarged-image-container',
              imageClassName: 'enlarged-image'
            }}
          />
        </div>
        
      </div>


      <Carousel/>
      
    <div className='profile'>
    <button className='button6'>
        <img src="Avatar.png"/>
        <p>Kayley Hall<br/><span>View profile</span></p>
    </button>
    <form>
        <input type="text" placeholder="Name" />
        <input type="tel" placeholder="Phone number" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button className='button7'>Learn more <img src="path1.png"/></button>
    </form>
</div>

   </div>
   <div className='details'>
    <h1>Details</h1>
    <div className="table-container2">
        <div className="table-column2">
          <img src="Bed.svg"/>
          </div>
          <div className="table-column2">
          <img src="Shower.svg"/>
          </div>
          <div className="table-column2">
          <img src="Size.svg"/>
          </div>
          <div className="table-column2">
          <img src="Garage.png"/>
          </div>
          <div className="table-column2">
          <img src="Size.svg"/>
          </div>
          
          </div>

   </div>
  <div class="details1">
    <h1>Description</h1>
    <img src="rect.png"/>
    <div class="content">
        <p>At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.</p>
        <p><span>Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.</span></p>
        <p><span>Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.</span></p>
    </div>
</div>

   <div className='features'>
    <h1>Features</h1> 
    <img src="Rect.png" className='rect1'/>
    <div className='features1'>
     <ul>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
     </ul>
     <ul>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
     </ul>
     <ul>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
        <li><img src="tick.png"/><p>Air Conditioning</p></li>
     </ul>
   
    </div>
   </div>
   <div className='cards1'>
       <div className='card1'>
      <img src="House.png"className='card-img' />
      <p>Malto House</p>
      <div className="table-container1">
        <div className="table-column1">
          <img src="Bed.svg"/>
          </div>
          <div className="table-column1">
          <img src="Shower.svg"/>
          </div>
          <div className="table-column1">
          <img src="Size.svg"/>
          </div>
          </div>
    </div>
    <div className='card1'>
      <img src="House2.png"className='card-img' />
      <p>Malto House</p>
      <div className="table-container1">
        <div className="table-column1">
          <img src="Bed.svg"/>
          </div>
          <div className="table-column1">
          <img src="Shower.svg"/>
          </div>
          <div className="table-column1">
          <img src="Size.svg"/>
          </div>
          </div>
          
    </div> 
    <div className='card1'>
      <img src="House3.png"className='card-img' />
      <p>Malto House</p>
      <div className="table-container1">
        <div className="table-column1">
          <img src="Bed.svg"/>
          </div>
          <div className="table-column1">
          <img src="Shower.svg"/>
          </div>
          <div className="table-column1">
          <img src="Size.svg"/>
          </div>
          </div>
          
    </div> 
    <div className='card1'>
      <img src="House4.png"className='card-img' />
      <p>Malto House</p>
      <div className="table-container1">
        <div className="table-column1">
          <img src="Bed.svg"/>
          </div>
          <div className="table-column1">
          <img src="Shower.svg"/>
          </div>
          <div className="table-column1">
          <img src="Size.svg"/>
          </div>
          </div>
          
    </div> 
    <div className='card1'>
      <img src="House5.png"className='card-img' />
      <p>Malto House</p>
      <div className="table-container1">
        <div className="table-column1">
          <img src="Bed.svg"/>
          </div>
          <div className="table-column1">
          <img src="Shower.svg"/>
          </div>
          <div className="table-column1">
          <img src="Size.svg"/>
          </div>
          </div>
          
    </div> 


    </div>  
   </>
  )
}

export default Details