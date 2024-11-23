import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import ContentBox0 from "../../reusable/components/componentsLvl2/ContentBox0";
import H1MainTitle from "../../reusable/components/componentsLv0/H1MainTitle";
import Form from "../../reusable/components/componentslvl3/Form";
import Row from "../../reusable/components/componentsLv0/Row";
import Label from "../../reusable/components/componentsLv0/Label";
import FormInput from "../../reusable/components/componentsLvl1/FormInput";
import ToastError from "../../reusable/components/componentsLvl2/ToastError";
import Select from "../../reusable/components/componentsLv0/Select";
import Date from "../../reusable/components/componentsLv0/Date";

function onError() {
  return toast.custom(<ToastError>Missing Field(s).</ToastError>);
}
export default function RegistryUserForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  async function onSubmit(data) {
    console.log(data);
  }

  return (
    <ContentBox0>
      <H1MainTitle>Registry User Form</H1MainTitle>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Row>
          <Label htmlFor="firstName">
            first name
            <FormInput
              id="firstName"
              reg={register}
              isRequired={{ required: `firstName is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="middleName">
            middle name
            <FormInput
              id="middleName"
              reg={register}
              isRequired={{ required: `middleName is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="lastName">
            last name
            <FormInput
              id="lastName"
              reg={register}
              isRequired={{ required: `lastName is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="position">
            position
            <Select
              id="position"
              reg={register}
              isRequired={{ required: `Position is required.` }}
              errors={errors}
              options={["sales", "cashier", "optometrist"]}
            />
          </Label>
          <Label htmlFor="status">
            status
            <Select
              id="status"
              reg={register}
              isRequired={{ required: `status is required.` }}
              errors={errors}
              options={["single", "married"]}
            />
          </Label>
          <Label htmlFor="birthdate">
            birthdate
            <Date
              id="birthdate"
              reg={register}
              isRequired={{ required: `birthdate is required.` }}
              errors={errors}
            />
          </Label>
        </Row>
      </Form>
    </ContentBox0>
  );
}