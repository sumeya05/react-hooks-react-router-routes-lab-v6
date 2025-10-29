// Actors.jsx
import NavBar from "../components/NavBar";

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  { name: "Anna Kendrick", movies: ["Pitch Perfect", "Into The Wood"] },
  {
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
    ],
  },
];

const Actors = () => {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, i) => (
        <div key={i}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, j) => (
              <li key={j}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
