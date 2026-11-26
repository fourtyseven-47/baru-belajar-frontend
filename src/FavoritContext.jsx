import { createContext, useContext, useState } from "react";

// Membuat Context untuk menyimpan data favorit.
const FavoritContext = createContext(null);

// Provider menyediakan data favorit untuk seluruh aplikasi.
export function FavoritProvider({ children }) {
  const [daftarFavorit, setDaftarFavorit] = useState([]);

  // Menambahkan atau menghapus ID manga dari daftar favorit.
  function ubahFavorit(id) {
    if (daftarFavorit.includes(id)) {
      setDaftarFavorit(
        daftarFavorit.filter((itemId) => itemId !== id)
      );
    } else {
      setDaftarFavorit([...daftarFavorit, id]);
    }
  }

  return (
    <FavoritContext value={{ daftarFavorit, ubahFavorit }}>
      {children}
    </FavoritContext>
  );
}

// Hook khusus untuk mengakses data favorit.
export function useFavorit() {
  return useContext(FavoritContext);
}