import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Landing from '../components/landing';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <SEO title="Estéreo: Festival de Podcast" />
        <Landing />
      </StickyProvider>
    </ThemeProvider>
  );
}
