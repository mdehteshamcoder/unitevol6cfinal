import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Private from './components/Private';
import Indivudual from './pages/Indivudual';
import Cart from './pages/Cart';
import OrderSucess from './pages/OrderSucess';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/individual" element = {<Indivudual />}></Route>
       <Route path = "/cart" element = {<Cart />}></Route>
       <Route path = "/ordersucess" element = {<OrderSucess />}></Route>
      </Routes>
    </div>
  );
}

export default App;

