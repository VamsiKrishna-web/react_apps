function Movie({ movie }) {
  // receive movie as prop
  return (
    <li className="movie" key={movie.id}>
      <img src={movie.poster} alt="" />
      <h3>Title: {movie.name}</h3>
      <p>
        The movie {movie.name} was {movie.genre} movie.
      </p>
      <p>It has rating of {movie.rating} stars.</p>
      <p>
        It released on {movie.releaseYear} with duration of {movie.duration}
      </p>
    </li>
  );
}

export default Movie;
