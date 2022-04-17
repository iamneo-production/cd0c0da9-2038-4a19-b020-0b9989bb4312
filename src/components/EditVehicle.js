import React from 'react'
import './EditVehicle.css'
import { useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function EditVehicle() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [boat, setBoat] = useState([]);
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [city, setCity] = useState("");
    const [image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [Capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");
    useEffect(()=>{
        fetch(`http://localhost:8070/user/vehicles/${id}`)
        .then((res)=>res.json())
        .then((result)=>{
          setBoat(result);
        })
     },[])
    console.log(boat);
    const updateBoat = (e) => {
        e.preventDefault();   
       if(!(name === "" || time === "" || city === "" || image ==="" || Price ==="" || Capacity ==="" || description === "")){
       const vehicleID = id;    
       const vehicleName = name;
       const vehicleImageUrl = image;
       const vehicleAddress = city;
       const vehicleDescription = description;
       const vehicleAvailableStatus = time;
       const price = Price;
       const capacity = Capacity;     
       const vehicle = {vehicleID,vehicleName,vehicleImageUrl,vehicleAddress,vehicleDescription,vehicleAvailableStatus,price,capacity};
       fetch(`http://localhost:8070/admin/editVehicle/${id}`,{
         method: "PUT",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(vehicle)
       }).then(()=>{
         alert("Vehicle updated successfully!!!");
         navigate("/admin/viewVehicle");
       })
     }else{
        alert("Please fill all the field!!!");
     }
    }

    const deleteVehicle = async (index) => {
        fetch(`http://localhost:8070/admin/deleteVehicle/${index}`,{
            method: "DELETE"
          })
          .then(()=>{
            alert("Vehicle Deleted Successfully!!!");
            navigate("/admin/viewVehicle");
          })
     }    
  return (
    <>
       <div>
        <div className="split left">
        <div className="card5">
        <div className="card-body5">
            <img src={boat.vehicleImageUrl} alt="imgage1" className="card-img5" />
            <h2 className="card-title5">{boat.vehicleName}<i class="fa-solid fa-trash-can" onClick={()=>deleteVehicle(boat.vehicleID)}></i> </h2>
            <p className="card-address5">Address : {boat.vehicleAddress}</p>
            <p className="card-time5">Available Timming: {boat.vehicleAvailableStatus}</p>
            <p className="card-price5">Price : {boat.price}</p>
        </div>
        <div className="card-btn-edit5">       
        </div>     
    </div> 
        </div>
        <div className="split right">
            <div className="container5">
                    <div className="title5" style={{textAlign: 'center'}}>Edit</div>
                    <div className="content5">
                        <form onSubmit={updateBoat}>
                            <div className="user-details1">
                                <div className="input-box">
                                    <input type="text" placeholder="Enter the Name" value={name} onChange={(event)=>setName(event.target.value)} required />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter the Available Timing" value={time} onChange={(event)=>setTime(event.target.value)} required />
                                </div>
                                <div className="input-box">
                                     <input type="text" placeholder="Enter the City" value={city} onChange={(event)=>setCity(event.target.value)} required /> 
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter the Image Url" value={image} onChange={(event)=>setImage(event.target.value)} required />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter the fair per person" value={Price} onChange={(event)=>setPrice(event.target.value)} required />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter the Capacity" value={Capacity} onChange={(event)=>setCapacity(event.target.capacity)} required />
                                </div>
                                <div className="input-box">
                                    <textarea type="text" placeholder="Description" value={description} onChange={(event)=>setDescription(event.target.value)} required />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Update"/>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}
