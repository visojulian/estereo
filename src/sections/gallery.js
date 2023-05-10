import gallery from 'utils/gallery-loader';
import { Lightbox } from 'react-modal-image';
import { Box, Container, Grid, Image } from 'theme-ui';
import { useState } from 'react';

export default function Gallery(props) {
  const [imageOpen, setImageOpen] = useState(false);
  const [image, setImage] = useState(false);
  const { show, setIsComplete } = props
  const handleClick = (e) => {
    e.preventDefault();
    setImageOpen(true);
    setImage(e.target.src);
  };

  if (show >= gallery.length) {
    setIsComplete(true);
  }

  return (
    <section>
      <Container sx={styles.gallery}>
        <Grid sx={styles.grid}>
          {gallery.slice(0, show).map((item, i) => (
            <Box key={i}>
              <Box sx={styles.wrapper}>
                <div sx={styles.image}>
                  <Image
                    src={item}
                    alt="Foto del evento"
                    onClick={handleClick}
                  />
                </div>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
      {
        imageOpen &&
        <Lightbox
          onClose={() => setImageOpen(false)}
          small={image}
          large={image}
          hideDownload
          hideZoom
        />
      }
    </section >
  )
};

const styles = {
  gallery: {
    pt: 100,
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
};