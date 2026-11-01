import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-aksen hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
    >
      <div className="relative aspect-[1212/855] w-full bg-gray-50">
        <Image
          src={proyek.gambar}
          alt={`Tangkapan layar ${proyek.judul}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(proyek.kategori) ? proyek.kategori : [proyek.kategori]).map(
            (kategori) => (
              <span
                key={kategori}
                className="rounded-full bg-latar px-3 py-1 text-xs font-semibold text-utama"
              >
                {kategori}
              </span>
            ),
          )}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-utama">{proyek.judul}</h3>
        <p className="mt-1 text-sm text-gray-600">{proyek.deskripsi}</p>
      </div>
    </Link>
  );
}