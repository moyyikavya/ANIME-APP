import { useState } from "react";

function AnimeRecommendation({ animes }) {

  const [search, setSearch] =
    useState("");

  const [results, setResults] =
    useState([]);

  function getRecommendations() {

    const filteredAnimes =
      animes.filter((anime) =>

        anime.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        anime.genre
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        anime.studio
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        anime.rating
          .toString()
          .includes(search)

      );

    setResults(filteredAnimes);
  }

  return (

    <div className="recommendation-box">

      <h2>
        🎯 Anime Recommendation
      </h2>

      <p>
        Search by Name,
        Genre, Studio or Rating
      </p>

      <div className="recommend-search">

        <input
          type="text"
          placeholder="Naruto, Action, MAPPA, 4.9..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <button
          className="recommend-btn"
          onClick={
            getRecommendations
          }
        >
          Search
        </button>

      </div>

      {
        results.length > 0 && (

          <div className="destinations">

            {
              results.map(
                (anime) => (

                  <div
                    key={anime.id}
                    className="recommended-card"
                  >

                    <img
                      src={anime.image}
                      alt={anime.name}
                    />

                    <h3>
                      {anime.name}
                    </h3>

                    <p>
                      Genre:
                      {anime.genre}
                    </p>

                    <p>
                      Studio:
                      {anime.studio}
                    </p>

                    <p>
                      ⭐ {anime.rating}
                    </p>

                  </div>

                )
              )
            }

          </div>

        )
      }

      {
        search &&
        results.length === 0 && (

          <h3
            style={{
              textAlign:
                "center",
              marginTop:
                "20px"
            }}
          >
            No Anime Found
          </h3>

        )
      }

    </div>

  );

}

export default AnimeRecommendation;