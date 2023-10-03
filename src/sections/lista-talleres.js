/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Button } from 'theme-ui';
import lasraras from 'assets/lasraras.png'
import actuacion from 'assets/actuacion.png'
import Logo from 'assets/logo.svg'
import { Link } from 'components/link';

export default function ListaTalleres() {
  return (
    <section sx={styles.container}>
      <Heading as="h1" sx={styles.title}>
        Talleres con inscripción
      </Heading>
      <Heading as="p" variant="heroSecondary" sx={{ mt: 5, mb: 0, fontWeight: '300' }}>
        Podés inscribirte a los siguientes talleres:
      </Heading>
      <div sx={styles.cardsContainer}>
        {cards.map((c, idx) => {
          return (
            <div sx={c.bgColor != 'white' ? { ...styles.card, backgroundColor: c.bgColor } : { ...styles.card, backgroundColor: c.bgColor, color: 'third !important', border: '2px solid #14162D' }} key={idx}>
              <div sx={styles.content}>
                <div sx={{ borderBottom: '3px solid white', mb: 3, width: '70%', textAlign: 'center' }}>{c.title}</div>
                <Image src={c.img} />
                <Button sx={c.bgColor != 'white' ? { ...styles.button } : { ...styles.button, border: '2px solid #14162D' }}>
                  <Link
                    sx={{ color: 'third', textDecoration: 'none', width: '100%' }}
                    path={c.link}>
                    {c.price}
                  </Link>
                </Button>
                <div sx={{ backgroundColor: c.combineColor, height: '0.7em', width: '100%', position: 'absolute', bottom: 0 }}></div>
              </div>
            </div>
          );
        })}
      </div>
      <Text sx={{ fontSize: '1.2em', fontWeight: '300', textAlign: 'center' }}>
        Por el momento estos son los únicos talleres que requieren inscripción previa.<br /> Podés asistir al resto de eventos de la grilla ¡sin inscripción, y de forma gratuita!
      </Text>
      <Image src={Logo} sx={styles.logo}></Image>
      <Heading as="h3" sx={{ mb: 4, fontSize: '1.5em', fontWeight: '600' }}>
        ¡Nos vemos el 6, 7 y 8 de octubre!
      </Heading>
      <hr sx={{ mt: 8 }}></hr>
    </section >
  )
}

const styles = {
  container: {
    overflow: 'hidden',
    minHeight: '100vh',
    width: '100%',
    maxWidth: '100%',
    paddingTop: '15vh',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    maxWidth: ['40%', '40%', '30%', '30%', '30%', '20%'],
    mb: 5,
  },
  title: {
    textTransform: 'uppercase',
    color: 'white',
    backgroundColor: 'primary',
    padding: '0 1em',
    fontSize: '2em'
  },
  cardsContainer: {
    width: '100%',
    padding: '1% 5%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    pt: 5,
    m: ['1em 0', '1em', '1em', '1em', '1em', '1em 2em'],
    width: ['100%', '100%', '100%', '40%', '40%', '25%'],
    minHeight: ['80vh', '70vh'],
    height: '25vw',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '1.5em',
    position: 'relative',
    boxShadow: '5px 5px 8px lightgray'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',

    ' ul': {
      alignSelf: 'flex-start',
      p: '0',
      m: '2em auto',
      fontSize: '0.8em',
    },

    ' li': {
      listStyle: 'none',
      display: 'inline',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textTransform: 'capitalize',
    },

    ' img': {
      maxHeight: '12em',
      maxWidth: '12em',
      mt: '2em'
    }
  },
  button: {
    color: 'third',
    backgroundColor: 'white',
    width: '70%',
    borderRadius: '0.5em',
    position: 'absolute',
    bottom: 7,
    fontSize: '1.2em !important',

    ':hover': {
      boxShadow: 'none'
    }
  },

}

const cards = [
  {
    title: 'Los Paisajes Sonoros de Las Raras',
    price: 'VER MÁS',
    bgColor: 'third',
    combineColor: 'primary',
    link: '/lasraras',
    img: lasraras,
  },
  {
    title: 'Actuar Frente al Micrófono',
    price: 'VER MÁS',
    bgColor: 'primary',
    combineColor: 'yellow',
    link: '/actuacion',
    img: actuacion,
  },
]