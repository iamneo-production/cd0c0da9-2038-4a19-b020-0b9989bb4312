import Dashboard from './components/Dashboard';
import {Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Vehicle from './components/Vehicle';
import AddBooking from './components/AddBooking';
import Addvehicle from './components/Addvehicle';
import ViewVehicle from './components/ViewVehicle';
import EditVehicle from './components/EditVehicle';


function App() {
  return (
     <>
       <Routes>
          <Route exact path="/" element={<Signup/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path='/user/dashboard' element={<Dashboard/>}/>
          <Route exact path="/user/vehicles/:id" element={<Vehicle/>}/>
          <Route exact path="/user/booking/" element={<AddBooking/>}/>
          <Route exact path="/admin/addVehicle" element={<Addvehicle/>}/>
          <Route exact path="/admin/viewVehicle" element={<ViewVehicle/>}/>
          <Route exact path="/admin/editVehicle/:id" element={<EditVehicle/>}/> 
       </Routes>
     </>
  );
}

export default App;
