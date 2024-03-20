import classNames from "classnames";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-md border border-indigo-500 text-CustomWhite bg-transparent min-w-52 p-4 text-pre-title-link color-transition hover:bg-indigo-500 hover:bg-opacity-20 hover:border-CustomWhite",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;