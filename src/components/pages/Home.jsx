import "./Home.css"
import { useState } from "react";
import Loader from "./Loader"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [loading , setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [error, setError] = useState("")



  // error message when the box is empty................................
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === ""){
      setError("Please enter something before searching!")
      return
    }

    //clear error if input is valid
    setError("")
    console.log("searching for:",query);

  }


  // go to next page section..............................................
  const navigate = useNavigate();
  const goToAbout = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      navigate("/about");
    },2000);
  };
  if (loading){
    return <Loader/>
  }
  
  return (
    <div>
      <h1 className="about-h1">Image Search Engine</h1>
      <form id="search-form" onSubmit={handleSearch}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" id="search-box" placeholder="Search anything..." />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{error}</p>}

      <div className="abouts-btn">
        <div>
          <button className="show-more-btn">Show more</button>
        </div>
        <div>
          <button onClick={goToAbout} className="next-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
