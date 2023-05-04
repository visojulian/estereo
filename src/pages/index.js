import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
// import Festival from '../sections/festival';
import Cifespod from '../sections/cifespod';
// import Feature from '../sections/feature';
// import CoreFeature from '../sections/core-feature';
import Festival from '../sections/festival';
// import Package from '../sections/package';
// import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
// import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import PhotoCarousel from 'sections/photo-carousel';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Festival Estereo" />
          <Banner />
          <PhotoCarousel />
          {/* <Festival /> */}
          <Cifespod />
          {/* <Feature />
          <CoreFeature /> */}
          <Festival />
          {/* <Package />
          <TeamSection /> */}
          <TestimonialCard />
          {/* <BlogSection /> */}
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
