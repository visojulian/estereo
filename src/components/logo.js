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
        <Box sx={styles.cifespodIcon}>
          <Image src={Cifespod} sx={styles.cifespod} alt="cifespod logo" />
        </Box>
      </Box>
    </Link>
  );
};

const styles = {
  logoGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    mr: 3,
    maxHeight: '50px',
  },
  cifespodIcon: {
    display: 'flex',
    alignItems: 'center',
    width: ['15vw', '10vw', '10vw', '7vw', '5vw', '3vw'],
  },
  cifespod: {
    height: '30%',
  },
};
