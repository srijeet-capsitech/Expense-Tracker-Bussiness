import { BrowserRouter, Route, Routes } from "react-router-dom";
import Siderr from "./components/Siderr";
// import CreateUserForm from "./components/CreateUserForm";
import CreateUserPage from "./pages/UserManagement/CreateUserPage";
// import CreateUserPage from "./pages/UserManagement/CreateUserPage";
import CreateUserPage from "./pages/DashboardPages/CreateUserPage";
import CreateCategoryPage from "./pages/DashboardPages/CreateCategoryPage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import VerifyOTPpage from "./pages/ForgetPassword/VerifyOTPpage";
import ResetPassword from "./pages/ForgetPassword/ResetPassword";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Signup/>} />
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          <Route path="/verify-otp" element={<VerifyOTPpage/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/:id" element={<Siderr />}>
            <Route path="dashboard" element={<div>Dashboard</div>} />
            <Route path="expenses" element={<div>Expenses</div>} />
            <Route path="trips" element={<div>Trips</div>} />
            <Route path="reports" element={<div>Reports</div>} />
            <Route path="advances" element={<div>Advances</div>} />
            <Route path="approvals" element={<div>Approvals</div>} />

    
            <Route
              path="user-management"
              element={<div>User Management</div>}
            />
            <Route path="create-user" element={<CreateUserPage />} />
            <Route
              path="create-category"
              element={<CreateCategoryPage/>}
            />
            <Route path="analytics" element={<div>Analytics</div>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
