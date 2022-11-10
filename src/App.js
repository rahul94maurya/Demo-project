import { Route, Routes, Navigate } from "react-router-dom";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import EditProduct from "./component/EditProduct";
import ProductAdmin from "./pages/ProductAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product-admin/product-list" />} />
      <Route path="/product-admin/*" element={<ProductAdmin />}>
        <Route path="product-list/*" element={<ProductList />}>
          <Route path="edit-product" element={<EditProduct />} />
        </Route>
        <Route path="add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
