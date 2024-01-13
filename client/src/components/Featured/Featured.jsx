import { useState } from 'react';
import bg from '../../assets/bg.png'
import { useNavigate } from 'react-router-dom';
import './Featured.scss';

const Featured = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if(search) {
      navigate(`/gigs?search=${search}`);
    }
  }

  return (
    <div className='featured'>
      <div className="container">

        <div className="left">
          <h1 style={{fontFamily: "poppins",fontSize: "28px",fontWeight: "300",color: "white",}}>Discover Endless<span style={{fontFamily: "poppins",fontSize: "28px",fontWeight: "600",color: "skyblue",}}> OPPURTUNITES</span></h1>
          <p style={{fontFamily: "poppins",fontSize: "16px",fontWeight: "500",color: "grey",}}>Your gateway to success! find the perfect work to fill your wallet with our freelancing app</p>
          <div className="search">
            <div className="searchInput" style={{borderRadius: "35px"}}>
              <input type="search" placeholder='Try "website"' style={{borderRadius: "35px",color:"whitesmoke"}} onChange={(({ target: { value } }) => setSearch(value))} />
            </div>
            <button onClick={handleSearch} style={{borderRadius: "35px"}}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>

        <div className="right">
          <img src={bg} alt="hero" />
        </div>
        
      </div>
    </div>
  )
}

export default Featured