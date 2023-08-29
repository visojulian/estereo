/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Image, Text, Heading, Button } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import maraton from 'assets/convocatorias/maraton.jpg';
import showcase from 'assets/convocatorias/showcases.jpg';
import voluntarios from 'assets/convocatorias/voluntarios.jpg';
import { Link } from 'components/link';

export default function ConvocatoriasBanner() {
  return (
    <section sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h2" variant="heroPrimary">
            Convocatorias
          </Heading>
          <hr sx={{ mt: 5, mb: 5 }} />
          <Heading as="h3" variant="heroThird">
            Maratón de Podcast
          </Heading>
          <Image
            src={maraton}
            width='auto'
            height='auto'
          />
          <Text as="p" variant="heroSecondary" sx={{ mt: 5 }}>
            Vamos a organizar nuestra primer <strong>"Maratón de podcast"</strong>.<br />
            En este evento, un equipo de 20 personas coordinado por <a sx={styles.a} href='https://instagram.com/juarezjeremias' target='blank'>Jeremías Juárez</a> va a crear un podcast de ficción en 48 horas que vamos a estrenar en el evento de cierre del Festival.
          </Text>
          <Text as="p" variant="heroSecondary">
            Si sos escritor, productor, actor o editor de cualquier nivel o querés tener tu primera experiencia en ficción sonora ¡nos encantaría conocerte!<br />
            Vamos a seleccionar 5 personas para cada uno de los 4 equipos: producción, guión, dirección/actuación y edición.<br />
          </Text>
          <Text as="p" variant="heroSecondary">
            <strong>Para participar, vas a tener que estar en Rosario, Argentina los días del festival.</strong>
          </Text>
          <Link
            path={'https://forms.gle/z7q1ZUAbKZuY53E97'}
            spy={true}
            smooth={true}
            target='blank'
          >
            <Button variant="primary">
              Inscripción
            </Button>
          </Link>
          <hr sx={{ mt: 5, mb: 6 }} />
          <Heading as="h3" variant="heroThird">
            Showcase de Podcast
          </Heading>
          <Image
            src={showcase}
            width='auto'
            height='auto'
          />
          <Text as="p" variant="heroSecondary" sx={{ mt: 5 }}>
            Vamos a realizar nuestro primer evento de <strong>Showcase para proyectos de podcast</strong>.<br />
          </Text>
          <Text as="p" variant="heroSecondary">
            Si tenés un proyecto de podcast que ya está en producción o todavía no pudiste iniciar y te gustaría tener feedback de productores profesionales, te invitamos a traerlo a nuestro Festival.<br />
            Contale tu idea en 5 minutos a integrantes de las productoras más importantes de Argentina, para recibir consejos y críticas sobre tu proyecto y para hacer importantes contactos para tu carrera profesional.<br />
          </Text>
          <Text as="p" variant="heroSecondary">
            <strong>Para participar, vas a tener que poder estar en Rosario, Argentina el día domingo 8 de octubre.</strong>
          </Text>
          <Link
            path={'https://forms.gle/dneDKotxUK2zJB5SA'}
            spy={true}
            smooth={true}
            target='blank'
          >
            <Button variant="primary">
              Inscripción
            </Button>
          </Link>
          {/* <hr sx={{ mt: 5, mb: 6 }} />
          <Heading as="h3" variant="heroThird">
            Voluntariado
          </Heading>
          <Image
            src={voluntarios}
            width='auto'
            height='auto'
          />
          <Text as="p" variant="heroSecondary" sx={{ mt: 5 }}>
            ¡Hola <strong>podcasterx</strong>! Somos el equipo de Festival Estéreo.<br />
          </Text>
          <Text as="p" variant="heroSecondary">
            Para realizar nuestro festival, vamos a necesitar de muchxs voluntarixs que nos ayuden en algunas tareas clave. Si te interesa participar y sumar experiencia, nos encantaría conocerte y sumarte a nuestro equipo.<br />
          </Text>
          <Text as="p" variant="heroSecondary">
            <strong>Para participar, es necesario estar en Rosario, Argentina, alguno de los días del festival.</strong>
          </Text>
          <Link
            path={'https://forms.gle/iaCZtvCwtTbUUjKh8'}
            spy={true}
            smooth={true}
            target='blank'
          >
            <Button variant="primary">
              Inscripción
            </Button>
          </Link> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  a: {
    color: '#F85532',
    textDecoration: 'none',
    '&:hover': {
      color: '#D3CCFF',
    },
    '&:visited': {
      color: '#F85532',
    }
  },

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
      backgroundPosition: 'center left',
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
      backgroundPosition: 'center right',
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
