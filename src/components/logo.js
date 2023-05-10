/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

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
      <Image sx={styles.logo} src={src} alt="estereo landing logo" />
    </Link>
  );
};

const styles = {
  logo: {
    maxWidth: '130px'
  },
};
