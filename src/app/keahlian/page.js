import SkillCard from "@/components/SkillCard";

export const metadata = {
  title: "Keahlian",
  description: "Daftar keahlian Galih Tegar As'abiman.",
};

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Keahlian() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold text-utama md:text-4xl">
        Keahlian Saya
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Berikut keahlian yang sedang saya pelajari dan kembangkan.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
        ))}
      </div>
    </main>
  );
}