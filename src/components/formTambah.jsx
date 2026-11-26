import { useState } from "react";

function FormTambah({ onTambah, daftarKategori }) {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [halaman, setHalaman] = useState("");
  const [tersedia, setTersedia] = useState("true");

  async function handleSubmit(event) {
    event.preventDefault();

    // Mengubah nilai input menjadi tipe data yang sesuai.
    const mangaBaru = {
      nama,
      kategori,
      halaman: Number(halaman),
      tersedia: tersedia === "true",
    };

    // Form hanya dikosongkan jika data berhasil disimpan.
    const berhasil = await onTambah(mangaBaru);

    if (berhasil) {
      setNama("");
      setKategori("");
      setHalaman("");
      setTersedia("true");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mb-8"
    >
      <h3 className="text-xl font-bold text-slate-800 mb-5">
        Tambah Manga Baru
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Nama Manga
          </label>
          <input
            type="text"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
            required
            placeholder="Masukkan nama manga"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Kategori
          </label>
          <select
            value={kategori}
            onChange={(event) => setKategori(event.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Pilih kategori</option>

            {daftarKategori.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Jumlah Halaman
          </label>
          <input
            type="number"
            min="1"
            value={halaman}
            onChange={(event) => setHalaman(event.target.value)}
            required
            placeholder="Contoh: 300"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Status Ketersediaan
          </label>
          <select
            value={tersedia}
            onChange={(event) => setTersedia(event.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="true">Tersedia</option>
            <option value="false">Tidak Tersedia</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        + Tambah Manga
      </button>
    </form>
  );
}

export default FormTambah;