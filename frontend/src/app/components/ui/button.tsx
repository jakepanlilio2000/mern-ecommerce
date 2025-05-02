import React from 'react'

interface ButtonProps{
  mode: "normal" | "inverted";
  isRounded: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ mode, isRounded, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${mode === "inverted" ? "bg-primary text-black" : "bg-secondary text-white border-white"} ${
        isRounded ? "rounded-full" : "rounded"
      } px-4 py-2`}
    >
      {children}
    </button>
  );
}

export default Button