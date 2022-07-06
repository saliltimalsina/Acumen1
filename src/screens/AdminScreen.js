import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProductScreen from "./EditProductScreen";
import OrdersList from "./OrdersList";
import ProductsList from "./ProductsList";
import Userslist from "./Userslist";

export default function AdminScreen() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-md-10 text-center">
          <ul className="admin p-2">
            <li>
              <Link to="/admin/userslist" className="admin-links">
                Users list
              </Link>
            </li>
            <li>
              <Link to="/admin/productslist" className="admin-links">
                Products list
              </Link>
            </li>
            <li>
              <Link to="/admin/addnewproduct" className="admin-links">
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/admin/orderslist" className="admin-links">
                Orders list
              </Link>
            </li>
          </ul>
          <Routes>
            <Route path="/userslist" element={<Userslist />} />
            <Route path="/orderslist" element={<OrdersList />} />
            <Route path="/addnewproduct" element={<AddProduct />} />
            <Route path="/productslist" element={<ProductsList />} />
            <Route path='/editproduct/:productid' element={<EditProductScreen/>}/> 
          </Routes>
        </div>
      </div>
    </div>
  );
}
