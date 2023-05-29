import {
  Label,
  Input,
  Textarea,
  Container,
  Button,
} from 'theme-ui';

import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: data.email,
        fullname: data.fullname,
        subject: data.subject,
        message: data.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <section>
      <Container sx={{ pt: "120px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="name">Tu nombre:</Label>
          <Input {...register("fullname")} />
          <Label htmlFor="email">Tu correo:</Label>
          <Input {...register("email")} />
          <Label htmlFor="subject">Asunto:</Label>
          <Input {...register("subject")} />
          <Label htmlFor="message">Mensaje:</Label>
          <Textarea {...register("message")}></Textarea>
          <Button type="submit">Enviar</Button>
        </form>
      </Container>
    </section >
  );
};