import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "bg-primary text-white rounded-[5px] px-5 py-2.5 max-xl:text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
