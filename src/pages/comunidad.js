import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import ComunidadEstereo from 'sections/comunidadestereo'

export default function Comunidad() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <ComunidadEstereo />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

