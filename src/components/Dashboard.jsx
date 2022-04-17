import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
export default function Dashboard() {
 
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  //const [book, setBook] = useState([]);
  const [boat, setBoat] = useState("");
  const [dash, setDash] = useState(false);

  let {id} = useParams();

  useEffect(()=>{
     fetch("http://localhost:8070/user/dashboard")
     .then((res)=>res.json())
     .then((result)=>{
       setVehicles(result);
     })
  },[])

  const searchVehicle = () => {
    const updatedVehicles = vehicles.filter((elem)=>{
           return elem.vehicleName.toLowerCase() === boat.toLowerCase();
         
    });
    setVehicles(updatedVehicles);
    setBoat("");
    if(updatedVehicles.length === 0){
      setDash(true);
    }
     //console.log(vehicles);

  }

  const bookNow = (index) => {
    
    id = index;
    /*const updatedBoat = vehicles.filter((elem)=>{
      return elem.vehicleName === index;
    });
    
    setBook(updatedBoat);
    console.log(book);*/

    //sconsole.log(updatedBoat);
    navigate(`/user/vehicles/${id}`);
  }
  
  //console.log(book);
  //console.log(vehicles.length);
  //console.log(boat);
 
  //console.log(dash);
  
  
  return (
    <>
    <div id='dashBoard'>
      <nav className='NavbarItems'>
         <h1 className='navbar-logo'>Sea Senora</h1>
          <ul className="nav-menu">
            <Link className='nav-link' to="/user/dashboard" id='homeButton'>Home</Link>
            <Link className='nav-link' to="/user/vehicles" id='DashBoardButton'>Dashboard</Link>
            <Link className='nav-link' to="/" id='profileButton'>Profile</Link>
            <Link className='nav-link' to="/" id='myBookingButton'>My Booking</Link>
          </ul>
          <Link className='logout-button' to="/" id='logout'>Logout</Link>
      </nav>
      <section className="main-body">
         <div className="search-bar">
           <input className='search-value' type="text" placeholder='Type here to search' value={boat} onChange={(event)=>setBoat(event.target.value)}/>
           <button type='submit' className='search-button' id='searchButton' onClick={searchVehicle}>Search</button>
         </div>
         <div className="container">
         {dash && <h2 className='boatsInfo'>No Boats Found...</h2>}
  <div className="row">
    {vehicles.map((elem,id) => {
      return(
        <div className="col-md-4" key={id} id='grid'>
        <div className="card" style={{width: "18rem"}}>
        <img src={elem.vehicleImageUrl} className="card-img-top" alt="This is an image"/>
        <div className="card-body">
          <h4 className="card-title">{elem.vehicleName}</h4>
          <p className="card-text">
             Place : {elem.vehicleAddress} <br />
             Timimg : {elem.vehicleAvailableStatus} <br />
             Price : {elem.price}
          </p>
           <button className="btn btn-primary" onClick={()=>bookNow(elem.vehicleID)}>Book Now</button> 
           
        </div>
      </div>
      <br />
      </div>
      
      )
    })}
  </div>
   
</div>
      </section>
      </div>
    </>
  )

}


