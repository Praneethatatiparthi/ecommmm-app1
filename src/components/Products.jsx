import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
import ip17 from "../assets/ip17.jpeg"
import ip17airblack from "../assets/ip17airblack.jpg"
import ip16e from "../assets/ip16e.jpg"


function Products() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn=="true") {
      navigate("/cart");
    } else {
      alert("Please login first!");
      navigate("/login"); 

      
    }
  };
  return (
    <>
    

      <div className="products">
        <div className="product">
          <img src={ip17} alt="Product 1" />
          <h3>Apple iPhone 17 Pro</h3>
          <h4>Apple iPhone 17 Pro – A flagship model with powerful A19 Pro chip, advanced triple 48 MP cameras and pro-level performance for creators and power users.</h4>
          <p>$15,650.00</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src={ip17airblack} alt="Product 2" />
          <h3>Apple iPhone Air</h3>
          <h4>Apple iPhone Air – An ultra-thin, premium Apple phone with A19 Pro performance, large OLED screen and lightweight design between standard and Pro models.</h4>
          <p>$999.00</p>
           <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src={ip16e} alt k="Product 3" />
          <h3>Apple iPhone 16e</h3>
          <h4>Apple iPhone 16e – A budget-friendly iPhone with a 6.1″ OLED display, A18 chip, solid battery life and essential cameras.</h4>
          <p>$599.00</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

  
    </>
  )
}
export default Products;