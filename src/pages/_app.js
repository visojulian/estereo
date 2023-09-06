import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import 'react-toastify/dist/ReactToastify.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return < Component {...pageProps} />

}
