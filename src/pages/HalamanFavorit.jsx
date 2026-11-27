import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ALAMAT_API } from "../alamat.js";
import { useFavorit } from "../FavoritContext.jsx";
import Kartu from "../components/kartu.jsx";

function HalamanFavorit() {
  const { daftarFavorit, ubahFavorit } = useFavorit();

  const [daftarManga, setDaftarManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function ambilManga() {
      try {
        const respon = await fetch(ALAMAT_API);

        if (!respon.ok) {
          throw new Error("Gagal mengambil data manga.");
        }

        const data = await respon.json();
        setDaftarManga(data);
      } catch (error) {
        setError(
          "Tidak dapat terhubung ke server. Pastikan JSON Server berjalan."
        );
      } finally {
        setLoading(false);
      }
    }

    ambilManga();
  }, []);

  // Ambil hanya manga yang ID-nya terdapat dalam daftar favorit.
  const mangaFavorit = daftarManga.filter((item) =>
    daftarFavorit.includes(item.id)
  );

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-slate-500">Memuat daftar favorit...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Manga Favorit
        </h1>

        <p className="text-slate-500 mt-2">
          Kamu memiliki {mangaFavorit.length} manga dalam daftar favorit.
        </p>
      </div>

      {mangaFavorit.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">
          <h2 className="text-xl font-bold text-slate-700 mb-3">
            Belum Ada Manga Favorit
          </h2>

          <p className="text-slate-500 mb-6">
            Tambahkan manga ke daftar favorit untuk melihatnya di sini.
          </p>

          <Link
            to="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Jelajahi Manga
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mangaFavorit.map((item) => (
            <div key={item.id} className="relative">
              <Kartu item={item} onHapus={() => {}} />

              <button
                onClick={() => ubahFavorit(item.id)}
                className="mt-3 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Hapus dari Favorit
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default HalamanFavorit;