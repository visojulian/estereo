import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import FestivalBanner from 'sections/festival-banner';
import Gallery from 'sections/gallery';

export default function Festival() {
  const galleryImgs = 6;

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Festival Estereo" />
          <FestivalBanner />
          <Gallery show={galleryImgs} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}