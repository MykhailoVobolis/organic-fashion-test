import { useFormContext } from "react-hook-form";

export default function InputField({ name, ariaLabel = "", type = "text", placeholder = "" }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="">
      {type === "textarea" ? (
        <textarea
          id={name}
          placeholder={placeholder}
          aria-label={ariaLabel}
          {...register(name)}
          className="w-full h-[194px] px-3 py-4 rounded-[10px] border-solid border-[5px] bg-transparent text-[36px] leading-[1.28] outline-offset-4 outline-transparent border-[var(--green-grey)] placeholder:text-[var(--black)]"
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          {...register(name)}
          className=" w-full h-[121px] px-3 pb-7 rounded-[10px] border-solid border-[5px] bg-transparent text-[36px] leading-[1.28] outline-offset-4 outline-transparent border-[var(--green-grey)] placeholder:text-[var(--black)]"
        />
      )}
      {errors?.[name] && <p className="mt-1 text-3xl text-red-700">{errors[name].message}</p>}
    </div>
  );
}
