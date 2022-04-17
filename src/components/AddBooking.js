import React, { useState,useEffect } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate,useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import './Navbar.css';
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function AddBooking() {

    const navigate = useNavigate();
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: "", lastName: "", age: "", gender: "" },
  ]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    for(let i=0;i<inputFields.length;i++){
        const firstName = inputFields[i].firstName;
        const lastName = inputFields[i].lastName;
        const age = inputFields[i].age;
        const gender = inputFields[i].gender;
        const customer = {firstName,lastName,age,gender};
        fetch("http://localhost:8080/user/addCustomerDetails",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customer)
        }).then(()=>{
            console.log("customer details added successfully");
        })
    }
    alert("Passenger Details added successfully!!!");
    navigate("/user/dashboard");
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "", age: "", gender: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
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
   
    <Container>
      <br/>
      <h1 style={{ textAlign: "center" }}>Add Passenger Details</h1>
      <br/>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <TextField required 
              name="firstName"
              label="First Name"
              variant="filled" 
              value={inputField.firstName} 
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="filled" 
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="age"
              label="Age"
              variant="filled" 
              value={inputField.age}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="gender"
              label="Gender"
              variant="filled" 
              value={inputField.gender}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >
          Confirm Booking
        </Button>
      </form>
    </Container>
    </>
  );
}
export default AddBooking;
