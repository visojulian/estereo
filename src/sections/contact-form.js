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
import Nosotros from 'assets/team/nosotros.png'

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
      <Container sx={{ pt: "120px" }}>
        <Heading as="h2">¡Hablá con Estéreo!</Heading>
        <Flex>
          <Box sx={styles.imgBox}>
            <Image src={Nosotros} sx={styles.img} />
          </Box>
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
  imgBox: {
    mx: 1,
    width: '50%',
    my: 'auto',
    display: [
      'none',
      'none',
      'none',
      'none',
      'block',
      'block',
      'block',
    ],
  },
  box: {
    mx: 1,
    width: [
      '100%',
      '100%',
      '100%',
      '100%',
      '50%',
      '50%',
      '50%',
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
  }
};