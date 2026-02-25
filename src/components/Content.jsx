import { Link } from "react-router-dom"

function Content(){
return(
    <>
    <section className="content">
        
<h2>Welcome To Our Shopping Page</h2>
<p>Find the best deals on top products</p>



<Link to="/Products1" className="btn">Shop now</Link>
    </section>
    </>
)
   
}
export default Content