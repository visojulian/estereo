import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Estéreo es un festival gratuito de tres días donde se realizan shows en vivo, talleres y charlas con la confluencia de tres mil personas en tres días. Es el primer festival nacional de podcast de Argentina y participa del Circuito Iberoamericano de Festivales de Podcast.',
  author = 'Julian Viso',
  meta,
  title = 'Estéreo: Festival de Podcast',
  width = 'width=device-width',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `viewport`,
      content: width,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
};
