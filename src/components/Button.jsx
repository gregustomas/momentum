import React from "react";

const base =
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm";

const variants = {
  indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
  dark: "bg-slate-900 hover:bg-slate-800 text-white",
};

const sizes = {
  default: "h-9 px-4 py-2 text-sm",
  small: "h-8 px-3 text-xs",
};

function Button({
  children,
  icon,
  variant = "dark",
  size = "default",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
