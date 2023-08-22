import {
  Image,
  Box,
  Label,
  Input,
  Flex,
  Textarea,
  Container,
  Button,
  Heading,
} from 'theme-ui';

import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

export default function Form() {
  const [data, setData] = useState();
  const { register, handleSubmit } = useForm();
  const recaptchaRef = React.useRef(null);

  const onSubmit = (data) => {
    setData(data);
    recaptchaRef.current.execute();
  }

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/sendgrid", {
        method: "POST",
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
      });
      if (response.ok) {
        alert("Email sent");
      } else {
        const error = await response.json();
        throw new Error(error.message)
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      recaptchaRef.current.reset();
    }
  };

  return (
    <section>
      <Container sx={styles.formContainer}>
        <Heading as="h1" sx={styles.title}>¡Hablá con Estéreo!</Heading>
        <Flex>
          <Box sx={styles.box}>
            <form sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onReCAPTCHAChange}
              />
              <Label htmlFor="name">Tu nombre:</Label>
              <Input sx={styles.input} {...register("fullname")} />
              <Label htmlFor="email">Tu correo:</Label>
              <Input sx={styles.input} {...register("email")} />
              <Label htmlFor="subject">Asunto:</Label>
              <Input sx={styles.input} {...register("subject")} />
              <Label htmlFor="message">Mensaje:</Label>
              <Textarea sx={styles.input} {...register("message")}></Textarea>
              <Box sx={styles.buttonContainer}>
                <Button sx={styles.button} type="submit">Enviar</Button>
              </Box>
            </form>
          </Box>
        </Flex>
      </Container>
    </section >
  );
};

const styles = {
  formContainer: {
    pt: "120px",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: '3em',
    mb: '2rem'
  },
  box: {
    mx: 1,
    width: [
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
    ],
  },
  input: {
    height: 'revert',
    border: 'solid 1px black',
    resize: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'end'
  },
  button: {
    mt: 4,
  },
};