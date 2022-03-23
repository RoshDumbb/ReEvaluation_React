
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Products } from './components/ProductsDashboard';

function App() {
  return (
    <div className="App">
      <Navbar />{" "}
      <Routes>
        <Route path={"/"} element={<Home />}>
          Home
        </Route>
        <Route path={"/about"} element={<About />}>
          Home
        </Route>
        <Route path={"/products"} element={<Products/>}>
          Home
        </Route>
      </Routes>
    </div>
  );
}

export default App;
