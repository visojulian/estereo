/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Image, Heading } from 'theme-ui';
import FigureLeft from 'assets/figure-left.png';
import FestivalImg1 from 'assets/festivalimg1.png';
import FestivalImg2 from 'assets/festivalimg2.png';
import FestivalImg3 from 'assets/festivalimg3.png';
import FigureRight from 'assets/figure-right.png';
import Logo from 'assets/logo.svg'
import { Link } from 'components/link';

export default function FestivalBanner() {
  return (
    <section sx={styles.banner}>
      <div sx={styles.banner.container}>
        <div sx={styles.banner.contentBox}>
          <Heading as="h2" sx={{ fontSize: '2em' }}>
            <span sx={{ letterSpacing: '1px' }}>6.7.8</span> OCT
          </Heading>
          <Image src={Logo} sx={styles.logo}></Image>
          <Heading as="h3" sx={{ mb: 4, fontSize: '1.5em', fontWeight: '300' }}>
            Rosario, Argentina
          </Heading>
          <Box sx={styles.mainBanner}>
            <Image src={FigureLeft} fill="true" />
            <div sx={styles.imgBig}>
              <Link sx={styles.imgBig} path={'#shows'}>
                <div sx={styles.hoverText}>
                  SHOWS EN VIVO
                </div>
                <Image src={FestivalImg1} fill="true"></Image>
              </Link>
            </div>
            <div sx={styles.doubleImg}>
              <div sx={styles.img}>
                <Link sx={styles.img} path={'#formacion'}>
                  <div sx={styles.hoverText}>
                    FORMACIÓN</div>
                  <Image src={FestivalImg2} fill="true"></Image>
                </Link>
              </div>
              <div sx={styles.img}>
                <Link sx={styles.img} path={'#industria'}>
                  <div sx={styles.hoverText}>INDUSTRIA</div>
                  <Image src={FestivalImg3} fill="true"></Image>
                </Link>
              </div>
            </div>
            <Image src={FigureRight} fill="true" />
          </Box>
        </div>
      </div>
    </section>
  );
}

const styles = {
  logo: {
    maxWidth: ['35%', '25%', '20%'],
    mb: -1
  },
  mainBanner: {
    display: 'flex',
    width: '100vw',
  },
  imgBig: {
    objectFit: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    ml: '-1px',
    mr: '1px',
    ' img': {
      objectFit: 'cover',
    }
  },
  img: {
    objectFit: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mx: '-2px',
    ' img': {
      objectFit: 'cover',
    }
  },
  hoverText: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    color: 'white',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    pb: 6,
    pr: 8,
    fontSize: 7,
    fontWeight: '600',
    fontFamily: 'Chakra Petch',
    ' :hover': {
      cursor: 'pointer',
      background: 'linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 100%)',
    }
  },
  banner: {
    pt: ['120px', '125px', '135px', '90px', null, null, '105px', '165px'],
    pb: [2, null, 0, null, 2, 0, null, 4],
    position: 'relative',
    zIndex: 2,
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    contentBox: {
      width: ['100%'],
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
