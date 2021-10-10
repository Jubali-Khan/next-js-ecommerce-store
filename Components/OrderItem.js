import { css } from '@emotion/react';
import Image from 'next/image';
import sampleImage from '../public/images/tablet.jpg';

const orderItemStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;

  margin: 1%;
  border: 1px solid black;
  border-radius: 2%;
`;

const ButtonsSectionStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
`;

const divStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;

  margin: 1%;
  border: 1px solid black;
  border-radius: 2%;
`;

export default function OrderItem(props) {
  return (
    <section css={orderItemStyles}>
      <div css={divStyle}>
        <Image src={sampleImage} width="120px" height="120px" />
        <section id="ProductTextSection">
          <h4>Product Title</h4>
          <h4>Product Price</h4>
        </section>
      </div>
      <section id="ButtonsSection" css={ButtonsSectionStyles}>
        <select>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
        <br />
        <button>delete Item from cart</button>
      </section>
    </section>
  );
}
