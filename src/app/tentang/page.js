export const metadata = {
  title: "Tentang",
  description:
    "Cerita, hobi, cita-cita, dan jadwal belajar ilham fajariawan.",
};

const jadwalBelajar = [
  { hari: "Senin", waktu: "20.00–21.00", kegiatan: "Membaca modul" },
  { hari: "Selasa", waktu: "19.00–20.00", kegiatan: "Mengerjakan tugas" },
  { hari: "Rabu", waktu: "20.00–22.00", kegiatan: "Merangkum dan take video" },
];

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h1 className="text-3xl font-bold text-utama md:text-4xl">
          Perkenalkan
        </h1>
        <p className="mt-3 text-lg text-gray-700">
          Saya ilham fajariawan, siswa kelas X RPL 1 DARI SMKN 1 Kepanjen yang sedang belajar
          untuk menjadi Junior Web Developer di Kelas Industri UBIG.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-utama">Hobi</h2>
          <p className="mt-2 text-gray-700">
            Saya suka membaca buku dan bermain game
            sebagai hiburan di waktu luang.
          </p>
        </article>
        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-utama">Cita-cita</h2>
          <p className="mt-2 text-gray-700">
            Saya ingin menjadi profesional di bidang game developer, dan mengembangkan
            kemampuan untuk menciptakan teknologi yang bermanfaat.
          </p>
        </article>
      </section>

      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
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
                  <td className="h-12 border-2 border-gray-300 p-3">
                    {jadwal.hari}
                  </td>
                  <td className="h-12 border-2 border-gray-300 p-3">
                    {jadwal.waktu}
                  </td>
                  <td className="h-12 border-2 border-gray-300 p-3">
                    {jadwal.kegiatan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}