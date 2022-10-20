import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import Users from './pages/Users';
import Products from './pages/Products';
import AddUsers from "./pages/AddUsers";
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import EditUsers from './pages/EditUsers';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUsers />} />
          <Route path="/users/edit/:id" element={<EditUsers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
