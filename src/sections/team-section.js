/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';
import Member7 from 'assets/team/member-7.png';
import Member8 from 'assets/team/member-8.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Federico Rusconi',
    title: 'Federico Rusconi',
    designation: 'Director de Alianzas',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/frusconi/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/el_dudux',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://instagram.com/el_dudux',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Martín Parodi',
    title: 'Martín Parodi',
    designation: 'Director General',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://ar.linkedin.com/in/mart%C3%ADn-parodi-441a64ba',
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/martinparolax',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/martinparola',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Iván Jimenez',
    title: 'Iván Jimenez',
    designation: 'Director de Producción & Técnica',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/ivan-jimenez-78b891146/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/_zonasur/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Lucía Rodriguez',
    title: 'Lucía Rodriguez',
    designation: 'Directora Ejecutiva',
    socialProfile: [
      {
        id: 1,
        name: 'instagram',
        path: 'https://www.instagram.com/soyluerre/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Julián Viso',
    title: 'Julián Viso',
    designation: 'Director Comercial',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/julian-viso/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/vulianj/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Christian Skinner',
    title: 'Christian Skinner',
    designation: 'Director de Arte',
    socialProfile: [
      {
        id: 1,
        name: 'behance',
        path: 'https://www.behance.net/christiskinner1',
        icon: <FaBehance />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/skinnerchristian/',
        icon: <FaInstagram />,
      },
    ],
  },
];
const colaboradores = [
  {
    id: 1,
    imgSrc: Member7,
    altText: 'Jessica Paola Rey',
    title: 'Jessica Paola Rey',
    designation: 'Producción',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/jessica-p-rey/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member8,
    altText: 'Florencia Verna',
    title: 'Florencia Verna',
    designation: 'Comercial',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/flor-verna/',
        icon: <FaLinkedinIn />,
      },
    ]
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="detrás de escena"
          title="El equipo organizador de Estéreo"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
        <SectionHeader
          title="Colaboradoras"
        />

        <Grid sx={styles.gridColaboradores}>
          {colaboradores.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  gridColaboradores: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
};
