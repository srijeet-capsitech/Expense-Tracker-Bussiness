import { BrowserRouter, Route, Routes } from "react-router-dom";
import Siderr from "./components/Siderr";
// import CreateUserForm from "./components/CreateUserForm";
import CreateUserPage from "./pages/CreateUserPage";
import CreateCategoryPage from "./pages/CreateCategoryPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/" element={<div>SignUp</div>} />
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
