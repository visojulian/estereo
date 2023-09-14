/** @jsx jsx */
import { jsx, Box, Container, Grid, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import LogoDark from 'assets/logo.svg';
import Cifespod from 'assets/cifespod.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Grid sx={styles.widgets} id='partners'>
          {data.widgets.map((item) => (
            <Box
              key={`footer-widget--key${item.id}`}
              sx={styles.widgets.widgetItem}
              id={`i${item.title.toLowerCase()}`}
            >
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as="h3" sx={styles.widgets.title}>{item.title}</Heading>
              </Box>
              {
                item.logos.length > 1 ?
                  <Grid sx={styles.logoGrid}>
                    {
                      item.logos.map((logo, i) => (
                        <Image key={i} src={logo} alt={item.altText} sx={styles.logo} />
                      ))
                    }
                  </Grid>
                  :
                  <Image sx={styles.mainSponsor} src={item.logos[0]} alt={item.altText} />
              }
            </Box>
          ))}
        </Grid>
        <Box sx={styles.footer.footerBottomArea}>
          <Box sx={styles.logoGroup}>
            <Image src={LogoDark} sx={styles.logoFooter} />
            <Box sx={styles.logoGroup.cifespodGroup}>
              <Image src={Cifespod} sx={styles.logoGroup.cifespod} />
              <Text sx={styles.logoGroup.cifespodText}>
                <strong>
                  Circuito Iberoamericano <br /> de Festivales de Podcast
                </strong>
              </Text>
            </Box>
          </Box>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <Link
                  path={path}
                  key={i}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Festival Estéreo {new Date().getFullYear()}. Todos los derechos reservados.
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  logoGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    cifespod: {
      width: '70px',
      '@media screen and (min-width: 1024px)': {
        width: '80px',
      },
    },
    cifespodText: {
      fontSize: '12px',
      '@media screen and (min-width: 1024px)': {
        fontSize: '12px',
      },
    },
    cifespodGroup: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
    '#iinstituciones img': {
      maxWidth: '29%',
      my: 2,
      mx: [0, 0, 2]
    },
    '#ipartners img': {
      objectFit: 'contain',
      maxWidth: ['35%', '30%'],
      minHeight: '70px !important',
      my: [0, 0, 4],
      mx: [0, 0, 2]
    },
    '#icomunidades img': {
      maxWidth: ['35%', '30%'],
    }
  },
  logoGrid: {
    py: [1, null, 2],
    width: ['100%', '80%', '80%'],
    mx: 'auto',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  logo: {
    mx: 'auto',
    maxHeight: '5em',
  },
  logoFooter: {
    width: '40%',
    objectFit: 'contain',
  },
  mainSponsor: {
    ' img': {
      width: '40% !important',
    }
  },
  widgets: {
    py: [4, null, 6],
    px: [4, 0, 3, null, 7, 10],
    width: ['80%', '80%', '100%'],
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column',
    widgetItem: {
      textAlign: 'center',
    },
    title: {
      pb: 3,
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
