import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
const movies = [
  {
    title: "Inception",
    image: "images/inception.jpg",
    description: "A mind-bending thriller by Christopher Nolan.",
  },
  {
    title: "The Dark Knight",
    image: "images/batman.jpg",
    description: "A gripping tale of Batman and Joker.",
  },
  {
    title: "Interstellar",
    image: "images/inter.jpg",
    description: "A space exploration epic.",
  },
  {
    title: "The Matrix",
    image: "images/metrix.jpg",
    description: "A hacker discovers the reality is an illusion.",
  },
  {
    title: "Pulp Fiction",
    image: "images/pulp.jpg",
    description: "A mix of crime stories intertwined in Los Angeles.",
  },
  {
    title: "Fight Club",
    image: "images/fight club.jpg",
    description: "An insomniac and a soap salesman start an underground fight club.",
  },
  {
    title: "The Shawshank Redemption",
    image: "images/shawshank.jpg",
    description: "A story of hope and friendship in a prison.",
  },
  {
    title: "Forrest Gump",
    image: "images/forrest gump.jpg",
    description: "The life journey of a simple man with a big heart.",
  },
  {
    title: "The Godfather",
    image: "images/godfather.jpg",
    description: "The saga of a crime family in America.",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    image: "images/lord of rings.jpg",
    description: "A hobbit's quest to destroy a powerful ring.",
  },
  {
    title: "Star Wars: A New Hope",
    image: "images/starwars.jpg",
    description: "The beginning of the epic space saga.",
  },
  {
    title: "Jurassic Park",
    image: "images/jurassic park.jpg",
    description: "Dinosaurs are brought back to life with disastrous"
  }]


function MoviePage() {
  return (
    <div>
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviePage;
