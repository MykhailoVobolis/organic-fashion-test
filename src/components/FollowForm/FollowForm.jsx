import { FormProvider, useForm } from "react-hook-form";
import { followSchema } from "../../utils/validationSchemas.js";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import FormButton from "../FormButton/FormButton.jsx";
import InputField from "../InputField/InputField.jsx";

export default function FollowForm({ formPlaceholders, btnText }) {
  const { inputNamePlaceholder, inputEmailPlaceholder, textAreaMessagePlaceholder } = formPlaceholders;

  const methods = useForm({
    resolver: yupResolver(followSchema),
    mode: "all",
  });

  const { reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Your message has been sent!");
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-[257px] mb-[64px] tablet:mb-0 tablet:w-[436px] medium:w-[561px] desktop:w-[617px]">
        <div className="flex flex-col gap-[9px] mb-[41px] tablet:gap-[7px] medium:gap-[9px] desktop:gap-[14px] tablet:mb-[32px] medium:mb-[41px] desktop:mb-[74px]">
          <InputField name="name" ariaLabel="Name" placeholder={inputNamePlaceholder} />
          <InputField name="email" ariaLabel="Email" type="email" placeholder={inputEmailPlaceholder} />
          <InputField name="message" ariaLabel="Message" type="textarea" placeholder={textAreaMessagePlaceholder} />
        </div>
        <FormButton>{btnText}</FormButton>
      </form>
    </FormProvider>
  );
}
