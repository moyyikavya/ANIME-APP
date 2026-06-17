import { useState } from "react";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";

function AddAnime() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    image: "",
    description: "",
    rating: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/animes", formData);

    navigate("/animes");
  }

  return (
    <div className="form-container">
      <h2>Add Anime</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Anime Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
        />

        <button className="submit-btn">Add Anime</button>
      </form>
    </div>
  );
}

export default AddAnime;
