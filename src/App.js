import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header2/Header2";
import Slider from "./Components/Slider/Slider";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Index_main from "./Components/Index_main";
import Store_main from "./Components/Store_main";
import Contact_main from "./Components/Contact_main";
import About_main from "./Components/About_main"

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header2></Header2>
        <Routes>
          <Route exact path="/" element={<Index_main />} />
          <Route exact path="/Store_main" element={<Store_main />} />
          <Route exact path="/Contact_main" element={<Contact_main />} />
          <Route exact path="/About_main" element={<About_main />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
