"use client";

import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string; // p.ej. https://www.instagram.com/reel/ABCD1234/
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar el script de Instagram una sola vez
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      // Si el script ya existe, reprocesar embeds
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div ref={containerRef} className="w-full">
      <blockquote
        className="instagram-media w-full"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "4px",
          boxShadow: "none",
          margin: "0",
          maxWidth: "100%",
          minWidth: "260px",
          padding: 0,
          width: "100%",
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          Cargando publicación de Instagram…
        </a>
      </blockquote>
    </div>
  );
}