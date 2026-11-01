import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { proyek } from "@/data/proyek";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];
const proyekTerbaru = proyek.slice(-3);
const jadwalBelajar = [
  { hari: "Senin", waktu: "20.00–21.00", kegiatan: "Membaca modul" },
  { hari: "Selasa", waktu: "19.00–20.00", kegiatan: "Mengerjakan tugas" },
  { hari: "Rabu", waktu: "20.00–22.00", kegiatan: "Merangkum dan take video" },
];
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Ilham fajariawan"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
        ctaHref="/tentang"
        ctaLabel="Tentang Saya"
      />
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama}
              level={skill.level} />
          ))}
        </div>
        <Link
          href="/keahlian"
          className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white hover:bg-aksen"
        >
          Lihat detail keahlian saya
        </Link>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white"
        >
          Lihat semua proyek
        </Link>
      </section>
      <section className="mt-10 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">Jadwal Belajar</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className="border-2 border-utama bg-utama p-3 text-white">
                  Hari
                </th>
                <th scope="col" className="border-2 border-utama bg-utama p-3 text-white">
                  Waktu
                </th>
                <th scope="col" className="border-2 border-utama bg-utama p-3 text-white">
                  Kegiatan
                </th>
              </tr>
            </thead>
            <tbody>
              {jadwalBelajar.map((jadwal) => (
                <tr key={jadwal.hari}>
                  <td className="h-12 border-2 border-gray-300 p-3">{jadwal.hari}</td>
                  <td className="h-12 border-2 border-gray-300 p-3">{jadwal.waktu}</td>
                  <td className="h-12 border-2 border-gray-300 p-3">{jadwal.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}