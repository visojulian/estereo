import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { Box, Image, Text, Heading, Container } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import FestivalBanner from 'sections/festival-banner';
import estrella from 'assets/estrella.png'
import microfono from 'assets/microfono.png'
import anotador from 'assets/anotador.png'
import auris from 'assets/auris.png'
import mate from 'assets/mate.png'
import parlante from 'assets/parlante.png'
import carlito from 'assets/carlito.png'
import { Link } from 'components/link';
import ModalImage, { Lightbox } from 'react-modal-image';
import Landscape from 'assets/grilla-landscape.png'
import Grilla from 'assets/grilla.png'

export default function Festival() {
  const [show, setShow] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    setViewportWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <FestivalBanner />
          <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Heading as="h1" sx={{ fontSize: '1.5em', fontFamily: 'Kanit', mb: 5 }}>
              Estéreo, Festival de Podcast
            </Heading>
            <Box>
              <Text as="p" variant="heroSecondary" sx={styles.text}>
                Lo primero que tenés que saber es que Festival Estéreo es <b>abierto y gratuito</b>. Es decir, podés acceder a casi todos los eventos simplemente asistiendo al lugar de su realización. Por otro lado, si sos una persona comprometida con la industria del podcast, o te interesa conocer más sobre el universo podcastero, seguramente querrás participar de algunas actividades especiales que requerirán una inscripción previa y, en muy poquitos casos, un abono específico.
              </Text>
            </Box>
          </Container>
          <Container sx={styles.buttons}>
            <Image src={estrella} sx={{ maxWidth: '1.8em', mx: 'auto' }} />
            <Link path={'/cronograma'}>
              <Box
                sx={{
                  backgroundColor: 'primary',
                  maxWidth: ['100%', '80%'],
                  mx: 'auto',
                  mb: 2,
                  fontSize: '1.5em',
                  py: 1,
                  textAlign: 'center',
                  position: 'relative',
                  fontFamily: 'Chakra Petch',
                  cursor: 'pointer'
                }}>

                <Image src={parlante} sx={{ maxWidth: ['2em', '2.5em'], position: 'absolute', left: -2, top: [5, 3] }} />
                <b>VER GRILLA</b>

              </Box>
            </Link>
            <Image src={estrella} sx={{ maxWidth: '1.8em', mx: 'auto' }} />
            <Link path={'/convocatorias'}>
              <Box sx={{ backgroundColor: '#368DEC', maxWidth: ['100%', '80%'], mx: 'auto', mb: 2, fontSize: '1.5em', py: 1, textAlign: 'center', position: 'relative', fontFamily: 'Chakra Petch' }}>
                <Image src={mate} sx={{ maxWidth: '2em', position: 'absolute', right: -2, bottom: -3 }} />
                <b>CONVOCATORIAS</b>
              </Box>
            </Link>
            <Image src={estrella} sx={{ maxWidth: '1.8em', mx: 'auto' }} />
            <Link path={'/lasraras'}>
              <Box sx={{ backgroundColor: 'third', maxWidth: ['100%', '80%'], mx: 'auto', mb: 2, fontSize: '1.5em', py: 1, textAlign: 'center', position: 'relative', fontFamily: 'Chakra Petch' }}>
                <Image src={carlito} sx={{ maxWidth: ['4em', '5em'], position: 'absolute', left: [1, 4, 4, 4, '8em'], bottom: -2 }} />
                <b>TALLERES</b>
              </Box>
            </Link>
            <Image src={estrella} sx={{ maxWidth: '1.8em', mx: 'auto' }} />
          </Container>
          <Container sx={{ maxWidth: ['100%', '100%', '100%', '100%', '100%', '70%'] }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={estrella} sx={{ maxHeight: 25 }} />
                <Heading as="h2" sx={{ fontSize: '2em', display: 'inline', ml: 2 }} id="shows">Shows en vivo</Heading>
              </Box>
              <Image src={microfono} sx={{ maxHeight: [50, 100] }} />
            </Box>
            <Box>
              <Text as="p" variant="heroSecondary" sx={styles.text2}>
                <b>Más de 20 presentaciones</b> en vivo en escenario, con sus protagonistas, para disfrutar las
                narrativas más atractivas del momento. Acá te dejamos la grilla para que te reserves el
                calendario. Recordá que todo es gratuito. <b><a onClick={() => setShow(true)} style={{ cursor: 'pointer', color: '#368DEC' }}>Ver grilla</a></b>.
              </Text>
            </Box>
          </Container>
          <Container sx={{ maxWidth: ['100%', '100%', '100%', '100%', '100%', '70%'] }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={estrella} sx={{ maxHeight: 25 }} />
                <Heading as="h2" sx={{ fontSize: '2em', display: 'inline', ml: 2 }} id="formacion">Formación</Heading>
              </Box>
              <Image src={anotador} sx={{ maxHeight: [50, 90] }} />
            </Box>
            <Box>
              <Text as="p" variant="heroSecondary" sx={styles.text2}>
                Generamos espacios de encuentro y debate para mantener la industria en constante crecimiento. Por eso, en nuestro querido Estéreo vas a encontrar <b>más de 20 conversatorios</b> con los actuales protagonistas de la industria.
              </Text>
              <Text as="p" variant="heroSecondary" sx={styles.text2}>
                Y por último, este año desarrollamos nuestra primera <b>Maratón de Podcast</b>: un equipo de 20 personas coordinado por Jeremías Juárez va a crear un podcast de ficción en 48 horas que será estrenado en el cierre del Festival.<br />
                Si te interesa acceder a cualquiera de estas actividades, lo podés hacer <b><Link style={{ color: '#368DEC' }} path={'/convocatorias'}>desde acá</Link></b>.
              </Text>
            </Box>
          </Container>
          <Container sx={{ maxWidth: ['100%', '100%', '100%', '100%', '100%', '70%'] }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={estrella} sx={{ maxHeight: 25 }} />
                <Heading as="h2" sx={{ fontSize: '2em', display: 'inline', ml: 2 }} id="industria">Industria</Heading>
              </Box>
              <Image src={auris} sx={{ maxHeight: [50, 90] }} />
            </Box>
            <Box>
              <Text as="p" variant="heroSecondary" sx={styles.text2}>
                Estéreo es un espacio de intercambio y desarrollo,de la industria del podcast. Además de todas las oportunidades para conectar que surgen en cada actividad del festival, creemos necesario formalizar algunos espacios de networking y conexión de productores, creativos y trabajadores de podcast como medio.<br />
                Uno de estos espacios es el de <b>Showcase</b>, donde si tenés un proyecto de podcast que ya está en producción o todavía no pudiste iniciar y te gustaría tener feedback de productores profesionales, te invitamos a traerlo a nuestro festival. Vas a poder <b>contarle tu idea en 5 minutos a integrantes de las productoras más importantes de Argentina</b>, para recibir consejos y críticas sobre tu proyecto y para hacer importantes contactos para tu carrera profesional.<br />
                Y, como siempre, habrá mesas de debate donde los productores más relevantes de la escena actual van a debatir sobre la actualidad y el futuro de nuestra industria, con espacio abierto a la participación del público.<br />
                Si te interesa todo este mundo de conectividad y desarrollo, <b><Link style={{ color: '#368DEC' }} path={'/convocatorias'}>acá te dejamos más info</Link></b>.
              </Text>
            </Box>
            <hr />
            {show &&
              <Lightbox
                hideDownload
                hideZoom
                large={viewportWidth > 1023 ? Landscape : Grilla}
                onClose={() => setShow(false)}
              />
            }
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