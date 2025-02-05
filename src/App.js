import Faculty from "./faculty";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/nav" element={<Navbar />} />
          <Route path="/foot" element={<Footer />} />
          <Route path="/" element={<Faculty />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
