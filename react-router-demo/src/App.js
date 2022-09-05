import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import FeaturedProducts from "./Components/FeaturedProducts";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewProducts from "./Components/NewProducts";
import OrderSummary from "./Components/OrderSummary";
import Products from "./Components/Products";
import UseEffect from "./Components/UseEffect";
import UseEffectMouse from "./Components/UseEffectMouse";


function App() {
  return (
    // <UseEffect></UseEffect>
    <UseEffectMouse></UseEffectMouse>
    // <>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="about" element={<About />}></Route>
    //     <Route path="order-summary" element={<OrderSummary />}></Route>

    //     <Route path="product" element={<Products />}>
    //       {/* //index is used to display the contents of the child route by clicking on the parent Link */}
    //       <Route index element={<FeaturedProducts />} />
    //       <Route path="featured" element={<FeaturedProducts />}></Route>
    //       <Route path="new" element={<NewProducts />}></Route>
    //     </Route>

    //   </Routes>
    //   </>
  );
}

export default App;
