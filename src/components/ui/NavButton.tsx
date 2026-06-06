"use client";

interface NavButtonProps {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}

export default function NavButton({ direction, disabled, onClick }: Readonly<NavButtonProps>) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 disabled:opacity-20 disabled:cursor-default"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        color: "#555",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
          e.currentTarget.style.color = "#818cf8";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.color = "#555";
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
        />
      </svg>
    </button>
  );
}
