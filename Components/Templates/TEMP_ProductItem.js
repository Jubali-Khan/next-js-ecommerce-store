import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import sampleImage from '../public/images/tablet.jpg';

const itemStyle = css`
  border: 1px black solid;
  border-radius: 2%;
  margin: 20px auto;
  padding: 0px 20px;
  box-shadow: 1px 9px 14px -1px rgba(0, 0, 0, 0.43);
`;

// How do you turn a section into a clickable link? Like a card or sth.
export default function ProductItem(props) {
  return (
    <Link href="/products/1">
      <section css={itemStyle}>
        <Image src={sampleImage} width="100px" height="100px" />
        <br />
        <br />
        <div>Product Title</div>
        <br />
      </section>
    </Link>
  );
}
