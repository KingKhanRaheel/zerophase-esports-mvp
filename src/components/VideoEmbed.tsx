import { useMemo } from "react";

interface VideoEmbedProps {
  url: string;
}

function parseVideoUrl(url: string): { type: "youtube" | "instagram" | "unknown"; embedUrl: string } {
  // YouTube: various URL formats
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}` };
  }

  // Instagram: reel or post
  const igMatch = url.match(
    /instagram\.com\/(?:reel|p)\/([a-zA-Z0-9_-]+)/
  );
  if (igMatch) {
    return { type: "instagram", embedUrl: `https://www.instagram.com/p/${igMatch[1]}/embed` };
  }

  return { type: "unknown", embedUrl: "" };
}

const VideoEmbed = ({ url }: VideoEmbedProps) => {
  const parsed = useMemo(() => parseVideoUrl(url.trim()), [url]);

  if (parsed.type === "unknown") {
    return (
      <p className="text-sm text-muted-foreground italic">
        Unsupported video link. Please use a YouTube or Instagram URL.
      </p>
    );
  }

  if (parsed.type === "instagram") {
    return (
      <iframe
        src={parsed.embedUrl}
        className="w-full max-w-lg mx-auto rounded-lg border border-border"
        style={{ height: 480 }}
        allowFullScreen
        title="Instagram Highlight"
      />
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
