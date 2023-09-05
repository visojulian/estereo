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
                    sx={{ color: 'third', textDecoration: 'none' }}
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
      <Image src={Logo} sx={styles.logo}></Image>
      <Heading as="h3" sx={{ mb: 4, fontSize: '1.5em', fontWeight: '600' }}>
        ¡Nos vemos el 6, 7 y 8 de octubre!
        <hr sx={{ mt: 8 }}></hr>
      </Heading>
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
    m: ['1em 0', '1em', '1em', '1em', '1em', '1em 3em'],
    width: ['100%', '100%', '100%', '40%', '40%', '20%'],
    minHeight: '50vh',
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
    link: 'https://mpago.la/2byr9SV',
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
  },
  {
    title: 'Pack Pituco',
    price: '$7.500',
    benefits: [
      'Remera Estéreo /Amnistía', 'Totebag Estéreo /Amnistía', 'Pack stickers Estéreo',
    ],
    bgColor: 'third',
    combineColor: 'primary',
    link: 'https://mpago.la/1eHfGaF',
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
  },
  {
    title: 'SI VIVÍS EN EL EXTERIOR',
    price: 'Donar ❤️',
    benefits: [
      'Y aún así apostás por Festival Estéreo, te dejamos un botón de donación para dejes lo que tu ❤️ disponga',
    ],
    bgColor: 'white',
    combineColor: 'third',
    link: 'https://paypal.me/estereofestival',
  },
]