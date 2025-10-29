import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home component", () => {
  test("renders the Home heading", () => {
    render(<Home />);
    expect(screen.getByText(/Welcome Home!/i)).toBeInTheDocument();
  });
});

const movies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "The Imitation Game" },
  { id: 3, title: "Black Mass" },
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
