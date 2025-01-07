import * as React from "react"
import { SVGProps } from "react"

interface PlusIconProps {
  size?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}

const sizeVariants = {
  sm: "16", // small size (16px)
  md: "24", // medium size (24px)
  lg: "32", // large size (32px)
}

const HomeIcon = ({ size = "md", onClick }: PlusIconProps) => {
  const iconSize = sizeVariants[size] || sizeVariants.md; // Default to 'md' if no size provided

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path d="M12 2a1 1 0 0 0-.71.297l-10.087 8.8A.5.5 0 0 0 1 11.5a.5.5 0 0 0 .5.5H4v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8h2.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.203-.402l-10.08-8.795a1 1 0 0 0-.006-.006A1 1 0 0 0 12 2z" />
    </svg>
  )
}

export default HomeIcon;
