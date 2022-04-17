import React from 'react'
import './viewVehicle.css'
import './NavBarStyle.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function ViewVehicle() {
   
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  
  let {id} = useParams();


    useEffect(()=>{
        fetch("http://localhost:8070/user/dashboard")
        .then((res)=>res.json())
        .then((result)=>{
            setVehicles(result);
        })
     },[])
     console.log(vehicles);
     
     const deleteVehicle = async (index) => {
        fetch(`http://localhost:8070/admin/deleteVehicle/${index}`,{
            method: "DELETE"
          })
          .then(()=>{
            alert("Vehicle Deleted Successfully!!!");
          })
     }

     const editVehicle = async (index) => {
       id = index;
       navigate(`/admin/editVehicle/${id}`);
     }
  return (
    <>
       
       <nav className='NavbarItems'>
         <h1 className='navbar-logo'>Sea Senora</h1>
          <ul className="nav-menu">
            <Link className='nav-link' to="/admin/addVehicle" id='adminAddVechile'>Add Vehicle</Link>
            <Link className='nav-link' to="/admin/viewVehicle" id='adminVechileProfile'>Vehicle Profile</Link>
          </ul>
          <Link className='logout-button' to="/" id='logout'>Logout</Link>
          
      </nav>
            
      <div className="row">
    {vehicles.map((elem,id) => {
      return(
        <div className="col-md-4" key={id} id='grid'>
         <div className="wrapper">
        <div className="card2">
            <div className="card-body">
                <img src={elem.vehicleImageUrl} alt="imgage1" className="card-img" />
                <h2 className="card-title2">{elem.vehicleName}</h2>
                <p className="card-address">Address : {elem.vehicleAddress}</p>
                <p className="card-time">Available Timming: {elem.vehicleAvailableStatus}</p>
                <p className="card-price">Price : {elem.price}</p>
            </div>
            <div className="card-btn-edit"><i className="fa-solid fa-pen-to-square" onClick={()=>editVehicle(elem.vehicleID)}></i>      
        <i className="fa-solid fa-trash" onClick={()=>deleteVehicle(elem.vehicleID)}></i></div> 
        </div> 
        </div>
      </div>
      
      )
    })}
  </div>
    </>
  )
}
