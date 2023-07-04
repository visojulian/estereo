import React from 'react';
import { ThemeProvider, Container } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import BlogSection from 'sections/blog-section';

export default function Festival() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <Container>
            <BlogSection />
          </Container>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}