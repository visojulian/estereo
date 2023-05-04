/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Carousel from 'react-multi-carousel';
import ButtonGroup from 'components/button-group';
import { Lightbox } from 'react-modal-image';

import Avatar1 from 'assets/photo-carousel/fugas.jpg';
import Avatar2 from 'assets/photo-carousel/fugas.jpg';
import Avatar3 from 'assets/photo-carousel/fugas.jpg';
import Avatar4 from 'assets/photo-carousel/fugas.jpg';
import { useState } from 'react';

const data = [
  {
    id: 1,
    avatar: Avatar1,
  },
  {
    id: 2,
    avatar: Avatar2,
  },
  {
    id: 3,
    avatar: Avatar3,
  },
  {
    id: 4,
    avatar: Avatar4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function PhotoCarousel() {
  const [imageOpen, setImageOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setImageOpen(true);
  };
  return (
    <section id="photo-crousel" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Así se vive Estéreo" title="Edición 2022 y Campamento Digital" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box key={`photo--key${item.id}`}>
              <div sx={styles.image}>
                <Image
                  src={item.avatar}
                  onClick={handleClick}
                  alt="Foto del evento"
                />
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
      {imageOpen &&
        <Lightbox
          onClose={() => setImageOpen(false)}
          small={Avatar1}
          large={Avatar1}
          hideDownload
          hideZoom
        />
      }
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  image: {
    mr: [3, 3, 3, 4],
    display: 'flex',
    img: {
      width: 'auto',
      height: 'auto',
    },
  },
};
