"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [nis, setNis] = useState("");
  const [name, setName] = useState("");
  const [classRoom, setClassRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: NIS: ${nis}, Name: ${name}, Class: ${classRoom}`);
    // Tambahkan logika autentikasi nyata di sini
  };

  return (
    <main className="flex min-h-screen font-sans">
      {/* Left Section - Image */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/school-building.jpg')" }}
      >
        <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 text-purple-600 font-medium">
          Pustakaku.ID
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md space-y-6">
          <Link
            href="/guide"
            className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Panduan Pengguna
          </Link>
          <h1 className="text-5xl font-bold text-gray-800">Pustakaku.ID</h1>
          <p className="text-gray-600">
            Masuk sekarang dan jelajahi ilmu pengetahuan
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nis"
                className="block text-sm font-medium text-gray-700"
              >
                NIS
              </label>
              <input
                type="text"
                id="nis"
                value={nis}
                onChange={(e) => setNis(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700"
              >
                Kelas
              </label>
              <input
                type="text"
                id="class"
                value={classRoom}
                onChange={(e) => setClassRoom(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
