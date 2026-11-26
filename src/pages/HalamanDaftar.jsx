import { useState, useEffect } from "react";

import Kartu from "../components/kartu.jsx";
import TombolFilter from "../components/tombolFilter.jsx";
import FormTambah from "../components/formTambah.jsx";
import { ALAMAT_API } from "../alamat.js";

function HalamanDaftar() {
  const [daftarItem, setDaftarItem] = useState([]);
  const [status, setStatus] = useState("memuat");

  const [kategori, setKategori] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");

  // Mengambil data dari server ketika halaman daftar pertama kali dibuka.
  useEffect(() => {
    async function ambilData() {
      try {
        const respon = await fetch(ALAMAT_API);

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

  // Menambahkan manga baru ke server.
  async function tambahItem(itemBaru) {
    try {
      const respon = await fetch(ALAMAT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemBaru),
      });

      if (!respon.ok) {
        throw new Error("Gagal menambahkan manga");
      }

      const itemTersimpan = await respon.json();

      setDaftarItem((daftarSebelumnya) => [
        ...daftarSebelumnya,
        itemTersimpan,
      ]);

      alert("Manga berhasil ditambahkan!");
      return true;
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan manga!");
      return false;
    }
  }

  // Menghapus manga berdasarkan ID dari server.
  async function hapusItem(item) {
    const konfirmasi = window.confirm(
      `Apakah kamu yakin ingin menghapus manga "${item.nama}"?`
    );

    if (!konfirmasi) return;

    try {
      const respon = await fetch(`${ALAMAT_API}/${item.id}`, {
        method: "DELETE",
      });

      if (!respon.ok) {
        throw new Error("Gagal menghapus manga");
      }

      setDaftarItem((daftarSebelumnya) =>
        daftarSebelumnya.filter((data) => data.id !== item.id)
      );

      alert("Manga berhasil dihapus!");
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus manga!");
    }
  }

  // Kategori diambil secara otomatis dari data manga.
  const daftarKategori = [
    "Semua",
    ...new Set(daftarItem.map((item) => item.kategori)),
  ];

  const hasilFilterKategori =
    kategori === "Semua"
      ? daftarItem
      : daftarItem.filter((item) => item.kategori === kategori);

  const daftarTampil = hasilFilterKategori.filter((item) =>
    item.nama.toLowerCase().includes(kataKunci.toLowerCase())
  );

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
          <Kartu
            key={item.id}
            item={item}
            onHapus={() => hapusItem(item)}
          />
        ))}
      </div>
    );
  }

  return (
    <main className="max-w-6xl w-full mx-auto px-6 py-10 flex-1">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Koleksi Manga
        </h2>

        <p className="text-slate-500 mt-2">
          Temukan berbagai manga dari koleksi favoritmu.
        </p>
      </div>

      <FormTambah
        onTambah={tambahItem}
        daftarKategori={daftarKategori.filter(
          (item) => item !== "Semua"
        )}
      />

      {/* Pencarian manga berdasarkan nama. */}
      <div className="mb-6">
        <input
          type="text"
          value={kataKunci}
          onChange={(event) => setKataKunci(event.target.value)}
          placeholder="Cari manga..."
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Filter kategori manga. */}
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
  );
}

export default HalamanDaftar;