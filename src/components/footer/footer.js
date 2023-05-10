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
            <Image src={Cifespod} sx={styles.logoGroup.cifespod} />
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
    justifyContent: 'space-between',
    height: '147px',
    cifespod: {
      width: '147px',
      ml: 3,
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
  },
  logoGrid: {
    py: [1, null, 2],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    alignItems: 'center',
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
      'repeat(3,1fr)',
    ],
  },
  logo: {
    mx: 'auto',
    maxHeight: '80px',
  },
  logoFooter: {
    mx: 'auto',
    width: '300px',
  },
  mainSponsor: {
    width: '100%',
  },
  widgets: {
    py: [4, null, 6],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(2,1fr)',
    ],
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
