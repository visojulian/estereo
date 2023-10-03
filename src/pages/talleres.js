import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import ListaTalleres from 'sections/lista-talleres';

export default function Talleres() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <ListaTalleres />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

