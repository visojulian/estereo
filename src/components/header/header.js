/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui';
import { keyframes } from '@emotion/core';
import Link from 'next/link';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const social = [
  {
    path: 'https://www.instagram.com/estereofestival/',
    icon: <FaInstagram />,
  },
  {
    path: 'https://twitter.com/EstereoFestival',
    icon: <FaTwitter />,
  },
  {
    path: 'https://www.linkedin.com/company/est%C3%A9reo-festival-de-podcast/',
    icon: <FaLinkedinIn />,
  },
];

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                href={path}
                spy={true}
                smooth={true}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link href={path} passHref>
                    <a target='_blank' rel="noopener noreferrer">
                      {icon}
                    </a>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      color: 'text',
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },

  social: {
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'flex',
    },
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    a: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary',
      fontSize: 25,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary',
      fontSize: 25,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },
};
