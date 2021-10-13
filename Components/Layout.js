import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const layoutStyles = css`
  font-family: Arial, Helvetica, sans-serif;
  margin: 1%;
  border-radius: 10px;
`;

export default function Layout(props) {
  return (
    <div css={layoutStyles}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
