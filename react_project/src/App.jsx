import Landing from "./page/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offerings from "./page/Offerings";
import Navbar from "./components/Navbar";
import Login from "./page/Login";
import About from "./page/About";
import Contact from "./page/Contact";
import Imprint from "./page/Imprint";
import Terms from "./page/Terms";
import Privacy from "./page/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <h1 className="text-3xl text-center mt-5">404 Page Not Found</h1>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
