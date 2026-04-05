import { useMemo } from "react";
import { Instagram, Play } from "lucide-react";

interface VideoEmbedProps {
  url: string;
}

function parseVideoUrl(url: string): { type: "youtube" | "instagram" | "unknown"; embedUrl: string; originalUrl: string } {
  const trimmed = url.trim();

  const ytMatch = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}`, originalUrl: trimmed };
  }

  const igMatch = trimmed.match(/instagram\.com\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
  if (igMatch) {
    return { type: "instagram", embedUrl: trimmed, originalUrl: trimmed };
  }

  return { type: "unknown", embedUrl: "", originalUrl: trimmed };
}

const VideoEmbed = ({ url }: VideoEmbedProps) => {
  const parsed = useMemo(() => parseVideoUrl(url), [url]);

  if (parsed.type === "unknown") {
    return (
      <p className="text-sm text-muted-foreground italic">
        Unsupported video link. Please use a YouTube or Instagram URL.
      </p>
    );
  }

  if (parsed.type === "instagram") {
    return (
      <a
        href={parsed.originalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/50 hover:bg-muted transition-colors"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
          <Instagram className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            Watch on Instagram
          </p>
          <p className="text-xs text-muted-foreground truncate">{parsed.originalUrl}</p>
        </div>
        <Play className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
      </a>
    );
  }

  // YouTube
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={parsed.embedUrl}
        className="absolute inset-0 w-full h-full rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Highlight"
      />
    </div>
  );
};

export default VideoEmbed;
