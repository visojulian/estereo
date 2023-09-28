/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import { Container, Box, Heading, Text, Embed, Button } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import Link from 'next/link';
import ShapeRight from 'assets/shape-right.png';
import Landscape from 'assets/grilla-landscape.png'
import Grilla from 'assets/grilla.png'
import Image from 'components/image';
// const BannerVid = "https://www.youtube.com/embed/65rqGWf93AU";
const BannerVid = "https://player.cloudinary.com/embed/?public_id=festiestereo&cloud_name=festivalestereo&player[seekThumbnails]=false&player[hideContextMenu]=true&player[floatingWhenNotVisible]=false&player[posterOptions][transformation][startOffset]=11";

export default function Banner() {
  const [viewportWidth, setViewportWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    setViewportWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          {/* <Box sx={styles.banner.text}>
            <Heading as="h3">EDICIÓN 2023</Heading>
            <Heading as="h1" variant="heroPrimary">
              <span sx={{ letterSpacing: '10px' }}>6.7.8 </span>DE OCTUBRE
            </Heading>
            <Text as="p" variant="heroSecondary">
              Realizado en la ciudad de Rosario, Argentina <br /> Estéreo busca unir a creadores y oyentes en un mismo espacio. Brindando formaciones, conversatorios y shows gratuitos. Es el primer festival de podcast que se realiza en país.
            </Text>
          </Box> */}
          {
            viewportWidth > 1024 ?
              <>
                <Link
                  href={'/festival'}
                  spy={true}
                  smooth={true}
                >
                  <Image src={Landscape} sx={{ mb: 4 }} />
                </Link>
                <Link
                  href={'/festival'}
                  spy={true}
                  smooth={true}
                >
                  <Button variant="primary" sx={{ fontSize: '2em !important' }}>
                    SABER MÁS
                  </Button>
                </Link>
              </>
              :
              <>
                <Link
                  href={'/festival'}
                  spy={true}
                  smooth={true}
                >
                  <Image src={Grilla} sx={{ mb: 4 }} />
                </Link>
                <Link
                  href={'/festival'}
                  spy={true}
                  smooth={true}
                >
                  <Button variant="primary" sx={{ fontSize: '1.5em !important' }}>
                    SABER MÁS
                  </Button>
                </Link>
              </>
          }
        </Box>
        {/*
        <Box sx={styles.banner.imageBox}>
          <Embed
            src={BannerVid}
            alt="banner"
            style={{ height: 'auto', width: '100%', aspectRatio: 16 / 9 }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            frameBorder="0"
          />
        </Box> */}
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '8em', '8em'],
    pb: [2, null, 0, null, 2, 0, null, 5],
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
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
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
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: '100%',
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      m: '0 auto',
      width: '70%'
    },
    imageBox: {
      justifyContent: 'center',
      width: '100%',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      video: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
