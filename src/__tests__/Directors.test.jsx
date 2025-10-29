import { render, screen } from "@testing-library/react";
import Directors from "../components/Directors";

describe("Directors component", () => {
  test("renders Directors heading", () => {
    render(<Directors />);
    expect(screen.getByText(/Directors/i)).toBeInTheDocument();
  });
});

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

const Directors = () => {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, i) => (
        <div key={i}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, j) => (
              <li key={j}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;
