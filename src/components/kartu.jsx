import { Link } from "react-router";

function Kartu({ item, onHapus }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-semibold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {item.kategori}
        </span>

        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            item.tersedia
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {item.tersedia ? "Tersedia" : "Tidak Tersedia"}
        </span>
      </div>

      <Link
        to={`/manga/${item.id}`}
        className="text-xl font-bold text-slate-800 hover:text-indigo-600 transition"
      >
        {item.nama}
      </Link>

      <p className="text-sm text-slate-500 mt-2">
        {item.halaman} halaman
      </p>

      <p className="text-sm text-slate-600 mt-3 line-clamp-2">
        {item.deskripsi || "Belum ada deskripsi untuk manga ini."}
      </p>

      <button
        onClick={() => onHapus(item.id)}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Hapus
      </button>
    </div>
  );
}

export default Kartu;