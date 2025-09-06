import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <img
        src={"/all-char.png"}
        alt="Blog Banner"
        className="inset-0 w-full h-full object-cover -z-10 fixed backdrop:blur-sm brightness-50"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
