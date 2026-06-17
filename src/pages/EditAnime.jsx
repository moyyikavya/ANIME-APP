import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../Services/api";

function EditAnime() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    image: "",
    description: "",
    rating: "",
  });

  useEffect(() => {
    getAnime();
  }, []);

  async function getAnime() {
    const response = await api.get(`/animes/${id}`);

    setFormData(response.data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(`/animes/${id}`, formData);

    navigate("/animes");
  }

  return (
    <div className="form-container">
      <h2>Edit Anime</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
        />

        <button className="submit-btn">Update Anime</button>
      </form>
    </div>
  );
}

export default EditAnime;
