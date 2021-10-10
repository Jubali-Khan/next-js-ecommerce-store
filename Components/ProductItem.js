import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

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
    <Link href={`/products/${props.product.id}`}>
      <section css={itemStyle}>
        <Image src={props.product.productImage} width="100px" height="100px" />
        <br />
        <br />
        <div>{props.product.productTitle}</div>
        <div>{props.product.productPrice}</div>
        <br />
      </section>
    </Link>
  );
}
