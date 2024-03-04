import Home from "./routes/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Cars from "./routes/Cars";
import Sign from "./routes/Sign";
import Register from "./routes/Register";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/reg" element={<Register/>}/>
      </Routes>
    </div>
  );
}
