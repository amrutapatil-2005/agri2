// import React from 'react';
// // import "../node_modules/bootstrap.min.css";
// // import "../node_modules/bootstrap.min.bundle";
// import './App.css';
// import Home from './Component/Home';
// import Service from './Component/Service';
// import About from './Component/About';
// import Contact from './Component/Contact';
// import Navbar from './Component/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Router>
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/service" element={<Service/>}/>
//       <Route path="/contact" element={<Contact/>}/>
      
      
     
//       </Routes>
//     </Router>
//     </>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"; // Uncomment if needed
// import "bootstrap/dist/js/bootstrap.bundle.min"; // Uncomment if needed
import './App.css';
import Home from './Component/Home';
import Service from './Component/Service';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;

