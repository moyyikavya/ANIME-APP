import { useState } from "react";
import api from "../Services/api";

function ReviewForm({
  animeId,
  getReviews,
}) {

  const [review, setReview] =
    useState({
      username: "",
      rating: "",
      comment: "",
    });

  function handleChange(e) {

    setReview({
      ...review,
      [e.target.name]:
        e.target.value,
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    await api.post(
      "/reviews",
      {
        ...review,
        animeId,
      }
    );

    setReview({
      username: "",
      rating: "",
      comment: "",
    });

    getReviews();

  }

  return (

    <form
      className="review-form"
      onSubmit={handleSubmit}
    >

      <h2>Add Review</h2>

      <input
        type="text"
        name="username"
        placeholder="Your Name"
        value={review.username}
        onChange={handleChange}
      />

      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        value={review.rating}
        onChange={handleChange}
      />

      <textarea
        name="comment"
        placeholder="Write Review"
        value={review.comment}
        onChange={handleChange}
      />

      <button
        className="submit-btn"
      >
        Submit Review
      </button>

    </form>

  );

}

export default ReviewForm;
