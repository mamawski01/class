import toast, { ErrorIcon } from "react-hot-toast";
import { useForm } from "react-hook-form";

import ContentBox0 from "../../reusable/components/componentsLvl2/ContentBox0";
import H1MainTitle from "../../reusable/components/componentsLv0/H1MainTitle";
import Form from "../../reusable/components/componentslvl3/Form";
import Toast from "../../reusable/components/componentsLvl1/Toast";
import Icon from "../../reusable/components/componentsLvl1/Icon";
import Btn from "../../reusable/components/componentsLvl1/Btn";
import Row from "../../reusable/components/componentsLv0/Row";
import Label from "../../reusable/components/componentsLv0/Label";
import Input from "../../reusable/components/componentsLv0/Input";

function onError() {
  return toast.custom(
    <Toast>
      <Icon>
        <ErrorIcon></ErrorIcon>
        <p>Missing fields required.</p>
      </Icon>
    </Toast>,
  );
}
export default function RegistryUserForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  async function onSubmit(data) {
    console.log(data);
  }

  return (
    <ContentBox0>
      <H1MainTitle>Registry User Form</H1MainTitle>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Row>
          <Label htmlFor="name">
            Name
            <Input id="name" reg={register} />
          </Label>
          <Label htmlFor="age">
            Age
            <Input id="age" reg={register} />
          </Label>
          <Label htmlFor="car">
            car
            <Input id="car" reg={register} />
          </Label>
          <Label htmlFor="dog">
            dog
            <Input id="dog" reg={register} />
          </Label>
        </Row>

        <Btn type="submit" ghost={true}></Btn>
      </Form>
    </ContentBox0>
  );
}
