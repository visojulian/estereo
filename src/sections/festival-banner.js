/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Image, Text, Heading } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import Logo from 'assets/logosimple.svg'

export default function FestivalBanner() {
  return (
    <section sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h2" variant="heroPrimary">
            <span sx={{ letterSpacing: '10px' }}>6.7.8</span> DE OCTUBRE
          </Heading>
          <Image src={Logo} sx={styles.logo}></Image>
          <Heading as="h3" variant="heroThird">
            ROSARIO, ARGENTINA
          </Heading>
          <Text as="p" variant="heroSecondary">
            Muy pronto, en esta sección vas a poder encontrar toda la información sobre la edición de este año.
            <br />
            ¿Cómo participar? ¿Dónde ir? ¿Qué actividades hay?
          </Text>
          <Text as="p" variant="heroSecondary">
            Seguimos trabajando para darle a toda comunidad podcastera, el festival que se merece.
            <br />
            ¡Gracias por apoyarnos!
          </Text>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  logo: {
    maxWidth: '40%',
    mb: 4,
  },
  banner: {
    pt: ['120px', '125px', '135px', '90px', null, null, '105px', '165px'],
    pb: [2, null, 0, null, 2, 0, null, 4],
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
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '26%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '22%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '75%', '80%', '75%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
      pt: '20px',
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
