import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './Pages/Admin/AddProduct';
import MakeAdmin from './Pages/Admin/MakeAdmin';
import ManageAllProducts from './Pages/Admin/ManageAllProducts';
import ManageProducts from './Pages/Admin/ManageProducts';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import RequireAdmin from './Pages/Dashboard/RequireAdmin';
import RequireUser from './Pages/Dashboard/RequireUser';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purcahse from './Pages/Purchase/Purcahse';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purcahse /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route path='/dashboard/manage-all-products' element={<RequireAdmin><ManageAllProducts /></RequireAdmin>} />
          <Route path='/dashboard/add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='/dashboard/manage-products' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          <Route path='/dashboard/make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
          <Route path='/dashboard/add-review' element={<RequireUser><AddReview /></RequireUser>} />
          <Route path='/dashboard/myorders' element={<RequireUser><MyOrders /></RequireUser>} />
          <Route path='/dashboard/payment/:id' element={<RequireUser><Payment /></RequireUser>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
