/* import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  <Router>
    <Navbar />
    {/* <Routes>
      <Route path="/" element={<Home />} exact />
    </Routes> }
  </Router>;
}

export default App; */

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import ContactWithUs from "./components/ContactWithUs";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import WhoAreWe from "./components/WhoAreWe";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<ContactWithUs />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/who-are-we" element={<WhoAreWe />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
