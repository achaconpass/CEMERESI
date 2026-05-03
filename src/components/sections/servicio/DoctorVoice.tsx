import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { InstagramEmbed } from "./InstagramEmbed";

interface DoctorVoiceProps {
  doctorName: string;
  doctorTitle: string;
  doctorBio: string;
  instagramHandle: string; // sin @ delante
  instagramUrl: string;
  posts: string[]; // array de URLs de Instagram
}

export function DoctorVoice({
  doctorName,
  doctorTitle,
  doctorBio,
  instagramHandle,
  instagramUrl,
  posts,
}: DoctorVoiceProps) {
  return (
    <section className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera con bio de la doctora */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Placeholder foto doctora */}
          <div className="relative aspect-[4/5] bg-nude rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-teal/10" />
            <div className="absolute bottom-5 left-5 text-white/90 text-[10px] tracking-[0.15em] uppercase">
              {doctorName}
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="eyebrow mb-3">La voz médica</p>
            <h2 className="font-heading text-teal text-[26px] lg:text-[36px] font-medium leading-tight tracking-tight mb-2">
              {doctorName}
            </h2>
            <p className="text-nude text-xs lg:text-sm tracking-wide uppercase font-medium mb-5">
              {doctorTitle}
            </p>
            <p className="text-teal/80 text-sm lg:text-base leading-relaxed mb-6 max-w-[540px]">
              {doctorBio}
            </p>
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal hover:text-teal-hover text-sm font-medium transition-colors group"
            >
              <span>Sigue su contenido en Instagram</span>
              <span className="text-nude">@{instagramHandle}</span>
              <ExternalLink
                className="size-3.5 group-hover:translate-x-0.5 transition-transform"
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>

        {/* Grid de posts de Instagram */}
        <div className="text-center mb-8 lg:mb-10">
          <h3 className="font-heading text-teal text-xl lg:text-2xl font-medium leading-tight">
            Lo último que ha publicado
          </h3>
          <p className="text-teal/65 text-sm leading-relaxed mt-2">
            Contenido educativo directo de la doctora
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {posts.map((postUrl, idx) => (
            <div key={idx} className="bg-white rounded-md p-2 border border-nude/20">
              <InstagramEmbed url={postUrl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}