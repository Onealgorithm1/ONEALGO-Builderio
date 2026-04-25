import React from "react";
import { cn } from "@/lib/utils";
import styles from "./BinaryGlobeSVG.module.css";

interface BinaryGlobeSVGProps {
  size?: number;
  className?: string;
}

export default function BinaryGlobeSVG({
  size = 32,
  className = "",
}: BinaryGlobeSVGProps) {
  // Binary digits with their positions and colors
  const binaryData = [
    // Blue (primary color #005eaa)
    { text: "0", x: 20, y: 15, color: "#005eaa", fontSize: 8 },
    { text: "1", x: 35, y: 10, color: "#005eaa", fontSize: 8 },
    { text: "0", x: 50, y: 20, color: "#005eaa", fontSize: 8 },
    { text: "1", x: 65, y: 15, color: "#005eaa", fontSize: 8 },
    { text: "0", x: 75, y: 25, color: "#005eaa", fontSize: 8 },
    { text: "1", x: 20, y: 35, color: "#005eaa", fontSize: 8 },
    { text: "0", x: 70, y: 40, color: "#005eaa", fontSize: 8 },
    { text: "1", x: 40, y: 65, color: "#005eaa", fontSize: 8 },
    { text: "0", x: 15, y: 70, color: "#005eaa", fontSize: 8 },
    { text: "1", x: 60, y: 75, color: "#005eaa", fontSize: 8 },
    
    // Orange (#ffa634)
    { text: "0", x: 40, y: 25, color: "#ffa634", fontSize: 8 },
    { text: "1", x: 55, y: 35, color: "#ffa634", fontSize: 8 },
    { text: "0", x: 30, y: 50, color: "#ffa634", fontSize: 8 },
    { text: "1", x: 75, y: 50, color: "#ffa634", fontSize: 8 },
    { text: "0", x: 45, y: 70, color: "#ffa634", fontSize: 8 },
    
    // Green (#10b981)
    { text: "0", x: 50, y: 45, color: "#10b981", fontSize: 9 },
    { text: "1", x: 25, y: 60, color: "#10b981", fontSize: 9 },
    { text: "0", x: 65, y: 60, color: "#10b981", fontSize: 9 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn("inline-block self-center drop-shadow-md", className)}
      aria-label="OneAlgorithm Logo - Binary Globe"
    >
      {/* Outer circle border */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="#005eaa"
        strokeWidth="3"
      />

      {/* Inner circle (globe background) */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="white"
        opacity="0.95"
      />

      {/* Binary digits */}
      {binaryData.map((item, idx) => (
        <text
          key={idx}
          x={item.x}
          y={item.y}
          fontSize={item.fontSize}
          fontWeight="600"
          fill={item.color}
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {item.text}
        </text>
      ))}
    </svg>
  );
}
