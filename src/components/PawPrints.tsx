"use client";

export default function PawPrints() {
  const paws = [
    { top: "10%", left: "5%", size: 40, rotate: 25, delay: 0, color: "#FF8C42" },
    { top: "20%", right: "8%", size: 35, rotate: -15, delay: 1, color: "#2ABFBF" },
    { top: "45%", left: "3%", size: 45, rotate: 40, delay: 2, color: "#FF6B8A" },
    { top: "60%", right: "5%", size: 30, rotate: -30, delay: 3, color: "#5B8DEF" },
    { top: "80%", left: "10%", size: 38, rotate: 10, delay: 4, color: "#FF8C42" },
    { top: "75%", right: "12%", size: 32, rotate: -20, delay: 1.5, color: "#2ABFBF" },
    { top: "35%", right: "3%", size: 28, rotate: 35, delay: 2.5, color: "#FF6B8A" },
    { top: "90%", left: "15%", size: 36, rotate: -10, delay: 3.5, color: "#5B8DEF" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {paws.map((paw, i) => (
        <svg
          key={i}
          className="absolute animate-float"
          style={{
            top: paw.top,
            left: "left" in paw ? paw.left : undefined,
            right: "right" in paw ? paw.right : undefined,
            width: paw.size,
            height: paw.size,
            transform: `rotate(${paw.rotate}deg)`,
            opacity: 0.1,
            animationDelay: `${paw.delay}s`,
          }}
          viewBox="0 0 100 100"
          fill={paw.color}
        >
          <ellipse cx="50" cy="65" rx="22" ry="28" />
          <ellipse cx="28" cy="35" rx="12" ry="14" />
          <ellipse cx="72" cy="35" rx="12" ry="14" />
          <ellipse cx="15" cy="55" rx="10" ry="12" />
          <ellipse cx="85" cy="55" rx="10" ry="12" />
        </svg>
      ))}
    </div>
  );
}
