import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ALAMAT_API } from "../alamat.js";
import { useFavorit } from "../FavoritContext.jsx";

function HalamanDetail() {
  const { id } = useParams();
  const { daftarFavorit, ubahFavorit } = useFavorit();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tidakDitemukan, setTidakDitemukan] = useState(false);

  useEffect(() => {
    async function ambilDetailManga() {
      setLoading(true);
      setError("");
      setTidakDitemukan(false);
      setItem(null);

      try {
        const respon = await fetch(`${ALAMAT_API}/${id}`);

        if (respon.status === 404) {
          setTidakDitemukan(true);
          return;
        }

        if (!respon.ok) {
          throw new Error("Gagal mengambil data manga.");
        }

        const data = await respon.json();
        setItem(data);
      } catch (error) {
        setError("Tidak dapat terhubung ke server. Pastikan JSON Server berjalan.");
      } finally {
        setLoading(false);
      }
    }

    ambilDetailManga();
  }, [id]);

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-slate-500">Memuat detail manga...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-red-500">{error}</p>
        <Link to="/" className="text-indigo-600 hover:underline mt-4 inline-block">
          Kembali ke Daftar Manga
        </Link>
      </main>
    );
  }

  if (tidakDitemukan || !item) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Manga Tidak Ditemukan
        </h2>
        <p className="text-slate-500 mb-6">
          Manga dengan ID {id} tidak tersedia.
        </p>
        <Link to="/" className="text-indigo-600 hover:underline">
          Kembali ke Daftar Manga
        </Link>
      </main>
    );
  }

  // Context menyimpan ID favorit sebagai angka, sehingga kita memakai item.id dari API.
  const sudahFavorit = daftarFavorit.includes(item.id);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link to="/" className="text-indigo-600 hover:underline">
        ← Kembali ke Daftar Manga
      </Link>

      <div className="bg-white rounded-xl shadow-md p-8 mt-6">
        <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
            {item.kategori}
          </span>

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              item.tersedia
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {item.tersedia ? "Tersedia" : "Tidak Tersedia"}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          {item.nama}
        </h1>

        <p className="text-slate-500 mb-6">
          Jumlah halaman: {item.halaman}
        </p>

        <div className="border-t border-slate-200 pt-6">
          <h2 className="text-xl font-bold text-slate-800 mb-3">
            Deskripsi
          </h2>

          <p className="text-slate-600 leading-relaxed">
            {item.deskripsi || "Belum ada deskripsi untuk manga ini."}
          </p>
        </div>

        <button
          onClick={() => ubahFavorit(item.id)}
          className={`mt-8 px-6 py-3 rounded-lg text-white font-semibold transition ${
            sudahFavorit
              ? "bg-red-500 hover:bg-red-600"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {sudahFavorit ? "Hapus dari Favorit" : "Tambah ke Favorit"}
        </button>
      </div>
    </main>
  );
}

export default HalamanDetail;