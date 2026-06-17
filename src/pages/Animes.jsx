import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import api from "../services/api";

import AnimeCard from "../components/AnimeCard";

import AnimeRecommendation from "../components/AnimeRecommendation";

import AnimeDashboard from "../components/AnimeDashboard";

function Animes() {

  const [animes, setAnimes] = useState([]);

  const [genreFilter, setGenreFilter] = useState("All");

  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {

    getAnimes();

  }, []);

  async function getAnimes() {

    try {

      const response = await api.get("/animes");

      setAnimes(response.data);

    }

    catch (error) {

      console.log(error);

    }

  }

  async function deleteAnime(id) {

    try {

      await api.delete(`/animes/${id}`);

      setAnimes(

        animes.filter(

          anime => anime.id !== id

        )

      );

    }

    catch (error) {

      console.log(error);

    }

  }

  const processedAnimes =

    animes

    .filter((anime) => {

      const matchesGenre =

        genreFilter === "All"

        ||

        anime.genre === genreFilter;

      return matchesGenre;

    })

    .sort((a, b) => {

      if (sortOrder === "high") {

        return b.rating - a.rating;

      }

      if (sortOrder === "low") {

        return a.rating - b.rating;

      }

      return 0;

    });

  const genres = [

    "All",

    ...new Set(

      animes.map(

        anime => anime.genre

      )

    ),

  ];

  return (

    <>

      <h1>

        Popular Anime

      </h1>

      {/* DASHBOARD */}

      <AnimeDashboard

        animes={animes}

      />

      {/* RECOMMENDATION */}

      <AnimeRecommendation

        animes={animes}

      />

      {/* ADD ANIME BUTTON */}

      <Link

        to="/add-anime"

        className="add-btn"

      >

        Add Anime

      </Link>

      {/* FILTERS */}

      <div className="filters">

        <select

          value={genreFilter}

          onChange={(e) =>

            setGenreFilter(

              e.target.value

            )

          }

        >

          {

            genres.map(

              (genre, index) => (

                <option

                  key={index}

                  value={genre}

                >

                  {genre}

                </option>

              )

            )

          }

        </select>

        <select

          value={sortOrder}

          onChange={(e) =>

            setSortOrder(

              e.target.value

            )

          }

        >

          <option value="">

            Sort By Rating

          </option>

          <option value="high">

            High → Low

          </option>

          <option value="low">

            Low → High

          </option>

        </select>

      </div>

      {/* ANIME CARDS */}

      <div className="destinations">

        {

          processedAnimes.map(

            anime => (

              <AnimeCard

                key={anime.id}

                anime={anime}

                onDelete={deleteAnime}

              />

            )

          )

        }

      </div>

    </>

  );

}

export default Animes;