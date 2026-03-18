interface WaveDividerProps {
  fillTop?: string;
  fillBottom?: string;
  flip?: boolean;
}

export default function WaveDivider({
  fillTop = "#FFF9F0",
  fillBottom = "#ffffff",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className="w-full overflow-hidden leading-[0]"
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <rect width="1440" height="120" fill={fillBottom} />
        <path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,45 1440,60 L1440,0 L0,0 Z"
          fill={fillTop}
        />
      </svg>
    </div>
  );
}
