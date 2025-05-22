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
          className="w-full tablet:h-[101px] tablet:px-2 laptop:h-[130px] laptop:py-2 desktop:h-[194px] desktop:px-3 desktop:py-4 rounded-[10px] border-solid border-[5px] bg-transparent tablet:text-xl desktop:text-[36px] leading-[1.28] outline-none border-[var(--green-grey)] placeholder:text-[var(--black)]"
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          {...register(name)}
          className=" w-full tablet:h-[63px] tablet:px-2 tablet:pb-7 laptop:h-[81px] laptop:pb-8 desktop:h-[121px] desktop:px-3 desktop:pb-7 rounded-[10px] border-solid border-[5px] bg-transparent tablet:text-xl desktop:text-[36px] leading-[1.28] outline-none border-[var(--green-grey)] placeholder:text-[var(--black)]"
        />
      )}
      {errors?.[name] && <p className="mt-1 desktop:text-3xl text-red-700">{errors[name].message}</p>}
    </div>
  );
}
