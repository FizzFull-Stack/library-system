"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../utils/supabase/client";

export default function Home() {
  const [nis, setNis] = useState("");
  const [name, setName] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();

    const email = `siswa${nis}@gmail.com`;
    const password = nis;

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      console.warn("Login failed, trying signup...", loginError.message);
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            nis,
            class: classRoom,
          },
        },
      });

      if (signUpError) {
        console.error("Signup Error:", signUpError.message);
        setError(`Gagal: ${signUpError.message}`);
        setLoading(false);
        return;
      }
    }

    router.push("/dashboard");
  };

  return (
    <main className="flex flex-col min-h-screen md:flex-row">
      <div className="w-full md:w-1/2 lg:w-1/2 h-64 md:h-screen bg-[url('/login.jpg')] bg-center bg-cover relative">
        <h1 className="m-5 bg-white absolute left-0 px-4 py-2 rounded-full font-medium">
          Pustaka.ID
        </h1>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center p-4 md:p-6 relative">
        <a
          href=""
          className="bg-purple-600 py-1.5 px-4 text-white rounded-sm absolute right-4 top-4 md:top-6"
        >
          Panduan Pengguna
        </a>

        <form className="flex flex-col space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-4xl md:text-6xl lg:text-8xl">
            Pustaka.<span className="span text-purple-600">ID</span>
          </h1>
          <p className="mb-8 text-gray-600">
            Masuk Sekarang dan jelajahi ilmu pengetahuan
          </p>

          <div>
            <label htmlFor="nis" className="block text-sm font-medium text-gray-700">NIS</label>
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
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
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">Kelas</label>
            <input
              type="text"
              id="class"
              value={classRoom}
              onChange={(e) => setClassRoom(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-purple-600 text-white font-medium py-2 rounded-sm disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Memproses..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
