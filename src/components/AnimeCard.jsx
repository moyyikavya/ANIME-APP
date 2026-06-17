import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import {

  addFavorite

} from "../features/favoriteSlice";

function AnimeCard({

  anime,

  onDelete

}) {

  const dispatch = useDispatch();

  function addToWatchlist() {

    const watchlist =

      JSON.parse(

        localStorage.getItem(

          "watchlist"

        )

      ) || [];

    const exists =

      watchlist.find(

        item =>

        item.id === anime.id

      );

    if (exists) {

      alert(

        "Anime already exists in Watchlist"

      );

      return;

    }

    watchlist.push(anime);

    localStorage.setItem(

      "watchlist",

      JSON.stringify(watchlist)

    );

    alert(

      "Added To Watchlist ❤️"

    );

  }

  return (

    <div className="card">

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

      <div className="card-actions">

        <Link

          className="view-btn"

          to={`/animes/${anime.id}`}

        >

          View

        </Link>

        <Link

          className="edit-btn"

          to={`/edit-anime/${anime.id}`}

        >

          Edit

        </Link>

        <button

          className="delete-btn"

          onClick={() =>

            onDelete(

              anime.id

            )

          }

        >

          Delete

        </button>

      </div>

      <button

        className="watch-btn"

        onClick={

          addToWatchlist

        }

      >

        ❤️ Add To Watchlist

      </button>

      <button

        className="favorite-btn"

        onClick={() =>

          dispatch(

            addFavorite(

              anime

            )

          )

        }

      >

        ⭐ Add Favorite

      </button>

    </div>

  );

}

export default AnimeCard;