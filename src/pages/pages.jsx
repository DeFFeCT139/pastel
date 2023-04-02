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
        <Route path="/" element={<Home/>}/>
        <Route path="/contactas" element={<Contact/>}/>
        <Route path="/catalog" element={<Cotalog/>}/>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
      </Routes>
    </div>
  );
}

export default Pages;