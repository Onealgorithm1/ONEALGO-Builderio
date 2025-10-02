import React from "react";

interface BinaryGlobeSVGProps {
  size?: number;
  className?: string;
}

export default function BinaryGlobeSVG({
  size = 32,
  className = "",
}: BinaryGlobeSVGProps) {
  const src = "/logo.webp";
  return (
    <img
      src={src}
      alt="OneAlgorithm Logo"
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{ objectFit: "contain" }}
      loading="lazy"
      decoding="async"
    />
  );
}
