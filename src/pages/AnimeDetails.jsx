import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "../Services/api";

import ReviewForm from "../components/ReviewForm";

function AnimeDetails() {

  const { id } =
    useParams();

  const [anime, setAnime] =
    useState(null);

  const [reviews, setReviews] =
    useState([]);

  useEffect(() => {

    getAnime();
    getReviews();

  }, []);

  async function getAnime() {

    const response =
      await api.get(
        `/animes/${id}`
      );

    setAnime(response.data);

  }

  async function getReviews() {

    const response =
      await api.get(
        `/reviews?animeId=${id}`
      );

    setReviews(response.data);

  }

  async function deleteReview(
    reviewId
  ) {

    await api.delete(
      `/reviews/${reviewId}`
    );

    getReviews();

  }

  if (!anime) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className="details">

      <img
        src={anime.image}
        alt={anime.name}
      />

      <h1>{anime.name}</h1>

      <p>{anime.description}</p>

      <h3>Genre</h3>
      <p>{anime.genre}</p>

      <h3>Studio</h3>
      <p>{anime.studio}</p>

      <h3>Episodes</h3>
      <p>{anime.episodes}</p>

      <h3>Release Year</h3>
      <p>{anime.releaseYear}</p>

      <h3>Rating</h3>
      <p>⭐ {anime.rating}</p>

      <ReviewForm
        animeId={id}
        getReviews={getReviews}
      />

      <h2>
        User Reviews
      </h2>

      {reviews.length === 0 ? (

        <p>
          No Reviews Yet
        </p>

      ) : (

        reviews.map(review => (

          <div
            key={review.id}
            className="review-card"
          >

            <h4>
              {review.username}
            </h4>

            <p>
              ⭐ {review.rating}
            </p>

            <p>
              {review.comment}
            </p>

            <button
              className="delete-btn"
              onClick={() =>
                deleteReview(
                  review.id
                )
              }
            >
              Delete
            </button>

          </div>

        ))

      )}

    </div>

  );

}

export default AnimeDetails;