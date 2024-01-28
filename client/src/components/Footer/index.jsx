import "./footer.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Employment" element={<Employment />} />
            <Route path="/Projct" element={<Projects />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
