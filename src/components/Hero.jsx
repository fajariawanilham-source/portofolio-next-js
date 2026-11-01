import Image from "next/image";
import Link from "next/link";

export default function Hero({ nama, tagline, ctaHref, ctaLabel }) {
  return (
    <section className="flex flex-col items-center gap-6 text-center 
md:flex-row md:text-left">
      <Image
        src="/foto-profil.jpg"
        alt={`Foto profil ${nama}`}
        width={180}
        height={180}
        loading="eager"
        className="rounded-full border-4 border-aksen"
      />
      <div>
        <h1 className="text-3xl font-bold text-utama 
md:text-5xl">Halo, saya {nama}!</h1>
        <p className="mt-3 text-lg text-gray-700">{tagline}</p>
        {ctaHref && ctaLabel && (
          <Link
            href={ctaHref}
            className="mt-5 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white transition-colors hover:bg-aksen"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}