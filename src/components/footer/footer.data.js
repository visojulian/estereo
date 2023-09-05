import Amnistia from 'assets/sponsor/amnistia.png';
import Brujula from 'assets/sponsor/brujula.png';
import SanCristobal from 'assets/sponsor/sancristobal.svg';
import Hindenburg from 'assets/sponsor/hindenburg.png';
import Taragui from 'assets/sponsor/taragui.png';
import Cima from 'assets/sponsor/cima.png';
import ImageCampus from 'assets/sponsor/imagecampus.png';
import Ugr from 'assets/sponsor/ugr.svg';
import Chevallier from 'assets/sponsor/chevallier.png';
import ConcejoMuni from 'assets/sponsor/concejomuni.png';
import MinCultura from 'assets/sponsor/mincultura.png';
import Biblioteca from 'assets/sponsor/biblio.png';
import Cultura from 'assets/sponsor/cultura.png';
import Diputados from 'assets/sponsor/diputados.png';
import Galpon from 'assets/sponsor/galpon.png';
import Esc from 'assets/sponsor/ecs.png';
import Cairo from 'assets/sponsor/elcairo.png';
import Fomento from 'assets/sponsor/fomento.png';
import Labso from 'assets/sponsor/labso.png';
import Municipalidad from 'assets/sponsor/municipalidad.png';
import Unraf from 'assets/sponsor/unraf.png';
import Drop from 'assets/sponsor/drop.png';
import Podcasteros from 'assets/sponsor/podcasteros.png';
import TodoSobrePodcast from 'assets/sponsor/todosobre.png';
import EscuchaPodcast from 'assets/sponsor/escuchapodcast.png';

export default {
  widgets: [
    // {
    //   id: 1,
    //   logos: [Podimo],
    //   altText: 'Main Sponsor',
    //   title: 'Main Sponsor',
    // },
    {
      id: 1,
      logos: [Amnistia],
      altText: 'Amnistía Internacional',
      title: 'Con el apoyo de',
    },
    {
      id: 2,
      logos: [SanCristobal, Taragui, Cima, Hindenburg, Chevallier, Brujula, Ugr, ImageCampus],
      altText: 'Partner',
      title: 'Partners',
    },
    {
      id: 3,
      logos: [Biblioteca, Cultura, Diputados, Galpon, Esc, Cairo, Fomento, Labso, Municipalidad, Unraf, MinCultura, ConcejoMuni],
      altText: 'Institución',
      title: 'Instituciones',
    },
    {
      id: 4,
      logos: [Drop, TodoSobrePodcast, Podcasteros, EscuchaPodcast],
      altText: 'Comunidad',
      title: 'Comunidades',
    },
  ],
  menuItem: [
    {
      path: '/home',
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
      path: 'contacto',
      label: 'Contacto',
    },
    // {
    //   path: '/2022',
    //   label: '2022',
    // },
  ],
};
