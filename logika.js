// LANGKAH 1 — PAHAMI
// Masukan: array daftar buku.
// Keluaran: jumlah buku yang tersedia.

// LANGKAH 2 — CONTOH
// Delapan buku dengan enam buku tersedia menghasilkan 6.
// Daftar kosong menghasilkan 0.

// LANGKAH 3 — LANGKAH
// 1. Buat variabel penghitung dengan nilai awal 0.
// 2. Periksa setiap buku menggunakan for...of.
// 3. Jika buku tersedia, tambahkan penghitung.
// 4. Kembalikan nilai penghitung.

// LANGKAH 4 — TERJEMAHKAN
function hitungTersedia(daftar) {
  let jumlah = 0;

  for (const item of daftar) {
    if (item.tersedia === true) {
      jumlah++;
    }
  }

  // Nilai awal 0 membuat daftar kosong menghasilkan 0.
  return jumlah;
}
// LANGKAH 1 — PAHAMI
// Masukan: array daftar buku dan ID yang dicari.
// Keluaran: object buku yang cocok atau null.

// LANGKAH 2 — CONTOH
// ID 3 menghasilkan object Atomic Habits.
// ID 99 menghasilkan null.

// LANGKAH 3 — LANGKAH
// 1. Periksa setiap buku.
// 2. Bandingkan ID buku dengan ID yang dicari.
// 3. Jika sama, kembalikan buku tersebut.
// 4. Jika selesai dan tidak ditemukan, kembalikan null.

// LANGKAH 4 — TERJEMAHKAN
function cariBerdasarkanId(daftar, id) {
  for (const item of daftar) {
    if (item.id === id) {
      return item;
    }
  }

  // null membedakan ID yang tidak ditemukan dari object buku.
  return null;
}
// LANGKAH 1 — PAHAMI
// Masukan: array daftar buku dan kategori yang dicari.
// Keluaran: array berisi buku dengan kategori yang cocok.

// LANGKAH 2 — CONTOH
// Kategori Fiksi menghasilkan tiga buku.
// Kategori Komik menghasilkan array kosong.

// LANGKAH 3 — LANGKAH
// 1. Buat array kosong untuk menyimpan hasil.
// 2. Periksa setiap buku.
// 3. Jika kategorinya cocok, masukkan buku ke array hasil.
// 4. Kembalikan array hasil.

// LANGKAH 4 — TERJEMAHKAN
function saringKategori(daftar, kategori) {
  const hasil = [];

  for (const item of daftar) {
    if (item.kategori === kategori) {
      hasil.push(item);
    }
  }

  // Array kosong tetap dikembalikan agar tipe hasilnya konsisten.
  return hasil;
}
// LANGKAH 1 — PAHAMI
// Masukan: array daftar buku.
// Keluaran: rata-rata halaman buku yang tersedia atau null.

// LANGKAH 2 — CONTOH
// Enam buku tersedia dengan total 2603 halaman menghasilkan 433.83...
// Daftar tanpa buku tersedia menghasilkan null.

// LANGKAH 3 — LANGKAH
// 1. Buat variabel total halaman dan jumlah buku, keduanya bernilai 0.
// 2. Periksa setiap buku.
// 3. Jika buku tersedia, tambahkan halamannya ke total.
// 4. Tambahkan jumlah buku yang tersedia.
// 5. Jika jumlah buku 0, kembalikan null.
// 6. Jika tidak, kembalikan total halaman dibagi jumlah buku.

// LANGKAH 4 — TERJEMAHKAN
function rataRataTersedia(daftar) {
  let totalHalaman = 0;
  let jumlahBuku = 0;

  for (const item of daftar) {
    if (item.tersedia === true) {
      totalHalaman += item.halaman;
      jumlahBuku++;
    }
  }

  // Pembagian dengan nol tidak menghasilkan rata-rata yang bermakna.
  if (jumlahBuku === 0) {
    return null;
  }

  return totalHalaman / jumlahBuku;
}
// ================================
// PENGUJIAN FUNGSI
// ================================

// Fungsi 1: hitungTersedia
console.log("F1 normal:", hitungTersedia(daftarItem));
console.log("F1 kosong:", hitungTersedia([]));

// Fungsi 2: cariBerdasarkanId
console.log("F2 normal:", cariBerdasarkanId(daftarItem, 3));
console.log("F2 tidak ditemukan:", cariBerdasarkanId(daftarItem, 99));

// Fungsi 3: saringKategori
console.log("F3 normal:", saringKategori(daftarItem, "Fiksi"));
console.log("F3 kategori kosong:", saringKategori(daftarItem, "Komik"));

// Fungsi 4: rataRataTersedia
console.log("F4 normal:", rataRataTersedia(daftarItem));
console.log("F4 tanpa buku tersedia:", rataRataTersedia([]));
console.log(
  "F4 semua tidak tersedia:",
  rataRataTersedia([
    {
      id: 9,
      nama: "Contoh Buku",
      kategori: "Fiksi",
      halaman: 100,
      tersedia: false
    }
  ])
);