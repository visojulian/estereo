import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Box, Image, Text, Heading, Container } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import LasRarasBanner from 'sections/lasraras-banner';
import lasraras from 'assets/lasraras.png'
import logoraras from 'assets/logoraras.png'
import parlante from 'assets/parlante.png'
import { Link } from 'components/link';

export default function Festival() {

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <LasRarasBanner />
          <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Heading as="h2" sx={{ fontSize: '1.2em', textTransform: 'uppercase', mb: 2 }}>
              Clase Magistral
            </Heading>
            <Heading as="h1" sx={{ fontSize: '3em', fontFamily: 'Kanit', mb: 5 }}>
              Los Paisajes Sonoros de Las Raras
            </Heading>
            <Box>
              <Text as="p" variant="heroSecondary" sx={styles.text}>
                Partiendo desde la experiencia de Las Raras en la creación de distintos tipos de podcast documental, revisaremos en detalle las diferentes etapas de la producción y escucharemos ejemplos que ilustran cómo contar historias reales entendiendo al sonido como materia prima narrativa y estética.
              </Text>
            </Box>
          </Container>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, flexWrap: 'wrap' }}>
              <Box sx={{ mx: 4, maxWidth: ['100%', '100%', '100%', '40%', '40%', '40%'] }}>
                <Image src={lasraras}></Image>
              </Box>
              <Box sx={{ maxWidth: ['100%', '100%', '100%', '60%', '60%', '60%'] }}>
                <Text as="p" variant="heroSecondary" sx={styles.text2}>
                  Catalina May es una periodista chilena que trabajó más de una década en prensa escrita y academia antes de crear Las Raras. Hoy es directora de contenido y anfitriona de Las Raras. Además trabaja como asesora editorial y editora de podcasts internacionales.
                </Text>
                <Text as="p" variant="heroSecondary" sx={styles.text2}>
                  Martín Cruz es ingeniero en sonido y el director de sonido de Las Raras. Trabajó en producción audiovisual, principalmente enfocada en difusión científica antes de crear Las Raras. También es el Supervisor de sonido de la productora de podcast internacional Adonde Media.
                </Text>
              </Box>
            </Box>
          </Container>
          <Container sx={styles.buttons}>
            <Box sx={{ backgroundColor: 'fourth', maxWidth: ['100%', '80%'], mx: 'auto', mb: 2, fontSize: '1.5em', py: 1, textAlign: 'center', position: 'relative', fontFamily: 'Chakra Petch' }}>
              <Link path={'https://forms.gle/gzb94NPafrQzsaGLA'} target='_blank'>
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
                <b>Abono del taller:</b> $7550.-
              </Text>
              <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0 }}>
                <b>Día y hora:</b> Sábado 7 de octubre - 9:00hs
              </Text>
              <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0 }}>
                <b>Lugar:</b> Biblioteca Argentina <br /> <Link path={'https://maps.app.goo.gl/R3U7yXbGEeqmufX76'} target='_blank'>Dr. Álvarez 1550 - Rosario</Link>
              </Text>

            </Box>
          </Container>


          <Container sx={{ maxWidth: ['100%', '100%', '100%', '100%', '100%', '70%'] }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: 8, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', minWidth: '50%' }}>
                <Heading as="h2" sx={{ fontSize: '2em', }}>Las Raras</Heading>
                <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0, }}>
                  <Link path={'https://lasraraspodcast.com'} target='_blank'>lasraraspodcast.com</Link>
                </Text>
                <Text as="p" variant="heroSecondary" sx={{ ...styles.text2, mb: 0, }}>
                  <Link path={'https://instagram.com/lasrarasposcast/'} target='_blank'>instagram.com/lasraraspodcast</Link>
                </Text>
              </Box>
              <Box sx={{ maxWidth: '50%' }}>
                <Image src={logoraras}>
                </Image>
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