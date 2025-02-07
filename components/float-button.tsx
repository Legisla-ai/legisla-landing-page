// src/components/FloatButton.tsx
import { FC } from "react";

interface FloatButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const FloatButton: FC<FloatButtonProps> = ({
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`hidden md:flex fixed bottom-5 right-5 w-12 h-12 rounded-full bg-[#0ca83b] text-white shadow-md transition-all duration-200 cursor-pointer z-[9999] hover:shadow-lg items-center justify-center ${className}`}
    >
      {icon}
    </button>
  );
};
