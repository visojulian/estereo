import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Cifespod from '../sections/cifespod';
import Festival from '../sections/festival';
import TestimonialCard from '../sections/testimonial';
import PhotoCarousel from 'sections/photo-carousel';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <Banner />
          <PhotoCarousel />
          <Cifespod />
          <Festival />
          <TestimonialCard />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
