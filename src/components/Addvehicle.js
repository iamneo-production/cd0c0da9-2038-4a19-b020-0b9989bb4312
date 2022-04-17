import React from 'react'
import './Addvehicle.css'
import './NavBarStyle.css'
import { Link } from 'react-router-dom'
import { useState} from 'react'
export default function Addvehicle() {

    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [city, setCity] = useState("");
    const [image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [Capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
       e.preventDefault();   
       if(!(name === "" || time === "" || city === "" || image ==="" || Price ==="" || Capacity ==="" || description === "")){
       const vehicleName = name;
       const vehicleImageUrl = image;
       const vehicleAddress = city;
       const vehicleDescription = description;
       const vehicleAvailableStatus = time;
       const price = Price;
       const capacity = Capacity;     
       const vehicle = {vehicleName,vehicleImageUrl,vehicleAddress,vehicleDescription,vehicleAvailableStatus,price,capacity};
       fetch("http://localhost:8070/admin/addVehicle",{
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(vehicle)
       }).then(()=>{
         alert("Vehicle added successfully!!!");
         setName("");
         setTime("");
         setCity("");
         setImage("");
         setPrice("");
         setDescription("");
         setCapacity("");
       })
     }else{
        alert("Please fill all the field!!!");
     }
      
    }

  return (
    <>
        <nav className='NavbarItems'>
         <h1 className='navbar-logo'>Sea Senora</h1>
          <ul className="nav-menu">
            <Link className='nav-link' to="/admin/addVehicle" id='adminAddVechile'>Add Vehicle</Link>
            <Link className='nav-link' to="/admin/viewVehicle" id='adminVechileProfile'>Vehicle Profile</Link>
            {/* <Link className='nav-link' to="/" id='profileButton'>Profile</Link>
            <Link className='nav-link' to="/" id='myBookingButton'>My Booking</Link> */}
          </ul>
          <Link className='logout-button' to="/" id='logout'>Logout</Link>
          
      </nav>
            
    <div className="auth-content-right">
            <form className="formm" >
                {/* onSubmit={handleSubmit} */}
                
                <div className='container2'>
                <h2>Add</h2>
                <div className="auth-inputs">
                    <label htmlFor="addName" className="form-label">  
                    </label>
                    <input id="addName" type="text" name="addName" className="forrm-input"
                    placeholder="Enter the name" value={name} onChange={(event)=>setName(event.target.value)}  required/>
                    {/* value={values.addName} onChange={handleChange} */}
                    {/* {errors.adminuser && <p>{errors.adminuser}</p>} */}
                </div>
                
                <div className="auth-inputs">
                    <label htmlFor="addTiming" className="form-label">
                    </label>
                    <input id="addTiming" type="text" name="addTiming" className="forrm-input"
                    placeholder="Enter the Available Timing" value={time} onChange={(event)=>setTime(event.target.value)} required/>
                    {/* value={values.addTiming}
                    onChange={handleChange} */}
                    {/* {errors.username && <p>{errors.username}</p>} */}
                </div>
                <div className="auth-inputs">
                    <label htmlFor="addCity" className="form-label">  
                    </label>
                    <input id="addCity" type="text" name="addCity" className="forrm-input"
                    placeholder="Enter the city" value={city} onChange={(event)=>setCity(event.target.value)} required/>
                    {/* value={values.addCity}
                    onChange={handleChange} */}
                    {/* {errors.adminuser && <p>{errors.adminuser}</p>} */}
                </div>

                <div className="auth-inputs">
                    <label htmlFor="addImageUrl" className="form-label">  
                    </label>
                    <input id="addImageUrl" type="text" name="addImageUrl" className="forrm-input"
                    placeholder="Enter the image Url" value={image} onChange={(event)=>setImage(event.target.value)} required/>
                    {/* value={values.addImageUrl}
                    onChange={handleChange} */}
                    {/* {errors.adminuser && <p>{errors.adminuser}</p>} */}
                </div>

                <div className="auth-inputs">
                    <label htmlFor="addPrice" className="form-label">  
                    </label>
                    <input id="addPrice" type="text" name="addPrice" className="forrm-input"
                    placeholder="Enter the fair per person" value={Price} onChange={(event)=>setPrice(event.target.value)} required/>
                    {/* value={values.addPrice}
                    onChange={handleChange} */}
                    {/* {errors.adminuser && <p>{errors.adminuser}</p>} */}
                </div>

                <div className="auth-inputs">
                    <label htmlFor="Boatcapacity" className="form-label">  
                    </label>
                    <input id="Boatcapacity" type="text" name="Boatcapacity" className="forrm-input"
                    placeholder="Enter no of capacity" value={Capacity} onChange={(event)=>setCapacity(event.target.value)} required/>
                    {/* value={values.Boatcapacity}
                    onChange={handleChange} */}
                    {/* {errors.adminuser && <p>{errors.adminuser}</p>} */}
                </div>

                <div className="auth-inputs">
                    <label htmlFor="addDescription" className="form-label">  
                    </label>
                    <input id="addDescription" type="textarea" name="addDescription" className="form-inputt"
                    placeholder="Description about product" value={description} onChange={(event)=>setDescription(event.target.value)} required/>
                    {/* value={values.addDescription}
                    onChange={handleChange} */}
                    {/* {errors.adminuser && <p>{errors.adminuser}</p>} */}
                </div>
                <button className="form-input-btnn" type="submit" id="addBoatButton" onClick={handleSubmit}>Add</button><br></br>
        </div>        
            </form>
        </div>
        
    </>
  )
}
