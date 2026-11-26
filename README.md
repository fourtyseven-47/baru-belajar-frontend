# Manga Library

**Nama:** Weldia Novianda 
**Tema:** Katalog Manga

## Deskripsi

Manga Library merupakan website katalog manga yang dibuat menggunakan React dan Vite. Website ini menampilkan koleksi manga berdasarkan kategori, jumlah halaman, serta status ketersediaan.

Pengguna dapat menyaring daftar manga menggunakan tombol filter kategori. Tampilan jumlah manga dan tombol aktif akan menyesuaikan kategori yang dipilih.

## Teknologi

- React
- Vite
- Tailwind CSS
- JavaScript

## Fitur

- Menampilkan koleksi manga.
- Filter manga berdasarkan kategori.
- Menampilkan jumlah manga secara dinamis.
- Menampilkan informasi jumlah halaman.
- Menampilkan status ketersediaan manga.
- Tampilan responsif.

## Cara Menjalankan Project

1. Install seluruh dependency:

   ```bash
   npm install
   ```

2. Jalankan aplikasi React pada terminal pertama:

   ```bash
   npm run dev
   ```

3. Jalankan JSON Server pada terminal kedua:

   ```bash
   npx json-server --watch db.json --port 3001
   ```

4. Buka alamat aplikasi yang diberikan Vite melalui browser.

Pastikan kedua terminal tetap berjalan agar aplikasi dapat berkomunikasi dengan JSON Server.