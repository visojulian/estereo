/** @jsx jsx */
import { jsx, Container, Box, Image, Button } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Carousel from 'react-multi-carousel';
import ButtonGroup from 'components/button-group';
import { Lightbox } from 'react-modal-image';
import { useState } from 'react';
import gallery from '../utils/gallery-loader';
import { Link } from 'components/link';

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
  const [image, setImage] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setImageOpen(true);
    setImage(e.target.src);
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
          autoPlay
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
          {gallery.map((item, i) => (
            item && (
              <Box key={i}>
                <div sx={styles.image}>
                  <Image
                    src={item}
                    onClick={handleClick}
                    alt="Foto del evento"
                  />
                </div>
              </Box>
            )
          ))}
        </Carousel>
        <Link path="/galeria">
          <Button
            sx={styles.galleryBtn}
            variant="secondary"
            aria-label="Ver todas las fotos"
          >
            Ver todas las fotos
          </Button>
        </Link>
      </Box>
      {imageOpen &&
        <Lightbox
          onClose={() => setImageOpen(false)}
          small={image}
          large={image}
          hideDownload
          hideZoom
        />
      }
    </section >
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
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
    maxHeight: '209px',
    width: 'auto',
  },
  galleryBtn: {
    my: 4
  }
};
