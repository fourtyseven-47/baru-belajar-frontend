import { Link, NavLink } from "react-router";
import { useFavorit } from "../FavoritContext.jsx";

function Navbar() {
  const { daftarFavorit } = useFavorit();

  const gayaLink = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-indigo-600 font-bold"
        : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Manga Library
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/" end className={gayaLink}>
            Daftar Manga
          </NavLink>

          <NavLink to="/favorit" className={gayaLink}>
            Favorit
            <span className="ml-1 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
              {daftarFavorit.length}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;