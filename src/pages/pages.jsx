import { Route, Routes } from "react-router-dom";
import Cotalog from "./catalog/cotalog";
import Contact from "./contact/contact";
import Home from "./home/home";
import Pay from "./pay/pay";
import Delivery from "./delivery/delivery";

function Pages() {
  return (
    <div className="pages">
      <Routes>
        <Route path="pastel/" element={<Home/>}/>
        <Route path="pastel/contactas" element={<Contact/>}/>
        <Route path="pastel/catalog" element={<Cotalog/>}/>
        <Route path="pastel/pay" element={<Pay/>}/>
        <Route path="pastel/delivery" element={<Delivery/>}/>
      </Routes>
    </div>
  );
}

export default Pages;