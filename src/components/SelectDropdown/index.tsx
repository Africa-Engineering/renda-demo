import { FC, ChangeEventHandler, ChangeEvent } from "react";
import cn from "classnames";

type Props = {
  label?: string;
  options: string[];
  name?: string;
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  error?: boolean;
  caption?: string;
  size?: "sm" | "md" | "lg";
  defaultValue?: string;
  disabled?: boolean;
};
const Select: FC<Props> = ({
  label,
  options,
  handleChange,
  placeholder,
  value,
  error = false,
  caption,
  size = "md",
  defaultValue,
  disabled,
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor="" className="text-sm mb-1 font-bold">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          disabled={disabled}
          defaultValue={defaultValue}
          className={cn(
            "cursor-pointer px-3 py-2 text-black border border-gray-300 rounded  w-full  outline-gray-300  appearance-none ",
            {
              input: !value?.trim(),
              "py-2": size === "sm",
              "border-red outline-[border-red]": error,
            }
          )}
          onChange={handleChange}
          value={value}
        >
          <option selected disabled>
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img
          src="/assets/images/chevron-down.svg"
          className={cn("h-[20px] absolute right-5 top-4 cursor-pointer", {
            "top-2": size === "sm",
          })}
        />
      </div>
      {error && (
        <p
          className={cn("mt-1 text-end text-[14px]", {
            "text-red-500": error,
          })}
        >
          {caption}
        </p>
      )}
    </div>
  );
};

export { Select };
