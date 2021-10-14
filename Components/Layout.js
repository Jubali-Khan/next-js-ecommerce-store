import { css } from '@emotion/react';
import { getParsedCookie } from './AddToCartSection';
import Footer from './Footer';
import Header from './Header';

const layoutStyles = css`
  font-family: Arial, Helvetica, sans-serif;
  margin: 1%;
  border-radius: 10px;
  background-color: beige;
`;

export default function Layout(props) {
  const totalOrder = getParsedCookie('totalOrder') || [];
  return (
    <div css={layoutStyles}>
      <Header totalOrder={totalOrder} />
      {props.children}
      <Footer />
    </div>
  );
}
