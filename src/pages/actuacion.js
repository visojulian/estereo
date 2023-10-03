import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Box, Image, Text, Heading, Container } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import actuacion from 'assets/actuacion.png'
import logo from 'assets/logosimple.svg'
import { Link } from 'components/link';

export default function Festival() {

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <Container sx={{ display: 'flex', justifyContent: 'center', mb: '2em' }}>
            <Image src={logo} sx={{ mt: '6em', maxHeight: '5em', }} />
          </Container>
          <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Heading as="h2" sx={{ fontSize: '1.2em', textTransform: 'uppercase', mb: 2 }}>
              Taller
            </Heading>
            <Heading as="h1" sx={{ fontSize: '3em', fontFamily: 'Kanit', mb: 5 }}>
              Actuar frente al micrófono
            </Heading>
            <Box>
              <Text as="p" variant="heroSecondary" sx={styles.text}>
                Un encuentro donde abordaremos a través de técnicas teatrales la actuación
                frente al micrófono.
                <br></br>
                Dictan Marisú Papaleo y Malena Serur
                de Parole - Espacio Radioescénico
              </Text>
            </Box>
          </Container>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, flexWrap: 'wrap' }}>
              <Box sx={{ mx: 4, maxWidth: ['100%', '100%', '100%', '40%', '40%', '40%'] }}>
                <Image src={actuacion}></Image>
              </Box>
              <Box sx={{ maxWidth: ['100%', '100%', '100%', '60%', '60%', '60%'] }}>
                <Text as="p" variant="heroSecondary" sx={styles.text2}>
                  Contenidos:
                  <ul>
                    <li>
                      Preparación corporal y vocal previa al trabajo en el mic.
                    </li>
                    <li>
                      ¿Cómo atrapar al oyente con mi interpretación?
                    </li>
                    <li>
                      ¿Qué es el Lenguaje Sonoro? Y cómo utilizarlo a favor para la actuación.
                    </li>
                    <li>
                      El fantasma del “suena leído” y cómo crear verosimilitud.
                    </li>
                  </ul>
                </Text>
                <Text as="p" variant="heroSecondary" sx={styles.text2}>
                  Dirigido a actores, narradores, podcasters y locutores.
                </Text>
              </Box>
            </Box>
          </Container>
          <Container sx={styles.buttons}>
            <Box sx={{ backgroundColor: 'fourth', maxWidth: ['100%', '80%'], mx: 'auto', mb: 2, fontSize: '1.5em', py: 1, textAlign: 'center', position: 'relative', fontFamily: 'Chakra Petch' }}>
              <Link path={'https://forms.gle/5fd98ohWoFVMq6bWA'} target='_blank'>
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
                <b>Día y hora:</b> Domingo 8 de octubre - 13:00hs
              </Text>
              <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0, textAlign: 'center' }}>
                <b>Lugar:</b> Galpón 11 <br /> <Link path={'https://maps.app.goo.gl/LxZvPb4JQppgwHVq5'} target='_blank'>Estévez Boero 980 - Rosario</Link>
              </Text>

            </Box>
          </Container>


          <Container sx={{ maxWidth: ['100%', '100%', '100%', '100%', '100%', '70%'] }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: 8, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', minWidth: '50%' }}>
                <Heading as="h2" sx={{ fontSize: '2em', }}>Parole Radio</Heading>
                <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0, }}>
                  <Link path={'https://www.instagram.com/parole_radio/'} target='_blank'>instagram.com/parole_radio</Link>
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