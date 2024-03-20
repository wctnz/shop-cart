import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
