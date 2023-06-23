import Landing from "./page/Landing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Offerings from "./page/Offerings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/offerings" element={<Offerings />} />
      </Routes>
    </Router>
  );
}

export default App;
