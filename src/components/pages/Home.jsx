import "./Home.css";
import { useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const PER_PAGE = 20; // images per request
const API_KEY = "52309847-f843903f417c5a363e8a1d20a"; // ⚠️ For testing, better use .env

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  // states for API
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  // fetch images from API
  const fetchImages = async (searchQuery, pageNumber = 1) => {
    try {
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        searchQuery
      )}&image_type=photo&page=${pageNumber}&per_page=${PER_PAGE}`;

      console.log("Fetching:", url);
      const res = await fetch(url);
      const data = await res.json();
      console.log("API response:", data);

      if (data.hits && data.hits.length > 0) {
        if (pageNumber === 1) {
          setImages(data.hits); // new search → reset
        } else {
          setImages((prev) => [...prev, ...data.hits]); // append results
        }
        setPage(pageNumber);
      } else {
        setError("No images found.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch images. Check API key or internet.");
    }
  };

  // handle form search
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setError("Please enter something before searching!");
      return;
    }
    setError("");
    fetchImages(query, 1);
    console.log("Searching for:", query);
  };

  // load more
  const loadMore = () => {
    fetchImages(query, page + 1);
  };

  // navigate to About
  const navigate = useNavigate();
  const goToAbout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/about");
    }, 2000);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="about-h1">Image Search Engine</h1>

      {/* Search form */}
      <form className="home-form" id="search-form" onSubmit={handleSearch}>
        <input
          className="search-anything"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          id="search-box"
          placeholder="Search anything..."
        />
        <button className="search-button" type="submit">Search</button>
      </form>

      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
          {error}
        </p>
      )}

      {/* Show images from API */}
      <div className="gallery">
        {images.map((img) => (
          <div className="gallery-item" key={img.id}>
            <a href={img.largeImageURL} target="_blank" rel="noreferrer">
              <img src={img.webformatURL} alt={img.tags} />
            </a>
            <div className="image-meta">
              <small>by {img.user}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Load more button */}
      {images.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={loadMore} className="show-more-btn">
            Load more
          </button>
        </div>
      )}

      {/* About navigation */}
      <div className="abouts-btn">
        <div>
          <button onClick={goToAbout} className="next-btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
