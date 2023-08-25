import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Gallery from 'sections/gallery';
import ConvocatoriasBanner from 'sections/convocatorias-banner';

export default function Festival() {
  const galleryImgs = 6;

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <ConvocatoriasBanner />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}