import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeFavorite,
} from "../features/favoriteSlice";

function Favorites() {

  const favorites =
    useSelector(
      state => state.favorites
    );

  const dispatch =
    useDispatch();

  return (
    <div className="favorites-container">

      <h1>
        Favorite Anime
      </h1>

      {
        favorites.length === 0 ? (

          <div className="empty-favorites">
            <h2>
              No Favorite Anime
            </h2>
          </div>

        ) : (

          <div className="favorites-grid">

            {favorites.map(anime => (

              <div
                key={anime.id}
                className="favorite-card"
              >

                <img
                  src={anime.image}
                  alt={anime.name}
                />

                <div className="favorite-content">

                  <h2>
                    {anime.name}
                  </h2>

                  <p>
                    🎭 {anime.genre}
                  </p>

                  <p>
                    ⭐ {anime.rating}
                  </p>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFavorite(
                          anime.id
                        )
                      )
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )
      }

    </div>
  );
}

export default Favorites;