import { Link, useNavigate } from "react-router-dom";    
function Header(){
    const name=localStorage.getItem("username");
const navigate = useNavigate();
const handleLogout = ()=>{
  localStorage.clear();
  navigate("/");


  localStorage.removeItem("isLoggedIn");
localStorage.removeItem("username");
localStorage.removeItem("cart");
  navigate("/");
}
return(
<>
<header>
    
<div className="left">
<span>🛍MyStore</span>
</div>
<div className="right">
<nav className="links" >
    
    <Link to="/">Home</Link>{"  |  "}
    <Link to="/Products1">Products</Link>{"  |  "}
    <Link to="/Cart">Cart</Link>{"  |  "}
   {name? <button onClick={handleLogout}>logout</button>:null}

</nav> 
<div id="user-display">
        {name ? `Welcome, ${name}` : "Welcome , User"}
      </div>
</div>
</header>
</>
)
   
}
export default Header