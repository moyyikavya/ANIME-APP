function AnimeDashboard({ animes }) {

  const totalAnime = animes.length;

  const averageRating =

    animes.length > 0

      ? (

          animes.reduce(

            (sum, anime) =>

              sum + Number(anime.rating),

            0

          )

          / animes.length

        ).toFixed(1)

      : 0;

  const highestRated =

    animes.length > 0

      ? [...animes]

          .sort(

            (a, b) =>

              b.rating - a.rating

          )[0]

      : null;

  const totalStudios =

    new Set(

      animes.map(

        anime => anime.studio

      )

    ).size;

  return (

    <div className="dashboard">

      <h2>

        📊 Anime Dashboard

      </h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h3>

            Total Anime

          </h3>

          <h1>

            {totalAnime}

          </h1>

        </div>

        <div className="dashboard-card">

          <h3>

            Average Rating

          </h3>

          <h1>

            ⭐ {averageRating}

          </h1>

        </div>

        <div className="dashboard-card">

          <h3>

            Total Studios

          </h3>

          <h1>

            {totalStudios}

          </h1>

        </div>

        <div className="dashboard-card">

          <h3>

            Top Anime

          </h3>

          <h4>

            {

              highestRated

              ?

              highestRated.name

              :

              "N/A"

            }

          </h4>

          <p>

            ⭐ {

              highestRated

              ?

              highestRated.rating

              :

              ""

            }

          </p>

        </div>

      </div>

    </div>

  );

}

export default AnimeDashboard;