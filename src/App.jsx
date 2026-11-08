import { useState, useEffect } from "react";

import Navbar from "./components/navbar.jsx";
import Kartu from "./components/kartu.jsx";
import TombolFilter from "./components/tombolFilter.jsx";

function App() {
  // Data dimulai dari array kosong karena belum diambil dari JSON.
  const [daftarItem, setDaftarItem] = useState([]);

  // Status awal memuat karena data belum selesai diambil.
  const [status, setStatus] = useState("memuat");

  const [kategori, setKategori] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");

  useEffect(() => {
    async function ambilData() {
      try {
        const respon = await fetch("/manga.json");

        if (!respon.ok) {
          throw new Error("Gagal mengambil data manga");
        }

        const data = await respon.json();

        setDaftarItem(data);
        setStatus("berhasil");
      } catch (error) {
        console.error(error);
        setStatus("gagal");
      }
    }

    ambilData();
  }, []);

  // Kategori dibuat berdasarkan data yang berhasil diterima.
  const daftarKategori = [
    "Semua",
    ...new Set(daftarItem.map((item) => item.kategori)),
  ];

  // Penyaringan pertama berdasarkan kategori.
  const hasilFilterKategori =
    kategori === "Semua"
      ? daftarItem
      : daftarItem.filter((item) => item.kategori === kategori);

  // Penyaringan kedua berdasarkan kata kunci nama manga.
  const daftarTampil = hasilFilterKategori.filter((item) =>
    item.nama.toLowerCase().includes(kataKunci.toLowerCase())
  );

  // Jumlah hanya ditampilkan setelah data berhasil diambil.
  const teksJumlah =
    status === "berhasil" ? (
      <p className="text-slate-600 mb-5">
        Menampilkan{" "}
        <span className="font-bold text-indigo-600">
          {daftarTampil.length}
        </span>
        {" "}dari{" "}
        <span className="font-bold">
          {daftarItem.length}
        </span>
        {" "}manga
      </p>
    ) : null;

  // Menentukan tampilan berdasarkan status pengambilan data.
  let isi;

  if (status === "memuat") {
    isi = (
      <p className="text-center text-slate-500 py-10">
        Sedang memuat koleksi manga...
      </p>
    );
  } else if (status === "gagal") {
    isi = (
      <p className="text-center text-red-600 py-10">
        Gagal memuat koleksi manga. Silakan coba lagi.
      </p>
    );
  } else if (daftarTampil.length === 0) {
    isi = (
      <p className="text-center text-slate-500 py-10">
        Manga tidak ditemukan.
      </p>
    );
  } else {
    isi = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {daftarTampil.map((item) => (
          <Kartu key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar />

      <main className="max-w-6xl w-full mx-auto px-6 py-10 flex-1">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Koleksi Manga
          </h2>

          <p className="text-slate-500 mt-2">
            Temukan berbagai manga dari koleksi favoritmu.
          </p>
        </div>

        {/* Kotak pencarian */}
        <div className="mb-6">
          <input
            type="text"
            value={kataKunci}
            onChange={(event) => setKataKunci(event.target.value)}
            placeholder="Cari manga..."
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Tombol filter kategori */}
        <div className="flex flex-wrap gap-3 mb-8">
          {daftarKategori.map((item) => (
            <TombolFilter
              key={item}
              teks={item}
              aktif={kategori === item}
              onPilih={() => setKategori(item)}
            />
          ))}
        </div>

        {teksJumlah}

        {isi}
      </main>

      <footer className="bg-slate-900 text-white text-center py-5">
        <p className="text-sm text-slate-400">
          © 2026 Manga Library. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;