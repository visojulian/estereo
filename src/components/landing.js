/** @jsx jsx */
import { jsx, Button, Image, Box } from 'theme-ui';
import Background from 'assets/landing/background.png';
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
import { Link } from './link';

export default function Landing() {

  return (
    <section sx={styles.background}>
      <Image sx={styles.escenario} src={Escenario}></Image>
      <Image sx={styles.starsLeft} src={StarsLeft}></Image>
      <Image sx={styles.starsRight} src={StarsRight}></Image>
      <Image sx={styles.cortinasLeft} src={CortinasLeft}></Image>
      <Image sx={styles.cortinasRight} src={CortinasRight}></Image>
      <Image sx={styles.edicion} src={Edicion}></Image>
      <Image sx={styles.fecha} src={Fecha}></Image>
      <Image sx={styles.lugar} src={Lugar}></Image>
      <Image sx={styles.logo} src={Logo}></Image>
      <Image sx={styles.mesa} src={Mesa}></Image>
      <Image sx={styles.cifespod} src={Cifespod}></Image>
      <Box sx={styles.landing}>
        <Link path="/home">
          <Button sx={styles.button}>
            Acceder
          </Button>
        </Link>
      </Box>
    </section>
  );
}

const styles = {
  background: {
    position: 'relative',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  },
  escenario: {
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    bottom: 0,
    minHeight: '10%',
    objectFit: 'cover'
  },
  cortinasLeft: {
    position: 'absolute',
    left: -2,
    width: '20em',
    '@media screen and (min-width: 768px)': {
      left: 0,
      width: '40em',
    },
  },
  cortinasRight: {
    position: 'absolute',
    display: 'inline',
    right: 0,
    width: '20em',
    '@media screen and (min-width: 768px)': {
      width: '40em',
    },
  },
  starsRight: {
    position: 'absolute',
    right: 0,
    display: 'block',
    '@media screen and (max-width: 768px)': {
      right: 7,
      top: 5,
      display: 'none',
    },
  },
  starsLeft: {
    position: 'absolute',
    left: -50,
    display: 'none',
    '@media screen and (min-width: 768px)': {
      display: 'block',
    },
  },
  edicion: {
    position: 'absolute',
    left: 0,
    padding: '2em',
    width: '9em',
    '@media screen and (min-width: 768px)': {
      margin: '2em',
      width: '10em',
    },
  },
  fecha: {
    position: 'absolute',
    right: 0,
    padding: '2em',
    width: '8em',
    '@media screen and (min-width: 768px)': {
      margin: '2em',
      width: '10em',
    },
  },
  lugar: {
    position: 'relative',
    zIndex: 1,
    width: '40%',
    margin: 'auto',
    padding: '50% 0 0 2%',
    display: 'block',
    '@media screen and (min-width: 490px)': {
      padding: '30% 0 0 2%',
      width: '30%',
    },
    '@media screen and (min-width: 768px)': {
      padding: '40% 0 0 5%',
      width: '30%',
    },
    '@media screen and (min-width: 1024px)': {
      padding: '8% 2% 0 0',
      width: '12%',
    },
  },
  logo: {
    position: 'relative',
    zIndex: 1,
    width: '60%',
    display: 'block',
    margin: 'auto',
    padding: '5% 0 0 2%',
    '@media screen and (min-width: 490px)': {
      width: '40%',
    },
    '@media screen and (min-width: 768px)': {
      padding: '1% 0 0 5%',
      width: '35%',
    },
    '@media screen and (min-width: 1024px)': {
      padding: '1% 2.2% 0 0',
      width: '25%',
      mt: 4,
    },
  },
  cifespod: {
    position: 'absolute',
    top: 9,
    left: '40%',
    width: '20%',
    '@media screen and (min-width: 768px)': {
      left: '48%',
      width: '10%',
    },
    '@media screen and (min-width: 1024px)': {
      width: '5%',
      top: 'unset',
      left: '90%',
      bottom: 5,
    },
  },
  mesa: {
    position: 'absolute',
    bottom: 0,
    left: -4,
    '@media screen and (min-width: 490px)': {
      left: '5%',
    },
    '@media screen and (min-width: 768px)': {
      left: '20%',
      width: '60%'
    },
    '@media screen and (min-width: 1024px)': {
      left: '30%',
      width: '35%'
    },
  },
  button: {
    fontSize: '24px !important',
    '@media screen and (min-width: 768px)': {
      ml: '10%',
      mt: 4,
    },
    '@media screen and (min-width: 1024px)': {
      ml: -7
    },
  },
  landing: {
    pt: 8,
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (min-width: 490px)': {
      pt: 5,
    }
  },
}