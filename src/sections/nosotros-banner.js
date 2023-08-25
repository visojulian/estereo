/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import TextFeature from 'components/text-feature';
import Nosotros from 'assets/team/nosotros.png';

export default function NosotrosBanner() {
  return (
    <section sx={styles.banner} id="nosotros">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Estéreo, más que un evento
          </Heading>
          <Text as="p" variant="heroSecondary">
            Estéreo fue el <strong>primer</strong> festival de podcasts que se realizó en Argentina, los días 17, 18 y 19 de Noviembre de 2022; con la participación de más de <strong>7.000 personas</strong> en más de <strong>5 sedes</strong> de lugares emblemáticos de la ciudad de Rosario como: cine El Cairo, Plataforma Lavardén, Biblioteca Nacional Argentina y el Centro de Expresiones Contemporáneas.
          </Text>
          <TextFeature title="¿Por qué podcast?" />
          <Text as="p" variant="heroSecondary">
            Es una industria que se encuentra en auge tanto en Latinoamérica como en Estados Unidos y Europa. Las cualidades innovadoras del formato permite su adaptación a las necesidades de consumos on demand sobre tópicos de nicho de las audiencias actuales.
            Este contexto facilita un presente de expansión tanto en calidad, géneros y público.
          </Text>
          <Image src={Nosotros} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['120px', '125px', '135px', '110px', null, null, '135px', '175px'],
    pb: [2, null, 0, null, 2, 0, null, 8],
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
      width: ['100%', '90%', '535px', null, '57%', '75%', '90%', '85%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
  },
  // image: {
  //   height: '100%',
  // },
};
