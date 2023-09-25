/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Image, Heading } from 'theme-ui';
import banner from 'assets/taller-lasraras.jpg';

export default function FestivalBanner() {
  return (
    <section sx={styles.banner}>
      <div sx={styles.banner.container}>
        <div sx={styles.banner.contentBox}>
          <Image src={banner} ></Image>
        </div>
      </div>
    </section>
  );
}

const styles = {

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
      minHeight: '18.2vh'
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
    pb: [1, 1, 6],
    pr: [1, 1, 8],
    fontSize: [3, 4, 7],
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
