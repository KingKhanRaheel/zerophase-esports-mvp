import { useEffect, useRef, useState } from "react";

const stackedPhrases = [
  { text: "THE GRIND.", accent: false },
  { text: "THE RISE.", accent: false },
  { text: "THE FALL.", accent: false },
  { text: "ZEROPHASE!", accent: true },
] as const;

const pairedLines = [
  [stackedPhrases[0], stackedPhrases[1]],
  [stackedPhrases[2], stackedPhrases[3]],
] as const;

const headlineSizeClass = "text-[clamp(2.35rem,8vw,5.5rem)] leading-[0.96]";
const accentSizeClass = "text-[clamp(2.8rem,9.5vw,6.5rem)] leading-[0.96]";
const pairedLineClass = "flex items-baseline justify-center gap-x-[0.32em] whitespace-nowrap";

const HeroHeadline = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [usePairedLayout, setUsePairedLayout] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const measureElement = measureRef.current;

      if (!containerWidth || !measureElement) return;

      if (window.innerWidth < 768) {
        setUsePairedLayout(false);
        return;
      }

      const rowWidths = Array.from(measureElement.children).map(
        (row) => (row as HTMLDivElement).scrollWidth,
      );
      const widestRow = Math.max(...rowWidths, 0);

      setUsePairedLayout(widestRow <= containerWidth);
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(updateLayout);

    if (containerRef.current) resizeObserver.observe(containerRef.current);
    if (measureRef.current) resizeObserver.observe(measureRef.current);

    window.addEventListener("resize", updateLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-full overflow-hidden opacity-0"
      >
        {pairedLines.map((line, lineIndex) => (
          <div
            key={`measure-${lineIndex}`}
            className={`font-heading font-bold tracking-tight ${headlineSizeClass} ${pairedLineClass}`}
          >
            {line.map((phrase) => (
              <span
                key={phrase.text}
                className={phrase.accent ? "gradient-text text-glow-cyan" : "text-foreground"}
              >
                {phrase.text}
              </span>
            ))}
          </div>
        ))}
      </div>

      <h1 className={`mb-4 sm:mb-6 text-center font-heading font-bold tracking-tight ${headlineSizeClass}`}>
        {usePairedLayout ? (
          <span className="flex flex-col items-center">
            {pairedLines.map((line, lineIndex) => (
              <span key={lineIndex} className={pairedLineClass}>
                {line.map((phrase) => (
                  <span
                    key={phrase.text}
                    className={phrase.accent ? "gradient-text text-glow-cyan" : "text-foreground"}
                  >
                    {phrase.text}
                  </span>
                ))}
              </span>
            ))}
          </span>
        ) : (
          <span className="flex flex-col items-center">
            {stackedPhrases.map((phrase) => (
              <span
                key={phrase.text}
                className={phrase.accent ? "gradient-text text-glow-cyan" : "text-foreground"}
              >
                {phrase.text}
              </span>
            ))}
          </span>
        )}
      </h1>
    </div>
  );
};

export default HeroHeadline;
