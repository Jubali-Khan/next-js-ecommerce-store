import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/favicon.ico';

const headerStyle = css`
  display: flex;
  background-color: lightgreen;
  border-radius: 10px;
`;

const navStyles = css`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const midSectionStyles = css`
  display: flex;
  gap: 15px;
  flex-direction: row;
`;

export default function Header() {
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
            <a>
              <h3>Home</h3>
            </a>
          </Link>
          <Link href="/products/">
            <a>
              <h3>products</h3>
            </a>
          </Link>
          <Link href="/aboutUs">
            <a>
              <h3>About Us</h3>
            </a>
          </Link>
        </section>
        <Link href="/shoppingCart">
          <a>
            <h3>ShoppingCart</h3>
          </a>
        </Link>
      </nav>
    </header>
  );
}
