function TombolFilter({ teks, aktif, onPilih }) {
  return (
    <button
      onClick={onPilih}
      className={`px-5 py-2 rounded-lg font-medium text-sm transition duration-200 ${
        aktif
          ? "bg-indigo-600 text-white shadow-md"
          : "bg-white text-slate-700 border border-slate-300 hover:bg-indigo-50"
      }`}
      aria-pressed={aktif}
    >
      {teks}
    </button>
  );
}

export default TombolFilter;