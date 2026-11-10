import { useState } from "react";
import { daftarItem } from "./data.js";

import Navbar from "./components/navbar.jsx";
import Kartu from "./components/kartu.jsx";
import TombolFilter from "./components/tombolFilter.jsx";


function App() {

  // State disimpan di App agar tombol dan daftar kartu menggunakan kategori yang sama.
  const [kategori, setKategori] = useState("Semua");

  // Daftar kategori diambil dari data agar tombol mengikuti kategori yang tersedia.
  const daftarKategori = [
    "Semua",
    ...new Set(daftarItem.map((item) => item.kategori))
  ];

  // Filter menghasilkan daftar baru tanpa mengubah data asli.
  const daftarTampil =
    kategori === "Semua"
      ? daftarItem
      : daftarItem.filter((item) => item.kategori === kategori);


  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">

      {/* Header dan navigasi */}
      <Navbar />

      <main className="max-w-6xl w-full mx-auto px-6 py-10 flex-1">

        {/* Judul halaman */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Koleksi Manga
          </h2>

          <p className="text-slate-500 mt-2">
            Temukan berbagai manga dari koleksi favoritmu.
          </p>
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


        {/* Informasi jumlah manga */}
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


        {/* Daftar kartu manga */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {daftarTampil.map((item) => (
            <Kartu
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </main>


      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-5">
        <p className="text-sm text-slate-400">
          © 2026 Manga Library. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;