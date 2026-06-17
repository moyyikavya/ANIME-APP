import { Link } from "react-router-dom";

function Navbar() {

  const user =

    JSON.parse(

      localStorage.getItem("user")

    );

  return (

    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/animes">
        Animes
      </Link>

      <Link to="/watchlist">
        Watchlist
      </Link>

      <Link to="/favorites">
        Favorites
      </Link>

      {

        !user && (

          <>

            <Link to="/register">

              Register

            </Link>

            <Link to="/login">

              Login

            </Link>

          </>

        )

      }

      {

        user && (

          <Link to="/logout">

            Logout

          </Link>

        )

      }

    </nav>

  );

}

export default Navbar;