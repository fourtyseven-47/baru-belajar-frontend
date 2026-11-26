# Dokumentasi Database Manga

## 1. Struktur Tabel

Database yang digunakan bernama `manga` dengan struktur tabel sebagai berikut:

| Nama Kolom | Tipe Data | Keterangan |
|---|---|---|
| id | INTEGER | Primary Key dan Auto Increment |
| nama | TEXT | Nama manga |
| kategori | TEXT | Kategori manga |
| halaman | INTEGER | Jumlah halaman manga |
| tersedia | INTEGER | Status ketersediaan (1 = tersedia, 0 = tidak tersedia) |

## 2. Alasan Penggunaan Primary Key

Kolom `id` digunakan sebagai Primary Key karena setiap data manga membutuhkan identitas yang unik. Penggunaan `id` lebih tepat dibandingkan nama manga karena nama bisa saja sama, sedangkan ID harus berbeda untuk setiap data.

## 3. SQL Membuat Tabel

```sql
CREATE TABLE manga (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    kategori TEXT NOT NULL,
    halaman INTEGER NOT NULL,
    tersedia INTEGER NOT NULL
);
```

## 4. SQL Menambahkan Data Awal

```sql
INSERT INTO manga (nama, kategori, halaman, tersedia)
VALUES
('Bleach', 'Fiction', 529, 1),
('Fullmetal Alchemist', 'Fiction', 535, 1),
('Monster', 'Thriller', 320, 0);
```

## 5. Percobaan Query SQL

### A. SELECT dengan WHERE

Menampilkan manga yang memiliki kategori Fiction.

```sql
SELECT * FROM manga
WHERE kategori = 'Fiction';
```

**Hasil:**  
[Masukkan hasil query setelah dijalankan.]

### B. INSERT

Menambahkan data manga baru.

```sql
INSERT INTO manga (nama, kategori, halaman, tersedia)
VALUES ('Vagabond', 'Martial Arts', 512, 1);
```

**Hasil:**  
[Masukkan hasil query setelah dijalankan.]

### C. UPDATE dengan WHERE

Mengubah status ketersediaan manga Monster menjadi tersedia.

```sql
UPDATE manga
SET tersedia = 1
WHERE nama = 'Monster';
```

**Hasil:**  
[Masukkan hasil query setelah dijalankan.]

### D. DELETE dengan WHERE

Menghapus data manga Vagabond.

```sql
DELETE FROM manga
WHERE nama = 'Vagabond';
```

**Hasil:**  
[Masukkan hasil query setelah dijalankan.]