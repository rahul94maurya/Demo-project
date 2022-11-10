import { Route, Routes, Navigate } from "react-router-dom";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import EditProduct from "./component/EditProduct";
import ProductAdmin from "./pages/ProductAdmin";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product-admin/product-list" />} />
      <Route path="/product-admin/*" element={<ProductAdmin />}>
        <Route path="product-list/*" element={<ProductList />}>
          <Route path="edit-product" element={<EditProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="add-product" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
