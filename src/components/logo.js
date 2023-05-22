/** @jsx jsx */
import { jsx, Image, Box } from 'theme-ui';
import { Link } from 'components/link';
import Cifespod from 'assets/cifespod.png';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Box sx={styles.logoGroup}>
        <Image sx={styles.logo} src={src} alt="estereo landing logo" />
        <Image src={Cifespod} sx={styles.cifespod} alt="cifespod logo" />
      </Box>
    </Link>
  );
};

const styles = {
  logoGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px'
  },
  logo: {
    mr: 3,
  },
  cifespod: {
    aspectRatio: '1/1',
    maxHeight: '40px',
    maxWidth: '40px',
  },
};
