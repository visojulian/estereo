/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import Link from 'next/link';


export default function ComunidadHome() {
  return (
    <section sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Box sx={styles.banner.text}>
            <Heading as="h2" sx={{
              color: 'white',
              backgroundColor: 'primary',
              padding: '0 1em',
              mt: 8,
              mb: 2,
              fontSize: ['2em', '4em']
            }}>
              COMUNIDAD ESTÉREO
            </Heading>
            <Text as="p" variant="heroSecondary">
              Colaborá con Estéreo, sumate a nuestra comunidad y recibí regalos 🎁
              <br />
              Festival Estéreo es <b>abierto y gratuito</b>.
              <br />
              Además de contar con el apoyo de auspiciantes, abrimos la posibilidad (y la billetera 💸) para que vos también puedas colaborar económicamente con Estéreo.
              <br />
            </Text>
          </Box>
          <Link
            href={'/comunidad'}
            spy={true}
            smooth={true}
          >
            <Button sx={styles.button}>
              COMUNIDAD
            </Button>
          </Link>
        </Box>
      </Container>
    </section>
  )
}

const styles = {
  button: {
    color: 'whithe',
    backgroundColor: 'fourth',
    borderRadius: '0.5em',
    fontSize: '1.2em !important',

    ':hover': {
      boxShadow: 'none'
    }
  },

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
