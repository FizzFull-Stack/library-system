import Head from "next/head";
import Link from "next/link";

export default function Guide() {
  return (
    <>
      <Head>
        <title>Pustaka.ID - Panduan Pengguna</title>
        <meta
          name="description"
          content="Panduan lengkap untuk menggunakan website Pustakaku.ID"
        />
      </Head>

      <main className="min-h-screen bg-gray-50 font-sans">
        {/* Header */}
        <header className="bg-white shadow-md p-4 md:p-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Pustaka.
              <span className="text-purple-600">ID</span>
            </h1>
            <Link
              href="/"
              className="bg-purple-600 text-white py-1.5 px-4 rounded-sm hover:bg-purple-700 transition-colors"
            >
              Kembali ke Login
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <section className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 text-center">
            Panduan Penggunaan Pustaka.ID
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Selamat datang di Pustakaku.ID! Ikuti panduan berikut untuk
            memanfaatkan layanan perpustakaan sekolah kami secara maksimal.
          </p>

          {/* Guide Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-md  border border-slate-300 hover:shadow-lg shadow-slate-200 transition-shadow">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                1. Registrasi atau Login
              </h3>
              <p className="text-gray-600">
                Masuk menggunakan NIS, Nama, dan Kelas Anda. Jika belum
                terdaftar, hubungi pustakawan sekolah untuk mendapatkan akses.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-md  border border-slate-300 hover:shadow-lg shadow-slate-200 transition-shadow">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                2. Jelajahi Koleksi
              </h3>
              <p className="text-gray-600">
                Gunakan fitur pencarian untuk menemukan buku berdasarkan judul,
                penulis, atau kategori. Koleksi diperbarui secara berkala!
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-md  border border-slate-300 hover:shadow-lg shadow-slate-200 transition-shadow">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                3. Pinjam Buku
              </h3>
              <p className="text-gray-600">
                Pilih buku yang diinginkan dan ikuti instruksi untuk memesan.
                Pastikan untuk mengembalikannya tepat waktu.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-md  border border-slate-300 hover:shadow-lg shadow-slate-200  transition-shadow">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                4. Kelola Akun
              </h3>
              <p className="text-gray-600">
                Periksa riwayat peminjaman dan perbarui informasi pribadi di
                menu akun Anda.
              </p>
            </div>
          </div>

          {/* Additional Tips */}
          <div className="mt-10 bg-white p-6 rounded-md  border border-slate-300 hover:shadow-lg shadow-slate-200 ">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              Tips Tambahan
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Pastikan koneksi internet stabil saat menggunakan website.
              </li>
              <li>
                Hubungi admin jika ada masalah teknis melalui email sekolah.
              </li>
              <li>Manfaatkan fitur panduan ini kapan saja dari menu utama.</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white p-4 md:p-6 text-center text-sm text-gray-400">
          <p>Support by FutureStack. © {new Date().getFullYear()} Pustaka.ID</p>
        </footer>
      </main>
    </>
  );
}
