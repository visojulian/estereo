import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Box, Image, Text, Heading, Container } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import amnistia from 'assets/sponsor/amnistia.png'
import logo from 'assets/logosimple.svg'
import { Link } from 'components/link';

export default function Amnistia() {

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <Container sx={{ display: 'flex', justifyContent: 'center', }}>
            <Image src={amnistia} sx={{ mt: '6em', maxHeight: '15em', }} />
          </Container>
          <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Heading as="h2" sx={{ fontSize: '1.2em', textTransform: 'uppercase', mb: 2 }}>
              Taller
            </Heading>
            <Heading as="h1" sx={{ fontSize: '3em', fontFamily: 'Kanit', mb: 5 }}>
              Amnistía Internacional - Escribí por los derechos
            </Heading>
            <Box>
              <Text as="p" variant="heroSecondary" sx={styles.text}>
                <b>Escribe por los Derechos</b> es una campaña global que Amnistía Internacional realiza todos los años durante el segundo semestre. En ella se invita a enviar cartas de apoyo a personas cuyos derechos humanos están siendo vulnerados en distintas partes del mundo y cartas para exigirles a las autoridades responsables de velar por esos derechos que actúen de manera acorde.
                <br />Es una excelente propuesta para propiciar debates sobre derechos humanos teniendo en cuenta la situación a nivel global, a partir de casos de actualidad.
              </Text>
            </Box>
          </Container>
          <Container sx={styles.buttons}>
            <Box sx={{ backgroundColor: 'fourth', maxWidth: ['100%', '80%'], mx: 'auto', mb: 2, fontSize: '1.5em', py: 1, textAlign: 'center', position: 'relative', fontFamily: 'Chakra Petch' }}>
              <Link path={'https://forms.gle/Ljz38TdTNC3YHxaY9'} target='_blank'>
                <b>INSCRIBITE HACIENDO CLICK AQUÍ</b>
              </Link>
            </Box>
          </Container>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 5, flexDirection: 'column' }}>

              <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0 }}>
                <b>Dictado presencial</b>
              </Text>
              <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0 }}>
                <b>Actividad gratuita</b>
              </Text>
              <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0 }}>
                <b>Día y hora:</b> Sábado 7 de octubre - 10:00hs
              </Text>
              <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0, textAlign: 'center' }}>
                <b>Lugar:</b> Sede UNR - Primer piso - Aula 1 <br /> <Link path={'https://maps.app.goo.gl/iGwRjPosF114PdAi8'} target='_blank'>Sarmiento 784 - Rosario</Link>
              </Text>

            </Box>
          </Container>


          <Container sx={{ maxWidth: ['100%', '100%', '100%', '100%', '100%', '70%'] }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: 8, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', minWidth: '50%' }}>
                <Heading as="h2" sx={{ fontSize: '2em', }}>Amnistía Internacional</Heading>
                <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0, }}>
                  <Link path={'https://amnistia.org.ar/'} target='_blank'>amnistia.org.ar</Link>
                </Text>
              </Box>
            </Box>
          </Container>

        </Layout>
      </StickyProvider>
    </ThemeProvider >
  );
}

const styles = {
  text: {
    textAlign: 'center',
    fontSize: ['16px !important', '22px !important']
  },
  text2: {
    textAlign: 'justify',
    fontSize: ['16px !important', '22px !important'],
    px: '0 !important'
  },
  buttons: {
    color: 'white',
    textAlign: 'center',
    ' a': {
      color: 'white !important',
      textDecoration: 'none'
    }
  }
}