import React, { useState } from 'react';
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Text,
  Image,
} from 'theme-ui';
import TextFeature from 'components/text-feature';

import MapaCifespod from 'assets/cifespod.svg';
import shapePattern from 'assets/shape-pattern1.png';

const data = {
  subTitle: 'CIFESPOD 2023',
  title: 'Circuito Iberoamericano de Festivales de Podcast',
};

export default function Cifespod() {
  return (
    <section sx={{ variant: 'section.services' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={MapaCifespod} alt="Mapa cifespod" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />
          <Text as="p">
            <strong>CIFESPOD</strong> es una alianza entre siete eventos de podcast en español que incluye organizaciones de España, Argentina, Colombia, Chile y Uruguay.
            <br />
            Conformada por: <strong>Estéreo, Prosodia, Podcastinación, Estación Podcast, Podcast Fest, Al Oído y Sonora,</strong> la unión tiene entre sus objetivos a largo plazo lograr que el mercado de podcast de habla hispana sea competitivo y se logre la institucionalización del medio como industria cultural.
          </Text>
        </Box>
      </Container>

    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  }
};
