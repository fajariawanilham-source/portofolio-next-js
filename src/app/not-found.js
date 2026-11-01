import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-4 py-10 text-center">
      <p className="text-6xl font-extrabold uppercase tracking-wide text-aksen md:text-7xl">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-utama md:text-4xl">
        Maaf, halaman tidak ditemukan
      </h1>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-utama px-5 py-2 font-semibold text-white transition-colors hover:bg-aksen"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}
