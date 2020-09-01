import React from "react";

interface SvgProps {
  size: number;
  color: string;
}

export function ChevronLeft({ size, color }: SvgProps) {
  return (
    <svg width={size} height={size * 1.63} viewBox="0 0 11 18" fill="none">
      <path
        d="M9.603 1l-8 8 8 8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRight({ size, color }: SvgProps) {
  return (
    <svg width={size} height={size * 1.63} viewBox="0 0 11 18" fill="none">
      <path
        d="M1.397 17l8-8-8-8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
