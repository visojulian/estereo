import React, { useState } from 'react';
import { Button, Container, ThemeProvider } from 'theme-ui';
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
          <SEO title="Festival Estereo" />
          <Gallery show={show} setIsComplete={setIsComplete} />
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
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    pb: 4,
  },
  galleryBtn: {
    mt: 4,
  },
};