import {
  Label,
  Input,
  Textarea,
  Container,
  Button,
} from 'theme-ui';

import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const recaptchaRef = React.createRef();

  const onSubmit = (data) => {
    recaptchaRef.current.execute();
  }

  const sendMail = async (data) => {
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: data.email,
        fullname: data.fullname,
        subject: data.subject,
        message: data.message,
        captcha: captchaCode,
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

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    sendMail(data);
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    recaptchaRef.current.reset();
  }

  return (
    <section>
      <Container sx={{ pt: "120px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />
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