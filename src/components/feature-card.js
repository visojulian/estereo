/** @jsx jsx */
import { jsx, Image, Box, Button, Heading, Link } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
  link,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Link href={link}><Button sx={styles.wrapper.button}>{text}</Button></Link>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    mb: -1,
  },

  img: {
    width: ['70px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    maxHeight: '150px',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
    },
    button: {
      maxWidth: '70%',
    },
  },

};
