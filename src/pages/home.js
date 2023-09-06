import React, { useEffect } from 'react';
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
import ConvocatoriaHome from 'sections/convocatoria-home';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import ComunidadHome from 'sections/comunidad-home';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      toast('🦄 ¡Sumate a la Comunidad Estéreo!',
        {
          position: "bottom-right",
          autoClose: 9999999,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }, 3000);
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <Banner />
          <ComunidadHome />
          <PhotoCarousel />
          <Cifespod />
          <Festival />
          <ConvocatoriaHome />
          <TestimonialCard />
          <ToastContainer
            position="bottom-right"
            autoClose={9999999}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            limit={1}
            onClick={() => router.push('/comunidad')}
          />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}