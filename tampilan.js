function buatKartu(item) {
    // Menyesuaikan label status dengan nilai boolean agar status buku ditampilkan secara konsisten.
    const status = item.tersedia ? "Tersedia" : "Tidak Tersedia";
    const kelasStatus = item.tersedia ? "tersedia" : "tidak-tersedia";

    return `
        <article class="kartu-buku">
            <h3>${item.nama}</h3>
            <p>Kategori: ${item.kategori}</p>
            <p>Jumlah halaman: ${item.halaman}</p>
            <span class="status-buku ${kelasStatus}">${status}</span>
        </article>
    `;
}
function tampilkanBuku(data) {
    const daftarKartu = document.getElementById("daftar-kartu");
    // Menampilkan pesan alternatif agar area katalog tidak terlihat kosong ketika tidak ada hasil.
    if (data.length === 0) {
        // Mengubah seluruh data menjadi kartu HTML agar struktur kartu tidak perlu ditulis berulang di HTML.
        daftarKartu.innerHTML = "<p>Tidak ada buku yang ditemukan.</p>";
        return;
    }

    daftarKartu.innerHTML = data.map(buatKartu).join("");
}
tampilkanBuku(daftarItem);
 
const tombolFilter = document.querySelectorAll("[data-kategori]");

tombolFilter.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        const kategori = tombol.dataset.kategori;

        // Hapus penanda aktif dari semua tombol agar hanya satu yang aktif.
        tombolFilter.forEach(function (btn) {
        btn.classList.remove("aktif");
        });

        // Tandai tombol yang diklik sebagai tombol aktif.
        tombol.classList.add("aktif");
        if (kategori === "semua") {
            tampilkanBuku(daftarItem);
        } else {
            // Menyaring data asli berdasarkan kategori yang dipilih tanpa mengubah daftar buku sumber.
            const hasilFilter = daftarItem.filter(function (item) {
                return item.kategori === kategori;
            });

            tampilkanBuku(hasilFilter);
        }
    });
});

