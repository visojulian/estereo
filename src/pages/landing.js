/** @jsx jsx */
import { jsx, Button, ThemeProvider, Box } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import { StickyProvider } from '../contexts/app/app.provider';
import { Link } from 'components/link';
// import Desktop from 'assets/landing-desktop.svg';
import Background from 'assets/landing/background.svg';
import Escenario from 'assets/landing/escenario.svg';
import CortinasLeft from 'assets/landing/cortinas-left.svg';
import CortinasRight from 'assets/landing/cortinas-right.svg';
import StarsLeft from 'assets/landing/stars-left.svg';
import StarsRight from 'assets/landing/stars-right.svg';
import Edicion from 'assets/landing/edicion.svg';
import Fecha from 'assets/landing/fecha.svg';
import Lugar from 'assets/landing/lugar.svg';
import Logo from 'assets/landing/logo.svg';
import Mesa from 'assets/landing/mesa.svg';
import Cifespod from 'assets/landing/cifespod.svg';

export default function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <SEO title="Estéreo: Festival de Podcast" />
        <section sx={styles.background}>
          <Box sx={styles.escenario}></Box>
          <Box sx={styles.starsLeft}></Box>
          <Box sx={styles.starsRight}></Box>
          <Box sx={styles.cortinasLeft}></Box>
          <Box sx={styles.cortinasRight}></Box>
          <Box sx={styles.edicion}></Box>
          <Box sx={styles.fecha}></Box>
          <Box sx={styles.lugar}></Box>
          <Box sx={styles.logo}></Box>
          <Box sx={styles.mesa}></Box>
          <Box sx={styles.cifespod}></Box>
          <Box sx={styles.landing}>
            <Link
              path="/">
              <Button sx={styles.button}>Acceder</Button>
            </Link>
          </Box>
        </section>
      </StickyProvider>
    </ThemeProvider >
  );
}

const styles = {
  background: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '100vh',
  },
  escenario: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    left: 0,
    backgroundImage: `url(${Escenario})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'bottom center',
  },
  cortinasLeft: {
    position: 'absolute',
    height: '100vh',
    width: '67vw',
    left: 0,
    backgroundImage: `url(${CortinasLeft})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'contain',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      width: '60vh',
    },
  },
  cortinasRight: {
    position: 'absolute',
    right: 0,
    height: '100vh',
    width: '72vw',
    backgroundImage: `url(${CortinasRight})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top right',
    backgroundSize: 'contain',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      width: '60vh',
    },
  },
  starsRight: {
    position: 'absolute',
    height: '100vh',
    width: '60vw',
    right: 0,
    backgroundImage: `url(${StarsRight})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center right 35%',
    resize: 'both',
    display: 'none',
    '@media screen and (min-width: 768px)': {
      display: 'block',
    },
  },
  starsLeft: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    left: 0,
    backgroundImage: `url(${StarsLeft})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: '70%',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      backgroundPosition: 'center left 35%',
      backgroundSize: 'revert',
      width: '60vw',
    },
  },
  edicion: {
    position: 'absolute',
    height: '100vh',
    width: '42vw',
    left: 0,
    backgroundImage: `url(${Edicion})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top 7% left 20%',
    backgroundSize: '45%',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      backgroundPosition: 'top 15% left 5%',
      backgroundSize: '12%',
      width: '50vw',
    },
  },
  fecha: {
    position: 'absolute',
    height: '100vh',
    width: '42vw',
    right: 0,
    backgroundImage: `url(${Fecha})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top 7% right 20%',
    backgroundSize: '35%',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      backgroundPosition: 'top 15% right 4%',
      backgroundSize: '10%',
      width: '50vw',
    },
  },
  lugar: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${Lugar})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top 35% center',
    backgroundSize: '35%',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      backgroundPosition: 'top 15% center',
      backgroundSize: 'revert',
      width: '100vw',
    },
  },
  logo: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    left: 0,
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top 42% center',
    backgroundSize: '65%',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      backgroundPosition: 'top 25% center',
      backgroundSize: 'revert',
      width: '100vw',
    },
  },
  cifespod: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    left: 0,
    backgroundImage: `url(${Cifespod})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top 7% center',
    backgroundSize: '20%',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      backgroundPosition: 'bottom 8% right 10%',
      backgroundSize: 'revert',
    },
  },
  mesa: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    left: 0,
    backgroundImage: `url(${Mesa})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'bottom 2% left 12%',
    backgroundSize: '90%',
    resize: 'both',
    '@media screen and (min-width: 768px)': {
      backgroundPosition: 'bottom 2% left 47.7%',
      backgroundSize: 'revert',
    },
  },
  button: {
    fontSize: '24px !important',
    marginTop: '100%',
    '@media screen and (min-width: 768px)': {
      marginTop: '0',
    },
  },
  landing: {
    position: 'absolute',
    zIndex: 2,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}