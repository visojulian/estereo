/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Biblioteca from 'assets/feature/biblioteca.png';
import Galpon from 'assets/feature/galpon11.png';
import Cine from 'assets/feature/cine.png';

const data = [
  {
    id: 1,
    imgSrc: Biblioteca,
    altText: 'Biblioteca Argentina',
    title: 'Biblioteca Argentina',
    text:
      'Pte. Roca 731, Rosario',
    link: 'https://goo.gl/maps/vz3NDTexBi4PFANp6',
  },
  {
    id: 2,
    imgSrc: Galpon,
    altText: 'Galpón 11',
    title: 'Galpón 11',
    text:
      'Estévez Boero 980, Rosario',
    link: 'https://goo.gl/maps/4xPdceGkK82M1aos7',
  },
  {
    id: 3,
    imgSrc: Cine,
    altText: 'El Cairo Cine Público',
    title: 'El Cairo Cine Público',
    text:
      'Santa Fe 1120, Rosario',
    link: 'https://goo.gl/maps/SwimqA2hyGvjQnjXA'
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="¿Dónde es?"
          title="Estas son las sedes de este año"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              link={item.link}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
