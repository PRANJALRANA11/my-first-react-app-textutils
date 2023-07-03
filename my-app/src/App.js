
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default function App() {
  return (
     <>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/text" element={<Textutils />} />
        </Routes>
      </Router>
     </>
  );
}
