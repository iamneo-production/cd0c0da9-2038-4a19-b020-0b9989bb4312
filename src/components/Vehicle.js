import React,{useState, useEffect} from 'react'
import './vehicle.css'
import './NavBarStyle.css'
import {Link, useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Vehicle(){
  
    let {id} = useParams();
    const [boat, setBoat] = useState([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [totalPerson, setTotalPerson] = useState(0);
   
    useEffect(()=>{
        fetch(`http://localhost:8070/user/vehicles/${id}`)
        .then((res)=>res.json())
        .then((result)=>{
          setBoat(result);
        })
     },[])
     const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/user/booking");
       
       // alert(`${this.state.fromDate} ${this.state.toDate}  Registered Successfully !!!!`)
       
    };

    
   



   
        return (
            <>
            
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
            
            <div>
                <div className="rectangle" >
                    <label className="box">Available</label>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>{boat.vehicleName}</h1>
                    <div className="form-group col-md-4">
                    <h5>Place : {boat.vehicleAddress}</h5>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-12">
                    <label>From :  </label> 
                    <input type="date" value={fromDate} onChange={(event)=>setFromDate(event.target.value)} placeholder="Date : dd/mm/yy" required/>
                    
                    <label> To : </label> 
                    <input type="date" value={toDate} onChange={(event)=>setToDate(event.target.value)} placeholder="Date : dd/mm/yy" required/>
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-12">
                    <input type="number" value={
                        totalPerson} onChange={(event)=>setTotalPerson(event.target.value)} placeholder="Enter no of Person" required/>
                    
                    <label className="price"> Price : {boat.price}</label> 
                    <input type="submit" value="Book"/>
                    </div>
                    </div>
                </form>
               

        </div>
            </>
            
        );
};
    



export default Vehicle