import { render, screen } from "@testing-library/react";
import Movie from "../components/Movie";

describe("Movie component", () => {
  test("renders Movie heading", () => {
    render(<Movie />);
    expect(screen.getByText(/Movie/i)).toBeInTheDocument();
  });
});

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: 2,
    title: "The Imitation Game",
    time: 113,
    genres: ["Biography", "Drama", "Thriller"],
  },
  {
    id: 3,
    title: "Black Mass",
    time: 122,
    genres: ["Crime", "Drama", "Thriller"],
  },
];

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre) => (
        <span key={genre}>{genre}</span>
      ))}
    </div>
  );
};

export default Movie;
