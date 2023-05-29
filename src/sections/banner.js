/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Embed, Button } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
const BannerVid = "https://www.youtube.com/embed/65rqGWf93AU";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h3">EDICIÓN 2023</Heading>
          <Heading as="h1" variant="heroPrimary">
            <span sx={{ letterSpacing: '10px' }}>6.7.8</span> DE OCTUBRE
          </Heading>
          <Text as="p" variant="heroSecondary">
            Realizado en la ciudad de Rosario, Argentina Estéreo busca unir a creadores y oyentes en un mismo espacio. Brindando formaciones, conversatorios y shows gratuitos. Es el primer festival de podcast que se realiza en país.
          </Text>
          <Button variant="primary">Participar</Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Embed src={BannerVid} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
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
      backgroundSize: '36%',
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
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
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
