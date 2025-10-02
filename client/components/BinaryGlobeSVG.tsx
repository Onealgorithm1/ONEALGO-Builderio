import React from "react";

interface BinaryGlobeSVGProps {
  size?: number;
  className?: string;
}

export default function BinaryGlobeSVG({
  size = 32,
  className = "",
}: BinaryGlobeSVGProps) {
  const src =
    "https://cdn.builder.io/api/v1/image/assets%2Fb90cab62d3d34e0087abec352888a96d%2F557317a35fa3445dbb745567290f1bd4";
  return (
    <img
      src={src}
      alt="OneAlgorithm Logo"
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{
        objectFit: "contain",
        width: `${size}px`,
        filter:
          "drop-shadow(rgba(0, 0, 0, 0.07) 0px 4px 3px) drop-shadow(rgba(0, 0, 0, 0.06) 0px 2px 2px)",
        color: "rgba(255, 255, 255, 1)",
        border: "1px solid rgba(255, 255, 255, 1)",
      }}
      loading="lazy"
      decoding="async"
    />
  );
}
