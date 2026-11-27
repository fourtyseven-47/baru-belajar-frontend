function Kartu({ item, onHapus }) {
  const status = item.tersedia ? "Tersedia" : "Tidak Tersedia";

  return (
    <article className="bg-white rounded-xl shadow-md border border-slate-200 p-5 hover:shadow-xl transition duration-300">

      <div className="flex justify-between items-start gap-3 mb-4">
        <h2 className="text-xl font-bold text-slate-800">
          {item.nama}
        </h2>

        <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
          {item.kategori}
        </span>
      </div>

      <div className="space-y-3 text-sm">
        <p className="text-slate-600">
          Jumlah halaman:
          <span className="font-semibold text-slate-900 ml-2">
            {item.halaman} halaman
          </span>
        </p>

        <p className="text-slate-600">
          Status:
          <span
            className={`font-semibold ml-2 ${
              item.tersedia ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </span>
        </p>
      </div>

      <button
        onClick={onHapus}
        className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >
        Hapus Manga
      </button>

    </article>
  );
}

export default Kartu;