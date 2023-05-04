/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/festival/performance.svg';
import Partnership from 'assets/festival/partnership.svg';
import Subscription from 'assets/festival/subscription.svg';
import Support from 'assets/festival/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Shows en vivo',
    title: 'Shows en vivo',
    text:
      'Más de 20 podcast en vivo de todo el país: experiencias inmersivas, presentaciones especiales y mucho más.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Formaciones',
    title: 'Formaciones',
    text:
      'Talleres abiertos y gratuitos que fomentan la profesionalización del podcast, al alcance de la mano.',
  },
  {
    id: 3,
    imgSrc: Support,
    altText: 'Conversatorios',
    title: 'Conversatorios',
    text:
      'Pensar y debatir el futuro de la industria es uno de los ejes principales del festival.',
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: 'Masterclass',
    title: 'Masterclass',
    text:
      'Para quienes se interesan aún más por participar en formaciones más específicas, con personalidades destacadas de la producción.',
  },
];

export default function Festival() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="festival">
      <Container>
        <SectionHeader
          slogan="de qué se trata"
          title="Todo esto sucede en Estéreo"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
