import Chat from 'assets/sponsor/dropbox.svg';
import Community from 'assets/sponsor/google.svg';
import Github from 'assets/sponsor/paypal.svg';

export default {
  widgets: [
    {
      id: 1,
      logos: [Chat],
      altText: 'Main Sponsor',
      title: 'Main Sponsor',
    },
    {
      id: 2,
      logos: [Community, Community, Community, Community, Community],
      altText: 'Partner',
      title: 'Partners',
    },
    {
      id: 3,
      logos: [Github, Github, Github],
      altText: 'Espacio',
      title: 'Espacios',
    },
    {
      id: 4,
      logos: [Github, Community, Github, Community],
      altText: 'Comunidad',
      title: 'Comunidades',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/galeria',
      label: 'Galería',
    },
    {
      path: '#partners',
      label: 'Partners',
    },
    {
      path: '/2022',
      label: '2022',
    },
    {
      path: '/contacto',
      label: 'Contacto',
    },
  ],
};
