import React, { useState } from 'react';
import { Box, Button, Container, ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Gallery from 'sections/gallery';

export default function Galeria() {
  const [isComplete, setIsComplete] = useState(false);
  const [show, setShow] = useState(15);
  const handleClick = (e) => {
    e.preventDefault();
    setShow(show + 15);
  };

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <Box sx={styles.gallery} >
            <Gallery show={show} setIsComplete={setIsComplete} />
          </Box>
          {
            !isComplete &&
            <Container sx={styles.btnContainer}>
              <Button
                onClick={handleClick}
                sx={styles.galleryBtn}
                variant="secondary"
                aria-label="Mostrar más"
              >
                Mostrar más
              </Button>
            </Container>
          }
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
};

const styles = {
  gallery: {
    pt: '100px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    pb: 4,
  },
  galleryBtn: {
    mt: 4,
  },
};