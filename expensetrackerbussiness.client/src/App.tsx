import { BrowserRouter, Route, Routes } from "react-router-dom";
import Siderr from "./components/Siderr";
import CreateUserForm from "./components/CreateUserForm";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/' element={<Signup/>}></Route>
          
          <Route path="/:id" element={<Siderr />}>
            <Route path="dashboard" element={<div>Dashboard</div>} />
            <Route path="expenses" element={<div>Expenses</div>} />
            <Route path="trips" element={<div>Trips</div>} />
            <Route path="reports" element={<div>Reports</div>} />
            <Route path="advances" element={<div>Advances</div>} />
            <Route path="approvals" element={<div>Approvals</div>} />
            <Route path="user-management" element={<div>User Management</div>} />
            <Route path="create-user" element={<CreateUserForm/>}/>
            <Route path="create-category" element={<div>Create Category</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />

          </Route>
            
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
