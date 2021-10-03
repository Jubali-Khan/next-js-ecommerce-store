import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div
      css={css`
        font-family: Arial, Helvetica, sans-serif;
      `}
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
