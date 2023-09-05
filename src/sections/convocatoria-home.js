/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Embed, Button } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import Link from 'next/link';
import ShapeRight from 'assets/shape-right.png';

export default function ConvocatoriaHome() {
  return (
    <section sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Box sx={styles.banner.text}>
            <Heading as="h3">EDICIÓN 2023</Heading>
            <Heading as="h1" variant="heroPrimary">
              CONVOCATORIAS ABIERTAS
            </Heading>
            <Text as="p" variant="heroSecondary">
              Si te interesa conocer más sobre el universo podcastero, o ya formás parte de él, podés participar en diferentes convocatorias.<br />Seguimos actualizando esta info cada semana. Podés enterarte de las novedades en nuestras redes.<br />¡Cuidado con las fechas!
            </Text>
          </Box>
          <Link
            href={'/festival'}
            spy={true}
            smooth={true}
          >
            <Button sx={{ backgroundColor: 'third' }}>
              CONVOCATORIAS
            </Button>
          </Link>
        </Box>
      </Container>
    </section>
  )
}

const styles = {
  banner: {
    pt: [5, null, 0, null, 8, 8, 8, 8],
    pb: [0, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: '100%',
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      m: '0 auto',
      width: '70%'
    },
    imageBox: {
      justifyContent: 'center',
      width: '100%',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      video: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
