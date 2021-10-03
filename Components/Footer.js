import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/favicon.ico';

const headerStyle = css`
  display: flex;
  background-color: lightgray;
  border-radius: 10px;
`;

const navStyles = css`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const midSectionStyles = css`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 10px;
`;

export default function Footer() {
  return (
    <header css={headerStyle}>
      <nav css={navStyles}>
        <Link href="/">
          <a>
            <Image src={logo} width="40px" height="40px" alt="logo" />
          </a>
        </Link>
        <section css={midSectionStyles}>
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
      </nav>
    </header>
  );
}
