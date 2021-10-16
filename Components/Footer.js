import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/favicon.ico';

const footerStyles = css`
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
  border-radius: 10px;
  margin: 3% 1%;
`;

const linksSectionStyles = css`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 10px;
  margin: auto;
`;

const logoSectionStyles = css`
  margin: auto;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <section css={logoSectionStyles}>
        <Link href="/">
          <a>
            <Image src={logo} width="40px" height="40px" alt="logo" />
          </a>
        </Link>
      </section>
      <section css={linksSectionStyles}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>products</a>
        </Link>
        <Link href="/aboutUs">
          <a>About Us</a>
        </Link>
      </section>
    </footer>
  );
}
