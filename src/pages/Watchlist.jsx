import { useState } from "react";

function Watchlist() {

  const [

    watchlist,

    setWatchlist

  ] = useState(

    JSON.parse(

      localStorage.getItem(

        "watchlist"

      )

    ) || []

  );

  function removeFromWatchlist(id) {

    const updated =

      watchlist.filter(

        anime =>

        anime.id !== id

      );

    setWatchlist(updated);

    localStorage.setItem(

      "watchlist",

      JSON.stringify(updated)

    );

  }

  return (

    <div>

      <h1>

        My Watchlist ❤️

      </h1>

      {

        watchlist.length === 0 ?

        (

          <h2>

            No Anime Added Yet

          </h2>

        )

        :

        (

          <div className="destinations">

            {

              watchlist.map(

                anime => (

                  <div

                    key={anime.id}

                    className="card"

                  >

                    <img

                      src={anime.image}

                      alt={anime.name}

                    />

                    <h3>

                      {anime.name}

                    </h3>

                    <p>

                      {anime.genre}

                    </p>

                    <p>

                      {anime.studio}

                    </p>

                    <p>

                      ⭐ {anime.rating}

                    </p>

                    <button

                      className="remove-btn"

                      onClick={() =>

                        removeFromWatchlist(

                          anime.id

                        )

                      }

                    >

                      Remove

                    </button>

                  </div>

                )

              )

            }

          </div>

        )

      }

    </div>

  );

}

export default Watchlist;