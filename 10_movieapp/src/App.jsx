import "./App.css";
import Movie from "./components/Movie.jsx";
import movies from "./data/movie_data.js";
function App() {
  const new_movie = {
    id: 5,
    name: "Rise of Planet of the Apes",
    rating: 4.6,
    genre: "Action",
    duration: "2h 10m",
    releaseYear: 2009,
    poster: "./rise_of_planet_apes.webp",
  };
  return (
    <div>
      <h2>Movies:</h2>

      <ul className="Container">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} /> // send movie as prop
        ))}

        <Movie movie={new_movie} />
      </ul>
    </div>
  );
}

export default App;
