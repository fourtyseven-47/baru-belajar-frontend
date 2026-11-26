import { Routes, Route } from "react-router";

import Navbar from "./components/navbar.jsx";
import HalamanDaftar from "./pages/HalamanDaftar.jsx";
import HalamanDetail from "./pages/HalamanDetail.jsx";
import HalamanFavorit from "./pages/HalamanFavorit.jsx";
import HalamanTidakDitemukan from "./pages/HalamanTidakDitemukan.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar berada di luar Routes agar selalu tampil di setiap halaman. */}
      <Navbar />

      <div className="flex-grow">
        <Routes>
          {/* Halaman utama berisi seluruh daftar manga. */}
          <Route path="/" element={<HalamanDaftar />} />

          {/* Parameter id digunakan untuk mengambil detail manga tertentu. */}
          <Route path="/manga/:id" element={<HalamanDetail />} />

          {/* Halaman khusus untuk manga favorit. */}
          <Route path="/favorit" element={<HalamanFavorit />} />

          {/* Semua alamat yang tidak cocok akan diarahkan ke halaman 404. */}
          <Route path="*" element={<HalamanTidakDitemukan />} />
        </Routes>
      </div>

      <footer className="bg-slate-800 text-white text-center py-6 mt-auto">
        <p className="text-sm">
          © 2026 Manga Library. Dibuat untuk Tugas Frontend.
        </p>
      </footer>
    </div>
  );
}

export default App;