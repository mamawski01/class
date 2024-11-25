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
import File from "../../reusable/components/componentsLv0/File";

function onError() {
  return toast.custom(<ToastError>Missing Field(s).</ToastError>);
}
export default function RegistryUserForm() {
  const { register, handleSubmit, formState, setValue, reset } = useForm();
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
              hookValue={setValue}
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
              hookValue={setValue}
            />
          </Label>
          <Label htmlFor="birthdate">
            birthdate
            <Date
              id="birthdate"
              reg={register}
              isRequired={{ required: `birthdate is required.` }}
              errors={errors}
              hookValue={setValue}
            />
          </Label>
          <Label htmlFor="email">
            email
            <FormInput
              id="email"
              reg={register}
              type="email"
              isRequired={{ required: `email is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="employmentDate">
            employment date
            <Date
              id="employmentDate"
              reg={register}
              isRequired={{ required: `employmentDate is required.` }}
              errors={errors}
              hookValue={setValue}
            />
          </Label>
          <Label htmlFor="wage">
            wage
            <FormInput
              id="wage"
              reg={register}
              isRequired={{ required: `wage is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="street">
            street
            <FormInput id="street" reg={register} errors={errors} />
          </Label>
          <Label htmlFor="purok">
            purok
            <FormInput id="purok" reg={register} errors={errors} />
          </Label>
          <Label htmlFor="brgy">
            brgy
            <FormInput
              id="brgy"
              reg={register}
              isRequired={{ required: `brgy is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="city">
            city
            <FormInput
              id="city"
              reg={register}
              isRequired={{ required: `city is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="province">
            province
            <FormInput
              id="province"
              reg={register}
              isRequired={{ required: `province is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="country">
            country
            <FormInput
              id="country"
              reg={register}
              isRequired={{ required: `country is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="contactNumber1">
            contact number 1
            <FormInput
              id="contactNumber1"
              reg={register}
              isRequired={{ required: `contactNumber1 is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="contactNumber2">
            contact number 2
            <FormInput id="contactNumber2" reg={register} errors={errors} />
          </Label>{" "}
          <Label htmlFor="contactNumber3">
            contact number 3
            <FormInput id="contactNumber3" reg={register} errors={errors} />
          </Label>
          <Label htmlFor="password">
            password
            <FormInput
              id="password"
              reg={register}
              type="password"
              isRequired={{ required: `password is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="repeatPassword">
            repeat password
            <FormInput
              id="repeatPassword"
              reg={register}
              type="password"
              isRequired={{ required: `repeatPassword is required` }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="SSS">
            SSS
            <FormInput id="SSS" reg={register} type="SSS" errors={errors} />
          </Label>
          <Label htmlFor="PagIbig">
            Pag-Ibig
            <FormInput id="PagIbig" reg={register} errors={errors} />
          </Label>
          <Label htmlFor="PhilHealth">
            PhilHealth
            <FormInput id="PhilHealth" reg={register} errors={errors} />
          </Label>
          <Label htmlFor="TIN">
            TIN
            <FormInput id="TIN" reg={register} errors={errors} />
          </Label>
          <Label htmlFor="contactPersonNameInEmergency">
            contact person name
            <FormInput
              id="contactPersonNameInEmergency"
              reg={register}
              isRequired={{
                required: `contact person name is required`,
              }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="contactPersonNumberInEmergency">
            contact person number
            <FormInput
              id="contactPersonNumberInEmergency"
              reg={register}
              isRequired={{
                required: `contact person number is required`,
              }}
              errors={errors}
            />
          </Label>
          <Label htmlFor="image">
            image
            <File
              id="image"
              reg={register}
              isRequired={{
                required: `image is required`,
              }}
              errors={errors}
              specifyFile=".png,.jpg,.jpeg"
            />
          </Label>
        </Row>
        <button type="button" onClick={() => reset(resetDev())}>
          Dev button
        </button>
      </Form>
    </ContentBox0>
  );
}

function resetDev() {
  return {
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
    position: "Software Engineer",
    status: "Active",
    birthdate: "01-01-1993",
    email: "john.doe@example.com",
    employmentDate: "2020-01-01",
    wage: "50000",
    street: "123 Main St",
    purok: "Purok 1",
    brgy: "Barangay 1",
    city: "Manila",
    province: "Metro Manila",
    country: "Philippines",
    contactNumber1: "09123456789",
    contactNumber2: "09234567890",
    contactNumber3: "",
    password: "password123",
    repeatPassword: "password123",
    SSS: "1234567890",
    PagIbig: "0987654321",
    PhilHealth: "1111111111",
    TIN: "1234567890",
    contactPersonNameInEmergency: "Jane Doe",
    contactPersonNumberInEmergency: "09345678901",
    image: "https://example.com/image.jpg",
  };
}
