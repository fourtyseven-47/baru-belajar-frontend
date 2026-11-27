import { Link } from "react-router";

function HalamanTidakDitemukan() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-6xl font-bold text-indigo-600 mb-4">
        404
      </h2>

      <h3 className="text-2xl font-bold text-slate-800 mb-3">
        Halaman Tidak Ditemukan
      </h3>

      <p className="text-slate-500 mb-6">
        Maaf, halaman yang kamu cari tidak tersedia.
      </p>

      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}

export default HalamanTidakDitemukan;