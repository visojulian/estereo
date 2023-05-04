import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import TeamSection from '../sections/team-section';
import NosotrosBanner from 'sections/nosotros-banner';

export default function Nosotros() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Festival Estereo" />
          <NosotrosBanner />
          <TeamSection />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}