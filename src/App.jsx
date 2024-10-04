import Header from './Components/Header';
import './index.css';
import mini from './assets/mini.jpeg'
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}  from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen ">
        <Header />
        <div className="flex items-center justify-evenly">
          <img className="my-9" src={mini} alt="Product" />
          <h2>
            Retinal 0.2% Liposomal Cream
            <p>A potent anti-aging skincare solution designed to combat the visible signs of aging. Featuring Retinal, one of the most efficacious form of Vitamin-A, along with powerful antioxidants like Resveratrol and EUK-134, to offer well rounded solution for fighting fine line, wrinkles, loss of elasticity & dull skin. Active delivery is enhanced through Liposomal System, ensuring deeper penetration & molecule stability.</p>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <button className='bg-black text-white rounded-lg p-5'>Add to cart</button>
        </div>
        <div className="flex gap-5 items-center justify-center p-6">
          <li>Retinol</li>
          <li>Resveratrol</li>
          <li>All Ingredients</li>
          
        </div>
        <div className="flex gap-5 items-center justify-center p-6">
        <Link to="/Contact" className="text-blue-500">Contact</Link>
          <Routes>
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
 
}

export default App;
