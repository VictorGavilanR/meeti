import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function FormSubmit(props: Props) {
  const { className } = props;

  return (
    <input
      {...props}
      className={clsx(
        "bg-pink-600 w-full p-2 mt-5 uppercase font-black text-white cursor-pointer",
        className,
      )}
    ></input>
  );
}
