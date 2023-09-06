/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Button } from 'theme-ui';
import React from 'react'
import Logo from 'assets/logo.svg'
import estrella from 'assets/estrella.png'
import estrellaAmarilla from 'assets/estrella_amarilla.png'
import { Link } from 'components/link';

export default function ComunidadEstereo() {
  return (
    <section sx={styles.container}>
      <Heading as="h1" sx={styles.title}>
        Comunidad Estéreo
      </Heading>
      <Heading as="p" variant="heroSecondary" sx={{ mt: 5, mb: 0, fontWeight: '300' }}>
        ¡Colaborar con Estéreo tiene beneficios!
      </Heading>
      <div sx={styles.cardsContainer}>
        {cards.map((c, idx) => {
          return (
            <div sx={c.bgColor != 'white' ? { ...styles.card, backgroundColor: c.bgColor } : { ...styles.card, backgroundColor: c.bgColor, color: 'third !important', border: '2px solid #14162D' }} key={idx}>
              <div sx={styles.content}>
                <div sx={{ borderBottom: '3px solid white', }}>{c.title}</div>
                <ul>
                  {c.benefits.map((b, i) => {
                    return (

                      <li sx={c.bgColor == 'white' && { px: '2em', textTransform: 'none !important' }} key={i}>{c.bgColor != 'white' && (idx === 1 || idx === 4 ? <Image src={estrellaAmarilla} /> : <Image src={estrella} />)}{b}</li>
                    );
                  })}
                </ul>
                <Button sx={c.bgColor != 'white' ? { ...styles.button } : { ...styles.button, border: '2px solid #14162D' }}>
                  <Link
                    target={'_blank'}
                    sx={{ color: 'third', textDecoration: 'none', width: '100%' }}
                    path={c.link}>
                    {c.price}
                  </Link>
                </Button>
                <div sx={{ backgroundColor: c.combineColor, height: '0.7em', width: '100%', position: 'absolute', bottom: 0 }}></div>
                {c.stock > 0 && <div sx={{ height: '0.7em', width: '100%', position: 'absolute', bottom: -4, color: 'third', fontSize: '0.5em' }}>Sólo se entregarán {c.stock} packs.</div>}
              </div>
            </div>
          );
        })}
      </div>
      <Text sx={{ fontSize: '0.8em', fontWeight: '300', textAlign: 'center' }}>
        ¡IMPORTANTE!
        <ul sx={{ textAlign: 'justify', width: '95%' }}>
          <li>Luego de participar deberás comunicarte con nosotros para coordinar la entrega de obsequios.</li>
          <li>Al agotar la existencia de cada pack, se deshabilitará el correspondiente botón de pago.</li>
          <li>Todos los obsequios se entregarán únicamente de manera presencial durante la realización de Festival Estéreo, previa coordinación por parte del staff. No se realizará ningún tipo de envío.</li>
          <li>Los productos entregados no tienen cambio ni devolución y no pueden ser escogidos a elección.</li>
          <li>Los packs: Matecito, Pituco, Gafitas y Súper estarán disponibles hasta agotar el stock de obsequios.</li>
          <li>"Comunidad Estéreo" es una iniciativa única y exclusiva de Festival Estéreo.</li>
          <li>Toda la responsabilidad de "Comunidad Estéreo" corresponde únicamente a Festival Estéreo. Ninguna de las marcas auspiciantes e instituciones mencionadas son responsables por la realización de esta inciativa.</li>
        </ul>
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
    minHeight: ['90vh', '60vh'],
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
      maxHeight: '1em',
      height: 'unset !important',
      mr: '0.5em'
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
    title: 'Pack Estéreo',
    price: '$1.000',
    benefits: [
      'Pack stickers Estéreo',
    ],
    bgColor: 'third',
    combineColor: 'primary',
    link: 'https://mpago.la/16WJ6JB',
    stock: 0,
  },
  {
    title: 'Pack Estéreo +',
    price: '$3.000',
    benefits: [
      'Pack stickers Estéreo', 'Afiche A3', 'Postal (tamaño A5)'
    ],
    bgColor: 'primary',
    combineColor: 'yellow',
    link: 'https://mpago.la/1Ah4TTo',
    stock: 0,
  },
  {
    title: 'Pack Matecito',
    price: '$5.000',
    benefits: [
      'Mate y bombilla Taragüí', 'Pack stickers Estéreo'
    ],
    bgColor: 'fourth',
    combineColor: 'third',
    link: 'https://mpago.la/31LvGNx',
    stock: 10,
  },
  {
    title: 'Pack Pituco',
    price: '$7.500',
    benefits: [
      'Remera Estéreo / Amnistía', 'Totebag Estéreo / Amnistía', 'Pack stickers Estéreo',
    ],
    bgColor: 'third',
    combineColor: 'primary',
    link: 'https://mpago.la/1eHfGaF',
    stock: 5,
  },
  {
    title: 'Pack Gafitas',
    price: '$10.000',
    benefits: [
      'Lentes de Sol CIMA', 'Póster Oficial Estéreo', 'Pack stickers Estéreo',
    ],
    bgColor: 'primary',
    combineColor: 'yellow',
    link: 'https://mpago.la/1AXCc1F',
    stock: 10,
  },
  {
    title: 'Súper Pack',
    price: '$20.000',
    benefits: [
      'Lentes de Sol CIMA', 'Mate y bombilla Taragüí', 'Póster Oficial Estéreo', 'Pack stickers Estéreo',
    ],
    bgColor: 'fourth',
    combineColor: 'third',
    link: 'https://mpago.la/1jzECxL',
    stock: 5,
  },
  {
    title: 'SI VIVÍS EN EL EXTERIOR',
    price: 'Donar ❤️',
    benefits: [
      'Y aún así apostás por Festival Estéreo, te dejamos un botón de donación para apoyes con lo que tu ❤️ disponga',
    ],
    bgColor: 'white',
    combineColor: 'third',
    link: 'https://paypal.me/estereofestival',
    stock: 0,
  },
]